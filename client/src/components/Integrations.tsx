import { motion } from 'framer-motion';

const integrations = [
  { name: 'AWS', category: 'Cloud' },
  { name: 'Azure', category: 'Cloud' },
  { name: 'GCP', category: 'Cloud' },
  { name: 'GitHub', category: 'DevOps' },
  { name: 'Jira', category: 'Project' },
  { name: 'Slack', category: 'Comms' },
  { name: 'Okta', category: 'Identity' },
  { name: 'CrowdStrike', category: 'Security' },
  { name: 'Splunk', category: 'SIEM' },
  { name: 'Tenable', category: 'Vuln Mgmt' },
  { name: 'ServiceNow', category: 'ITSM' },
  { name: 'Microsoft 365', category: 'Productivity' },
  { name: 'Datadog', category: 'Monitoring' },
  { name: 'Qualys', category: 'Compliance' },
  { name: 'Cloudflare', category: 'Network' },
  { name: 'PagerDuty', category: 'Incident' },
];

export default function Integrations() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ctn-bg via-ctn-bg-1/20 to-ctn-bg" />
      <div className="relative px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="inline-block font-mono text-[11px] tracking-[0.25em] text-ctn-blue uppercase mb-3 px-3 py-1 border border-ctn-blue/20 rounded-full">
            Integrations
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-ctn-text-bright mt-4 mb-4">
            Connects With Your <span className="text-ctn-blue text-glow-blue">Stack</span>
          </h2>
          <p className="text-ctn-text-dim max-w-xl mx-auto">
            Compliance Board OS integrates with 50+ tools to automate evidence collection and control monitoring.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {integrations.map((int, i) => (
            <motion.div
              key={int.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="cyber-card p-4 text-center group"
            >
              <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-ctn-blue/5 border border-ctn-blue/10 flex items-center justify-center font-poppins font-bold text-sm text-ctn-blue group-hover:bg-ctn-blue/10 transition-colors">
                {int.name.charAt(0)}
              </div>
              <div className="font-poppins text-xs text-ctn-text-bright font-medium truncate">{int.name}</div>
              <div className="font-mono text-[8px] text-ctn-text-dim tracking-wider uppercase">{int.category}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
