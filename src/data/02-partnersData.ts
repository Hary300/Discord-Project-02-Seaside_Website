import norstone from '@/assets/images/partners/norstone.png';
import wilson from '@/assets/images/partners/wilson.png';
import avPlanet from '@/assets/images/partners/avPlanet.png';
import ain from '@/assets/images/partners/ain.png';
import dsd from '@/assets/images/partners/dsd.png';

interface PartnerData {
  id: string;
  name: string;
  logoUrl: string;
}

export const partnersData: PartnerData[] = [
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
];
