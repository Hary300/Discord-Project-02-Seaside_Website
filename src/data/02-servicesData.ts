import liveEvent from '@/assets/images/services/liveEvent.png';
import videoProduction from '@/assets/images/services/videoProduction.png';
import liveAudio from '@/assets/images/services/liveAudio.png';
import consultations from '@/assets/images/services/consultations.png';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'live-events',
    title: 'Live Events',
    description:
      'some lorem dolor bacon strip steak ball tip swine bacon. short ribs rump cow chicken corned beef tenderloin strip steak mignon. ham bacon ground round rump short ribs. Tailcone bacon tenderloin jerky flank tenderloin ball tip spare ribs hamburger.',
    image: liveEvent,
  },
  {
    id: 'video-productions',
    title: 'Video Productions',
    description:
      'some lorem dolor bacon strip steak ball tip swine bacon. short ribs rump cow chicken corned beef tenderloin strip steak mignon. ham bacon ground round rump short ribs. Tailcone bacon tenderloin jerky flank tenderloin ball tip spare ribs hamburger.',
    image: videoProduction,
  },
  {
    id: 'live-audio',
    title: 'Live Audio',
    description:
      'some lorem dolor bacon strip steak ball tip swine bacon. short ribs rump cow chicken corned beef tenderloin strip steak mignon. ham bacon ground round rump short ribs. Tailcone bacon tenderloin jerky flank tenderloin ball tip spare ribs hamburger.',
    image: liveAudio,
  },
  {
    id: 'consultations',
    title: 'Consultations',
    description:
      'some lorem dolor bacon strip steak ball tip swine bacon. short ribs rump cow chicken corned beef tenderloin strip steak mignon. ham bacon ground round rump short ribs. Tailcone bacon tenderloin jerky flank tenderloin ball tip spare ribs hamburger.',
    image: consultations,
  },
];
