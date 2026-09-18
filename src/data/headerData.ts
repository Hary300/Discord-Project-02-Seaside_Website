import { Menu, type LucideIcon } from 'lucide-react';
type NavId = 'home' | 'audio' | 'video' | 'consulting' | 'contact';
type NavLabel = 'Home' | 'Audio' | 'Video' | 'Consulting' | 'Contact';
type NavHref = '#home' | '#audio' | '#video' | '#consulting' | '#contact';

interface NavItem {
  id: NavId;
  label: NavLabel;
  href: NavHref;
}

interface BrandInfo {
  name: string;
  subtitle: string;
}

interface HeaderData {
  logo: BrandInfo;
  navigation: NavItem[];
  hamburgerButtonIcon: LucideIcon;
}

export const headerData: HeaderData = {
  logo: {
    name: 'SEASIDE',
    subtitle: 'AUDIO & VIDEO',
  },
  navigation: [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'audio', label: 'Audio', href: '#audio' },
    { id: 'video', label: 'Video', href: '#video' },
    { id: 'consulting', label: 'Consulting', href: '#consulting' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ],
  hamburgerButtonIcon: Menu,
};
