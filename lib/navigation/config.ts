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
      { key: 'whatSetsUsApart', href: '/about#our-edge' },
      { key: 'howWeWork', href: '/about#framework' },
    ],
  },
  {
    key: 'ourServices',
    href: '/collaborate',
    items: [
      { key: 'executiveCoaching', href: '/executive-coaching' },
      { key: 'keynotes', href: '/keynotes' },
      { key: 'teamPerformance', href: '/team-performance' },
      { key: 'leadershipDevelopment', href: '/leadership-development' },
      { key: 'strategicAdvisory', href: '/strategic-advisory' },
    ],
  },
  {
    key: 'clients',
    href: '/client-voices',
  },
  {
    key: 'gallery',
    href: '/gallery',
  },
  {
    key: 'contact',
    href: '/contact',
  },
];
