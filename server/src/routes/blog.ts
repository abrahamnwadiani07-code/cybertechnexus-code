import { Router } from 'express';

const router = Router();

const posts = [
  {
    id: '1',
    slug: 'zero-trust-architecture-2026',
    title: 'Why Zero Trust Is No Longer Optional in 2026',
    excerpt: 'With the collapse of the traditional perimeter, zero-trust architecture has moved from aspirational to essential.',
    published: true,
    authorName: 'Marcus Chen, CISSP',
    tags: ['Zero Trust', 'Strategy'],
    readTime: 7,
    createdAt: '2026-04-10',
  },
  {
    id: '2',
    slug: 'incident-response-playbook',
    title: 'Building an Incident Response Playbook That Actually Works',
    excerpt: 'Most IR plans gather dust until a breach happens. We break down how to create a living playbook.',
    published: true,
    authorName: 'Sarah Kim, GCIH',
    tags: ['Incident Response', 'Operations'],
    readTime: 10,
    createdAt: '2026-03-28',
  },
  {
    id: '3',
    slug: 'cloud-security-misconfigurations',
    title: 'Top 10 Cloud Security Misconfigurations We See Every Week',
    excerpt: 'After hundreds of cloud security assessments, these are the misconfigurations that keep showing up.',
    published: true,
    authorName: 'DevSecOps Team',
    tags: ['Cloud', 'Best Practices'],
    readTime: 8,
    createdAt: '2026-03-15',
  },
  {
    id: '4',
    slug: 'soc2-compliance-guide',
    title: "SOC 2 Compliance: The Engineer's Guide",
    excerpt: "SOC 2 doesn't have to be a nightmare. A practical, no-nonsense guide for engineering teams.",
    published: true,
    authorName: 'Compliance Team',
    tags: ['Compliance', 'SOC 2'],
    readTime: 12,
    createdAt: '2026-03-01',
  },
];

router.get('/', (_req, res) => {
  const published = posts.filter((p) => p.published);
  res.json({ success: true, data: published });
});

router.get('/:slug', (req, res) => {
  const post = posts.find((p) => p.slug === req.params.slug && p.published);
  if (!post) {
    res.status(404).json({ success: false, message: 'Post not found' });
    return;
  }
  res.json({ success: true, data: post });
});

export default router;
