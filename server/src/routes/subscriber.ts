import { Router } from 'express';

const router = Router();

const subscribers: Array<{ id: string; email: string; createdAt: Date; active: boolean }> = [];

router.post('/', (req, res) => {
  const { email } = req.body;

  if (!email) {
    res.status(400).json({ success: false, message: 'Email is required.' });
    return;
  }

  const existing = subscribers.find((s) => s.email === email);
  if (existing) {
    res.status(409).json({ success: false, message: 'Already subscribed.' });
    return;
  }

  subscribers.push({
    id: crypto.randomUUID(),
    email,
    createdAt: new Date(),
    active: true,
  });

  console.log('New subscriber:', email);
  res.status(201).json({ success: true, message: 'Subscribed successfully.' });
});

export default router;
