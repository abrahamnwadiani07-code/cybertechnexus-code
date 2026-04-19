import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const posts = [
  {
    slug: 'zero-trust-architecture-2026',
    title: 'Why Zero Trust Is No Longer Optional in 2026',
    excerpt: 'With the collapse of the traditional perimeter, zero-trust architecture has moved from aspirational to essential. Here\'s how to get started.',
    date: '2026-04-10',
    readTime: 7,
    tags: ['Zero Trust', 'Strategy'],
    category: 'Strategy',
  },
  {
    slug: 'incident-response-playbook',
    title: 'Building an Incident Response Playbook That Actually Works',
    excerpt: 'Most IR plans gather dust until a breach happens. We break down how to create a living playbook your team will actually follow.',
    date: '2026-03-28',
    readTime: 10,
    tags: ['Incident Response', 'Operations'],
    category: 'Operations',
  },
  {
    slug: 'cloud-security-misconfigurations',
    title: 'Top 10 Cloud Security Misconfigurations We See Every Week',
    excerpt: 'After hundreds of cloud security assessments, these are the misconfigurations that keep showing up — and how to fix them.',
    date: '2026-03-15',
    readTime: 8,
    tags: ['Cloud', 'Best Practices'],
    category: 'Cloud Security',
  },
  {
    slug: 'grc-compliance-guide',
    title: 'GRC for Growing Businesses: A Practical Guide',
    excerpt: 'Governance, Risk, and Compliance doesn\'t have to be overwhelming. A practical guide for teams building their first GRC program.',
    date: '2026-03-01',
    readTime: 12,
    tags: ['GRC', 'Compliance'],
    category: 'GRC',
  },
  {
    slug: 'apt-threat-landscape-2026',
    title: 'APT Threat Landscape: What Changed in 2026',
    excerpt: 'Advanced persistent threat groups are evolving their tactics. An analysis of the latest campaigns targeting critical infrastructure.',
    date: '2026-02-18',
    readTime: 9,
    tags: ['Threat Intel', 'APT'],
    category: 'Threat Intelligence',
  },
  {
    slug: 'security-awareness-training-roi',
    title: 'The ROI of Security Awareness Training',
    excerpt: 'Quantifying the return on investment for employee security training programs — data from 150+ organizations.',
    date: '2026-02-05',
    readTime: 6,
    tags: ['Training', 'ROI'],
    category: 'Training',
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 lg:px-12 pt-8 pb-20">
        {/* Back */}
        <Link to="/" className="inline-flex items-center gap-2 font-poppins text-xs text-ctn-text-dim hover:text-ctn-blue transition-colors mb-10 no-underline">
          <ArrowLeft size={14} /> Back to home
        </Link>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-14">
          <span className="inline-block font-mono text-[11px] tracking-[0.25em] text-ctn-blue uppercase mb-3 px-3 py-1 border border-ctn-blue/20 rounded-full">
            Blog
          </span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-ctn-text-bright mt-4 mb-4">
            Threat <span className="text-ctn-blue text-glow-blue">Intelligence</span> & Insights
          </h1>
          <p className="text-ctn-text-dim max-w-2xl">
            Analysis, guides, and cybersecurity news from the CyberTech Nexus security team.
          </p>
        </motion.div>

        {/* Posts */}
        <div className="space-y-5">
          {posts.map((post, i) => (
            <motion.div key={post.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.07 }}>
              <Link to={`/blog/${post.slug}`} className="block cyber-card p-7 no-underline group">
                <div className="flex flex-wrap items-center gap-4 mb-3 text-[11px] text-ctn-text-dim font-mono tracking-wider">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime} min</span>
                  <span className="text-ctn-blue">{post.category}</span>
                </div>
                <h2 className="font-poppins font-semibold text-lg text-ctn-text-bright mb-2 group-hover:text-ctn-blue transition-colors">
                  {post.title}
                </h2>
                <p className="text-ctn-text-dim text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-1 font-mono text-[9px] tracking-wider text-ctn-blue border border-ctn-blue/15 px-2 py-0.5 rounded">
                      <Tag size={8} /> {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
