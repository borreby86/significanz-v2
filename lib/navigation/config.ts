export interface NavSubItem {
  key: string;
  href: string;
}

export interface NavItem {
  key: string;
  href?: string;
  items?: NavSubItem[];
}

export type NavigationConfig = NavItem[];

export const navigationConfig: NavigationConfig = [
  {
    key: 'ourServices',
    href: '/collaborate',
  },
  {
    key: 'gallery',
    href: '/gallery',
  },
  {
    key: 'clients',
    href: '/client-voices',
  },
  {
    key: 'significanz',
    href: '/about',
    items: [
      { key: 'ourPurpose', href: '/about#purpose' },
      { key: 'ourEdge', href: '/about#our-edge' },
      { key: 'ourFramework', href: '/about#framework' },
      { key: 'masteryFramework', href: '/about#mastery-framework' },
    ],
  },
  {
    key: 'contact',
    href: '/contact',
  },
];
