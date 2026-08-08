import { Atom, FlaskConical, Calculator, Leaf, Globe } from 'lucide-react';
import type { SubjectIconName } from '@/types';

interface SubjectIconProps {
  name: SubjectIconName;
  className?: string;
  size?: number;
}

const iconMap = {
  Atom,
  FlaskConical,
  Calculator,
  Leaf,
  Globe,
} as const;

export function SubjectIcon({ name, className, size = 24 }: SubjectIconProps) {
  const Icon = iconMap[name];
  return <Icon className={className} size={size} />;
}
