import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import ComplianceOS from '@/components/ComplianceOS';
import Integrations from '@/components/Integrations';
import Services from '@/components/Services';
import HealthCheck from '@/components/HealthCheck';
import CyberRiskCalculator from '@/components/CyberRiskCalculator';
import CaseStudies from '@/components/CaseStudies';
import Training from '@/components/Training';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import LiveChat from '@/components/LiveChat';

export default function HomePage() {
  return (
    <>
      <SEO title="Home" description="Enterprise-grade cybersecurity solutions, compliance automation, penetration testing, and security training. Protecting 200+ organizations worldwide." path="/" />
      <Navbar />
      <Hero />
      <ClientLogos />
      <ComplianceOS />
      <Integrations />
      <Services />
      <HealthCheck />
      <CyberRiskCalculator />
      <CaseStudies />
      <Training />
      <WhyChooseUs />
      <Testimonials />
      <About />
      <FAQ />
      <Newsletter />
      <Contact />
      <Footer />
      <StickyCTA />
      <LiveChat />
    </>
  );
}
