import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import HeroSection from '@/sections/01-hero';
import PartnersSection from '@/sections/02-partners';
import ServiceSection from '@/sections/03-service';
import SampleSection from '@/sections/04-sample';
import ContactSection from '@/sections/05-contact';

function App() {
  return (
    <div className='max-w-360 mx-auto'>
      <Header />
      <HeroSection />
      <PartnersSection />
      <ServiceSection />
      <SampleSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
