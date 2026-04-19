import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import contactRoutes from './routes/contact.js';
import blogRoutes from './routes/blog.js';
import subscriberRoutes from './routes/subscriber.js';
import healthCheckRoutes from './routes/healthcheck.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const rateLimiter = new RateLimiterMemory({
  points: parseInt(process.env.RATE_LIMIT_MAX || '100'),
  duration: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000') / 1000,
});

app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
  try {
    await rateLimiter.consume(req.ip || 'unknown');
    next();
  } catch {
    res.status(429).json({
      success: false,
      message: 'Too many requests. Please try again later.',
    });
  }
});

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

app.use('/api/contact', contactRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/subscribers', subscriberRoutes);
app.use('/api/health-check', healthCheckRoutes);

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('Error:', err.stack);
  res.status(500).json({
    success: false,
    message: process.env.NODE_ENV === 'production'
      ? 'Something went wrong!'
      : err.message,
  });
});

app.use('*', (_req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found',
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`CORS origin: ${process.env.CORS_ORIGIN || 'http://localhost:3000'}`);
});

export default app;
