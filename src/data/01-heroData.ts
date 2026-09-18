import norstone from '@/assets/images/partners/norstone.png';
import dsd from '@/assets/images/partners/dsd.png';
import ain from '@/assets/images/partners/ain.png';
import avPlanet from '@/assets/images/partners/avPlanet.png';
import wilson from '@/assets/images/partners/wilson.png';

interface Partner {
  id: string;
  name: string;
  logoUrl: string;
}

interface HeroData {
  title: {
    line1: string;
    line2: string;
  };
  partners: Partner[];
}

export const heroData: HeroData = {
  title: {
    line1: 'MAKING YOUR VISION,',
    line2: 'A REALITY',
  },
  partners: [
    {
      id: 'norstone',
      name: 'NorStone',
      logoUrl: norstone,
    },
    { id: 'wilson', name: 'Wilson', logoUrl: wilson },
    {
      id: 'av-planet',
      name: 'AV Planet',
      logoUrl: avPlanet,
    },
    { id: 'ain', name: 'AIN', logoUrl: ain },
    {
      id: 'dsd',
      name: 'DSD Direct Stream Digital',
      logoUrl: dsd,
    },
  ],
};
