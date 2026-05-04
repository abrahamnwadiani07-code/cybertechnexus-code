import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden">
        <div className="relative py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-poppins text-3xl md:text-4xl font-bold text-ctn-text-bright mb-3">Privacy Policy</h1>
              <p className="text-ctn-text-dim text-sm mb-10">Last updated: January 15, 2025</p>

              <div className="prose-ctn space-y-8 text-sm leading-relaxed text-ctn-text">
                <section>
                  <h2 className="font-poppins text-lg font-semibold text-ctn-text-bright mb-3">1. Information We Collect</h2>
                  <p className="text-ctn-text-dim mb-3">CyberTech Nexus ("we", "us", "our") collects information you provide directly:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-ctn-text-dim">
                    <li><strong className="text-ctn-text">Contact Information:</strong> Name, email address, phone number, company name when you fill out forms or contact us.</li>
                    <li><strong className="text-ctn-text">Account Data:</strong> Login credentials and profile information for Client Portal users.</li>
                    <li><strong className="text-ctn-text">Usage Data:</strong> Pages visited, time spent, browser type, IP address, and device information collected via analytics.</li>
                    <li><strong className="text-ctn-text">Communication Data:</strong> Records of correspondence when you contact our team.</li>
                    <li><strong className="text-ctn-text">Assessment Data:</strong> Information submitted through our Cyber Health Check and other diagnostic tools.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-poppins text-lg font-semibold text-ctn-text-bright mb-3">2. How We Use Your Information</h2>
                  <ul className="list-disc pl-5 space-y-1.5 text-ctn-text-dim">
                    <li>To provide, maintain, and improve our cybersecurity services</li>
                    <li>To process and respond to your inquiries and service requests</li>
                    <li>To send security advisories, product updates, and marketing communications (with your consent)</li>
                    <li>To generate anonymized analytics to improve our platform</li>
                    <li>To comply with legal obligations and protect our legitimate interests</li>
                    <li>To detect, prevent, and address technical or security issues</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-poppins text-lg font-semibold text-ctn-text-bright mb-3">3. Data Sharing & Third Parties</h2>
                  <p className="text-ctn-text-dim mb-3">We do not sell your personal data. We may share information with:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-ctn-text-dim">
                    <li><strong className="text-ctn-text">Service Providers:</strong> Cloud hosting (AWS), analytics (privacy-focused), email delivery services — all bound by data processing agreements.</li>
                    <li><strong className="text-ctn-text">Legal Requirements:</strong> When required by law, regulation, or legal process.</li>
                    <li><strong className="text-ctn-text">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-poppins text-lg font-semibold text-ctn-text-bright mb-3">4. Data Security</h2>
                  <p className="text-ctn-text-dim">We implement industry-standard security measures including encryption at rest and in transit (TLS 1.3), access controls, regular security audits, and incident response procedures. As a cybersecurity company, we hold ourselves to the highest standards of data protection.</p>
                </section>

                <section>
                  <h2 className="font-poppins text-lg font-semibold text-ctn-text-bright mb-3">5. Data Retention</h2>
                  <p className="text-ctn-text-dim">We retain personal data only as long as necessary to fulfill the purposes outlined in this policy, typically no longer than 3 years after your last interaction. Client Portal data is retained for the duration of the service agreement plus 1 year.</p>
                </section>

                <section>
                  <h2 className="font-poppins text-lg font-semibold text-ctn-text-bright mb-3">6. Your Rights</h2>
                  <p className="text-ctn-text-dim mb-3">Depending on your jurisdiction, you may have the right to:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-ctn-text-dim">
                    <li>Access, correct, or delete your personal data</li>
                    <li>Object to or restrict processing</li>
                    <li>Data portability</li>
                    <li>Withdraw consent at any time</li>
                    <li>Lodge a complaint with a supervisory authority</li>
                  </ul>
                  <p className="text-ctn-text-dim mt-3">To exercise these rights, contact us at <a href="mailto:privacy@cybertechnexus.com" className="text-ctn-blue hover:underline">privacy@cybertechnexus.com</a>.</p>
                </section>

                <section>
                  <h2 className="font-poppins text-lg font-semibold text-ctn-text-bright mb-3">7. Cookies</h2>
                  <p className="text-ctn-text-dim">We use essential cookies for site functionality and optional analytics cookies to understand usage patterns. You can manage cookie preferences through the banner shown on first visit or your browser settings.</p>
                </section>

                <section>
                  <h2 className="font-poppins text-lg font-semibold text-ctn-text-bright mb-3">8. Contact Us</h2>
                  <p className="text-ctn-text-dim">For privacy-related inquiries:<br />
                  CyberTech Nexus — Data Protection<br />
                  Email: <a href="mailto:privacy@cybertechnexus.com" className="text-ctn-blue hover:underline">privacy@cybertechnexus.com</a><br />
                  Dallas, Texas, USA</p>
                </section>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
