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
    key: 'about',
    href: '/about',
    items: [
      { key: 'purpose', href: '/about#purpose' },
      { key: 'ourEdge', href: '/about#our-edge' },
    ],
  },
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
    key: 'contact',
    href: '/contact',
  },
];
