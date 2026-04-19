import { Router } from 'express';

const router = Router();

// In-memory store (replace with Prisma/DB in production)
const contacts: Array<{
  id: string;
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
  createdAt: Date;
}> = [];

router.post('/', (req, res) => {
  const { name, email, company, service, message } = req.body;

  if (!name || !email || !service || !message) {
    res.status(400).json({
      success: false,
      message: 'Name, email, service, and message are required.',
    });
    return;
  }

  const contact = {
    id: crypto.randomUUID(),
    name,
    email,
    company: company || '',
    service,
    message,
    createdAt: new Date(),
  };

  contacts.push(contact);
  console.log('New contact submission:', { name, email, service });

  res.status(201).json({
    success: true,
    message: 'Contact form submitted successfully.',
    data: { id: contact.id },
  });
});

router.get('/', (_req, res) => {
  res.json({ success: true, data: contacts });
});

export default router;
