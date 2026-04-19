import { Router } from 'express';

const router = Router();

interface HealthCheckSubmission {
  id: string;
  name: string;
  email: string;
  company: string;
  score: number;
  maxScore: number;
  percentage: number;
  answers: Record<string, { question: string; answer: string; score: number }>;
  createdAt: Date;
}

const submissions: HealthCheckSubmission[] = [];

router.post('/', (req, res) => {
  const { name, email, company, score, maxScore, percentage, answers } = req.body;

  if (!name || !email) {
    res.status(400).json({ success: false, message: 'Name and email are required.' });
    return;
  }

  const submission: HealthCheckSubmission = {
    id: crypto.randomUUID(),
    name,
    email,
    company: company || '',
    score,
    maxScore,
    percentage,
    answers,
    createdAt: new Date(),
  };

  submissions.push(submission);
  console.log(`Health Check submitted: ${name} (${email}) - Score: ${percentage}%`);

  res.status(201).json({
    success: true,
    message: 'Health check report submitted successfully.',
    data: { id: submission.id, percentage },
  });
});

router.get('/', (_req, res) => {
  res.json({ success: true, data: submissions });
});

export default router;
