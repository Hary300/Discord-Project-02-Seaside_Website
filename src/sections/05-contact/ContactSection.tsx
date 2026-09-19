import SectionWrapper from '@/components/layouts/SectionWrapper';
import { contactData } from '@/data/05-contactData';
import ContactForm from './components/ContactForm';

const ContactSection = () => {
  const title = contactData.title;
  const subtitle = contactData.subtitle;
  return (
    <SectionWrapper sectionId='contact' className='flex flex-col gap-10'>
      <div className='flex flex-col gap-2 items-center'>
        <h2 className='font-copperplate text-[40px]'>{title}</h2>
        <p className='text-2xl'>{subtitle}</p>
      </div>
      <ContactForm />
    </SectionWrapper>
  );
};

export default ContactSection;
