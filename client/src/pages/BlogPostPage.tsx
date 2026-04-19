import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const postsContent: Record<string, {
  title: string; date: string; readTime: number; tags: string[]; author: string; content: string;
}> = {
  'zero-trust-architecture-2026': {
    title: 'Why Zero Trust Is No Longer Optional in 2026',
    date: '2026-04-10', readTime: 7, tags: ['Zero Trust', 'Strategy'],
    author: 'Marcus Chen, CISSP',
    content: `The traditional network perimeter is dead. In 2026, with distributed workforces, multi-cloud architectures, and increasingly sophisticated supply-chain attacks, the "castle-and-moat" approach to security is not just outdated — it's dangerous.

## What is Zero Trust?

Zero Trust is a security framework that requires all users, whether inside or outside the organization's network, to be authenticated, authorized, and continuously validated before being granted access to applications and data.

## The Three Pillars

**1. Never Trust, Always Verify**
Every access request is treated as if it originates from an untrusted network. Multi-factor authentication, device health checks, and contextual access policies are enforced at every layer.

**2. Least Privilege Access**
Users and systems receive only the minimum permissions necessary to perform their functions. Access is time-bound and regularly reviewed.

**3. Assume Breach**
Design your architecture as if an attacker is already inside. Micro-segmentation, continuous monitoring, and automated response capabilities minimize blast radius.

## Getting Started

The journey to Zero Trust doesn't happen overnight. We recommend starting with identity as your new perimeter, then progressively layering in device trust, network segmentation, and workload security.

At CyberTech Nexus, we've helped over 50 organizations architect and implement Zero Trust frameworks. Contact us for a free assessment of your current security posture.`,
  },
  'incident-response-playbook': {
    title: 'Building an Incident Response Playbook That Actually Works',
    date: '2026-03-28', readTime: 10, tags: ['Incident Response', 'Operations'],
    author: 'Sarah Kim, GCIH',
    content: `We've reviewed hundreds of incident response plans. Most share a common problem: they're written once, filed away, and never tested. When a real incident hits, teams scramble.

## Why Most IR Plans Fail

- They're too generic — they don't map to your specific infrastructure
- No one has practiced them — tabletop exercises are skipped
- Escalation paths are outdated — people have changed roles
- Communication templates don't exist — every notification is written from scratch under pressure

## A Better Approach

### 1. Scenario-Based Playbooks
Instead of one monolithic plan, create playbooks for your top 5 threat scenarios: ransomware, data exfiltration, insider threat, DDoS, and supply-chain compromise.

### 2. Runbook Automation
Automate the first 15 minutes of response. Isolation, evidence preservation, and initial notification should happen automatically while your team assembles.

### 3. Regular Drills
Monthly tabletop exercises and quarterly full simulations keep your team sharp and reveal gaps before attackers do.

### 4. Post-Incident Reviews
Every incident — even near-misses — should generate a blameless retrospective with concrete action items.

## The CTN Approach

Our IR retainer includes playbook development, quarterly drills, and 24/7 rapid response with guaranteed SLAs. When seconds matter, preparation is everything.`,
  },
  'cloud-security-misconfigurations': {
    title: 'Top 10 Cloud Security Misconfigurations We See Every Week',
    date: '2026-03-15', readTime: 8, tags: ['Cloud', 'Best Practices'],
    author: 'DevSecOps Team',
    content: `After conducting hundreds of cloud security assessments across AWS, Azure, and GCP, certain misconfigurations appear with alarming regularity. Here are the top 10 we encounter every single week.

## 1. Overly Permissive IAM Policies
Using wildcard (*) permissions in IAM policies is the cloud equivalent of leaving your front door wide open.

## 2. Public Storage Buckets
Despite years of high-profile breaches, we still find publicly accessible storage containing sensitive data.

## 3. Disabled Audit Logging
You can't detect what you can't see. Logging must be enabled across all regions and all services.

## 4. Unencrypted Data at Rest
Default encryption should be enabled for every storage service, database, and volume.

## 5. Missing Network Segmentation
Flat networks in the cloud are just as dangerous as flat networks on-premise.

## 6. Hardcoded Secrets in Code
API keys, database credentials, and tokens committed to repositories remain one of the most common attack vectors.

## 7. No MFA on Root/Admin Accounts
Root and admin accounts without MFA are critical findings in nearly every assessment.

## 8. Outdated Runtime Environments
Lambda functions and container images running outdated runtimes with known CVEs.

## 9. Excessive Cross-Account Access
Overly permissive trust relationships between accounts expand blast radius significantly.

## 10. No Automated Remediation
Finding misconfigurations is only half the battle. Automated guardrails should prevent and remediate drift continuously.

## Fix It Now

Our Cloud Security Posture Management service continuously monitors your cloud infrastructure and auto-remediates critical misconfigurations before attackers find them.`,
  },
  'grc-compliance-guide': {
    title: "GRC for Growing Businesses: A Practical Guide",
    date: '2026-03-01', readTime: 12, tags: ['GRC', 'Compliance'],
    author: 'GRC Team',
    content: `Governance, Risk, and Compliance can feel like an overwhelming alphabet soup. It doesn't have to be. Here's a practical guide to building a GRC program that actually works.

## What GRC Actually Covers

GRC is organized around three pillars:
- **Governance**: Policies, procedures, and organizational structure for decision-making
- **Risk Management**: Identifying, assessing, and mitigating threats to your business
- **Compliance**: Meeting regulatory and industry requirements (ISO 27001, GDPR, HIPAA, PCI DSS, DORA, NIST)

## The Engineering Checklist

### Access Controls
- SSO with MFA for all production systems
- Role-based access control with quarterly reviews
- Automated onboarding/offboarding tied to HR systems

### Change Management
- All production changes through reviewed pull requests
- CI/CD pipeline with automated testing
- Deployment audit trail with rollback capability

### Monitoring & Logging
- Centralized logging with 90-day retention
- Alerting on security events
- Regular log reviews documented

### Incident Management
- Documented IR procedures
- Incident tracking and post-mortems
- Customer notification procedures

## Common Pitfalls

- Starting too late — begin 3-6 months before your audit
- Over-documenting — policies should be concise and actually followed
- Manual processes — automate evidence collection from day one
- Treating it as a one-time project — compliance is continuous

## How We Help

CyberTech Nexus provides end-to-end GRC programs. From gap analysis to audit prep, we get you compliant without disrupting engineering velocity.`,
  },
  'apt-threat-landscape-2026': {
    title: 'APT Threat Landscape: What Changed in 2026',
    date: '2026-02-18', readTime: 9, tags: ['Threat Intel', 'APT'],
    author: 'Threat Intelligence Team',
    content: `Advanced persistent threat groups continue to evolve their tactics, techniques, and procedures at an alarming rate. Here's what our threat intelligence team has observed in 2026.

## Key Trends

### AI-Augmented Social Engineering
APT groups are leveraging generative AI to craft highly convincing phishing campaigns, deepfake voice calls, and even video impersonations targeting C-suite executives.

### Supply Chain as Primary Vector
Rather than attacking organizations directly, sophisticated threat actors are increasingly targeting software supply chains, CI/CD pipelines, and managed service providers.

### Living off the Land
Modern APTs minimize their use of custom malware, instead leveraging legitimate system tools and services to blend in with normal operations.

## Sectors Under Increased Targeting

- **Critical Infrastructure**: Energy, water, and telecommunications
- **Healthcare**: Patient data and pharmaceutical IP
- **Financial Services**: Payment systems and trading platforms
- **Government**: Defense contractors and diplomatic communications

## Defensive Recommendations

- Implement behavioral analytics beyond signature-based detection
- Conduct regular threat hunting exercises
- Validate your supply chain security posture
- Deploy deception technology to detect lateral movement
- Maintain threat intelligence feeds integrated with your SIEM

## How CTN Helps

Our Managed Detection and Response service combines automated threat detection with expert human analysis to identify and respond to APT activity before damage occurs.`,
  },
  'security-awareness-training-roi': {
    title: 'The ROI of Security Awareness Training',
    date: '2026-02-05', readTime: 6, tags: ['Training', 'ROI'],
    author: 'Cyber Protection Academy',
    content: `Is security awareness training worth the investment? We analyzed data from 150+ organizations to find out.

## The Numbers

- **72% reduction** in successful phishing attacks after 12 months of training
- **$4.2M average cost** of a data breach (IBM 2025) — training programs cost a fraction
- **91% of breaches** start with a phishing email — training addresses the root cause
- **3.5x ROI** average return on security training investment

## What Makes Training Effective

### Frequency Matters
Annual training is not enough. Organizations with quarterly training saw 4x better results than those with annual-only programs.

### Simulated Phishing
Regular phishing simulations with immediate feedback are the single most effective training method. Click rates typically drop from 30% to under 5%.

### Role-Based Content
Generic training doesn't work. Tailor content to job roles — finance teams need different training than developers.

### Positive Reinforcement
Reward good security behavior rather than punishing mistakes. Recognition programs drive lasting culture change.

## The CTN Cyber Protection Academy

Our training programs combine live instruction, hands-on labs, and continuous assessment to build a security-first culture across your organization. Programs include cybersecurity certification prep, practical IT skills, and GRC training.`,
  },
};

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? postsContent[slug] : null;

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="max-w-4xl mx-auto px-6 lg:px-12 pt-8 pb-20 text-center">
          <h1 className="font-poppins text-2xl text-ctn-text-bright mb-4">Post not found</h1>
          <Link to="/blog" className="text-ctn-blue font-poppins text-sm no-underline">&larr; Back to blog</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <article className="max-w-3xl mx-auto px-6 lg:px-12 pt-8 pb-20">
        <Link to="/blog" className="inline-flex items-center gap-2 font-poppins text-xs text-ctn-text-dim hover:text-ctn-blue transition-colors mb-10 no-underline">
          <ArrowLeft size={14} /> Back to blog
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex flex-wrap items-center gap-4 mb-5 font-mono text-[11px] text-ctn-text-dim tracking-wider">
            <span>{post.date}</span>
            <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime} min read</span>
            <span className="text-ctn-blue">{post.author}</span>
          </div>

          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-ctn-text-bright mb-5 leading-tight">{post.title}</h1>

          <div className="flex gap-2 mb-10">
            {post.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1 font-mono text-[9px] tracking-wider text-ctn-blue border border-ctn-blue/15 px-2 py-0.5 rounded">
                <Tag size={8} /> {tag}
              </span>
            ))}
          </div>

          <div className="space-y-4 text-[15px] leading-relaxed text-ctn-text-dim">
            {post.content.split('\n\n').map((block, i) => {
              if (block.startsWith('## ')) return <h2 key={i} className="font-poppins font-bold text-xl text-ctn-text-bright mt-10 mb-4">{block.replace('## ', '')}</h2>;
              if (block.startsWith('### ')) return <h3 key={i} className="font-poppins font-semibold text-base text-ctn-text-bright mt-8 mb-3">{block.replace('### ', '')}</h3>;
              if (block.startsWith('- ')) return (
                <ul key={i} className="list-none space-y-2 pl-0">
                  {block.split('\n').map((line, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-ctn-blue mt-1.5 text-[8px]">&#9654;</span>
                      <span dangerouslySetInnerHTML={{ __html: line.replace(/^- /, '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-ctn-text-bright">$1</strong>') }} />
                    </li>
                  ))}
                </ul>
              );
              return <p key={i} dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, '<strong class="text-ctn-text-bright">$1</strong>') }} />;
            })}
          </div>

          {/* CTA */}
          <div className="cyber-card p-8 mt-12 text-center">
            <h3 className="font-poppins font-bold text-lg text-ctn-text-bright mb-3">Need help implementing this?</h3>
            <p className="text-ctn-text-dim text-sm mb-5">Our team can help you put these recommendations into action.</p>
            <Link to="/#contact" className="btn btn-primary text-sm py-3 px-6 no-underline inline-flex">Get in Touch</Link>
          </div>
        </motion.div>
      </article>
      <Footer />
    </>
  );
}
