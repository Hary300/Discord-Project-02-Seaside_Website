import { footerData } from '@/data/footerData';

const Footer = () => {
  const text = footerData.copyrightText;
  const socials = footerData.socialLinks;
  return (
    <footer className='px-4 sm:px-10 lg:px-15 xl:px-30 h-auto sm:h-30 md:h-37.5 py-8 sm:py-0 bg-gradient-primary flex flex-col sm:flex-row sm:items-center text-white justify-between gap-4'>
      <p>{text}</p>
      <div className='flex gap-8 items-center '>
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <div key={social.platform}>
              <Icon className='size-10' />
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
