import type { Phase, DiagramSize } from './types';

export const PHASES: Phase[] = [
  {
    id: 'discover',
    number: '01',
    name: 'Discover',
    tagline: 'The Why',
    startAngle: 270,
    endAngle: 360,
  },
  {
    id: 'define',
    number: '02',
    name: 'Define',
    tagline: 'The What',
    startAngle: 0,
    endAngle: 90,
  },
  {
    id: 'design',
    number: '03',
    name: 'Design',
    tagline: 'The How',
    startAngle: 90,
    endAngle: 180,
  },
  {
    id: 'deploy',
    number: '04',
    name: 'Deploy',
    tagline: 'The Delivery',
    startAngle: 180,
    endAngle: 270,
  },
];

export const COLORS = {
  black: '#0A0A0A',
  blackSoft: '#1A1A1A',
  white: '#FFFFFF',
  whiteSoft: '#FAFAFA',
  red: '#C41E3A',
  redLight: '#E8354D',
  gray100: '#F5F5F5',
  gray200: '#E5E5E5',
  gray300: '#D4D4D4',
  gray400: '#A3A3A3',
  gray500: '#737373',
  gray600: '#525252',
};

export const SIZES: Record<'full' | 'preview', DiagramSize> = {
  full: {
    width: 800,
    height: 450,
    outerRadius: 180,
    innerRadius: 50,
    labelRadius: 130,
  },
  preview: {
    width: 400,
    height: 400,
    outerRadius: 160,
    innerRadius: 45,
    labelRadius: 115,
  },
};
