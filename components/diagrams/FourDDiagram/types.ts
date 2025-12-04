export interface Phase {
  id: 'discover' | 'define' | 'design' | 'deploy';
  number: string;
  name: string;
  tagline: string;
  startAngle: number;
  endAngle: number;
}

export interface FourDDiagramProps {
  variant?: 'full' | 'preview';
  className?: string;
  autoPlay?: boolean;
  interactive?: boolean;
}

export interface DiagramSize {
  width: number;
  height: number;
  outerRadius: number;
  innerRadius: number;
  labelRadius: number;
}
