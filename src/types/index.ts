export interface Chapter {
  id: string;
  number: number;
  name: string;
  slug: string;
  status: 'available' | 'coming-soon';
  files: ResourceFile[];
}

export interface ResourceFile {
  id: string;
  name: string;
  type: 'pdf' | 'notes' | 'summary' | 'practice';
  url: string;
  size?: string;
}

export interface Subject {
  id: string;
  name: string;
  slug: string;
  icon: SubjectIconName;
  description: string;
  chapters: Chapter[];
}

export type SubjectIconName = 'Atom' | 'FlaskConical' | 'Calculator' | 'Leaf' | 'Globe';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar?: string;
}
