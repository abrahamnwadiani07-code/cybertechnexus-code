import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden">
        <div className="relative py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-poppins text-3xl md:text-4xl font-bold text-ctn-text-bright mb-3">Terms of Service</h1>
              <p className="text-ctn-text-dim text-sm mb-10">Last updated: January 15, 2025</p>

              <div className="space-y-8 text-sm leading-relaxed text-ctn-text">
                <section>
                  <h2 className="font-poppins text-lg font-semibold text-ctn-text-bright mb-3">1. Agreement to Terms</h2>
                  <p className="text-ctn-text-dim">By accessing or using CyberTech Nexus services, website, or Client Portal ("Services"), you agree to be bound by these Terms of Service. If you are entering into these terms on behalf of a company or organization, you represent that you have authority to bind that entity.</p>
                </section>

                <section>
                  <h2 className="font-poppins text-lg font-semibold text-ctn-text-bright mb-3">2. Services Description</h2>
                  <p className="text-ctn-text-dim mb-3">CyberTech Nexus provides:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-ctn-text-dim">
                    <li>Cybersecurity consulting, advisory, and managed security services</li>
                    <li>Penetration testing and vulnerability assessments</li>
                    <li>Incident response and digital forensics</li>
                    <li>Compliance management platform (Compliance Board OS)</li>
                    <li>Cybersecurity training and certification programs</li>
                    <li>GRC consulting and audit preparation</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-poppins text-lg font-semibold text-ctn-text-bright mb-3">3. Client Portal Access</h2>
                  <p className="text-ctn-text-dim">Access to the Client Portal is granted to authorized users under an active service agreement. You are responsible for maintaining the confidentiality of your credentials. You must notify us immediately of any unauthorized access. We reserve the right to suspend access if we detect security concerns.</p>
                </section>

                <section>
                  <h2 className="font-poppins text-lg font-semibold text-ctn-text-bright mb-3">4. Acceptable Use</h2>
                  <p className="text-ctn-text-dim mb-3">You agree not to:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-ctn-text-dim">
                    <li>Use our services for any unlawful purpose</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Interfere with or disrupt the integrity of our services</li>
                    <li>Share credentials or allow unauthorized persons to access your account</li>
                    <li>Reverse-engineer, decompile, or disassemble any part of our platform</li>
                    <li>Use findings from penetration tests to exploit or attack third-party systems</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-poppins text-lg font-semibold text-ctn-text-bright mb-3">5. Confidentiality</h2>
                  <p className="text-ctn-text-dim">Both parties acknowledge that they may receive confidential information during the engagement. All vulnerability reports, security assessments, and compliance data are considered confidential. Neither party shall disclose confidential information without prior written consent, except as required by law.</p>
                </section>

                <section>
                  <h2 className="font-poppins text-lg font-semibold text-ctn-text-bright mb-3">6. Intellectual Property</h2>
                  <p className="text-ctn-text-dim">All tools, methodologies, frameworks, and software developed by CyberTech Nexus remain our intellectual property. Clients retain ownership of their data and receive a license to use deliverables for their internal security purposes.</p>
                </section>

                <section>
                  <h2 className="font-poppins text-lg font-semibold text-ctn-text-bright mb-3">7. Limitation of Liability</h2>
                  <p className="text-ctn-text-dim">CyberTech Nexus provides security services on a best-effort basis. While we employ certified professionals and industry-standard methodologies, no security assessment can guarantee the discovery of all vulnerabilities. Our total liability is limited to the fees paid for the specific service giving rise to the claim.</p>
                </section>

                <section>
                  <h2 className="font-poppins text-lg font-semibold text-ctn-text-bright mb-3">8. Payment Terms</h2>
                  <p className="text-ctn-text-dim">Fees are as specified in your service agreement or statement of work. Invoices are due within 30 days of issuance. Late payments may incur a 1.5% monthly interest charge. We reserve the right to suspend services for accounts more than 60 days overdue.</p>
                </section>

                <section>
                  <h2 className="font-poppins text-lg font-semibold text-ctn-text-bright mb-3">9. Termination</h2>
                  <p className="text-ctn-text-dim">Either party may terminate services with 30 days written notice. Upon termination, we will securely destroy or return all client data within 30 days. Obligations of confidentiality survive termination for 3 years.</p>
                </section>

                <section>
                  <h2 className="font-poppins text-lg font-semibold text-ctn-text-bright mb-3">10. Governing Law</h2>
                  <p className="text-ctn-text-dim">These terms are governed by the laws of the State of Texas, United States. Any disputes shall be resolved through binding arbitration in Dallas, Texas.</p>
                </section>

                <section>
                  <h2 className="font-poppins text-lg font-semibold text-ctn-text-bright mb-3">11. Contact</h2>
                  <p className="text-ctn-text-dim">
                    For questions about these terms:<br />
                    CyberTech Nexus — Legal<br />
                    Email: <a href="mailto:legal@cybertechnexus.com" className="text-ctn-blue hover:underline">legal@cybertechnexus.com</a><br />
                    Dallas, Texas, USA
                  </p>
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
