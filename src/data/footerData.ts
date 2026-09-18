import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import type { IconType } from 'react-icons/lib';
import { FaSquareXTwitter } from 'react-icons/fa6';

type SocialPlatform = 'facebook' | 'instagram' | 'x' | 'youtube';

interface SocialMediaLink {
  platform: SocialPlatform;
  url: string;
  icon: IconType;
}

interface FooterData {
  copyrightText: string;
  socialLinks: SocialMediaLink[];
}

export const footerData: FooterData = {
  copyrightText: 'Copyright 2026 Seaside Audio + Video',
  socialLinks: [
    { platform: 'facebook', url: 'https://facebook.com', icon: FaFacebook },
    { platform: 'instagram', url: 'https://instagram.com', icon: FaInstagram },
    { platform: 'x', url: 'https://x.com', icon: FaSquareXTwitter },
    { platform: 'youtube', url: 'https://youtube.com', icon: FaYoutube },
  ],
};
