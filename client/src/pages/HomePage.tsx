import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import ComplianceOS from '@/components/ComplianceOS';
import Integrations from '@/components/Integrations';
import Services from '@/components/Services';
import HealthCheck from '@/components/HealthCheck';
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

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ClientLogos />
      <ComplianceOS />
      <Integrations />
      <Services />
      <HealthCheck />
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
    </>
  );
}
