import type { NavItem } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Subjects', href: '/subjects' },
  { label: 'About', href: '/about' },
];

export const SITE_CONFIG = {
  name: 'Revision Engine',
  description: 'A premium revision platform for CBSE Class 10 students.',
  url: 'https://revision-engine.vercel.app',
  author: 'Shubhranshu Sahu',
} as const;
