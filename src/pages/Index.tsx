import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Blog from '@/components/Blog';
import FAQ from '@/components/FAQ';
import ConsultForm from '@/components/ConsultForm';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--white)' }}>
      <Header />
      <Hero />
      <Services />
      <About />
      <Blog />
      <FAQ />
      <ConsultForm />
      <Contacts />
      <Footer />
    </div>
  );
}
