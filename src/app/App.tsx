import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import HeroSection from '@/sections/01-hero';
import ServiceSection from '@/sections/02-service';
import SampleSection from '@/sections/03-sample';
import ContactSection from '@/sections/04-contact';

function App() {
  return (
    <div className='max-w-360 mx-auto'>
      <Header />
      <HeroSection />
      <ServiceSection />
      <SampleSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
