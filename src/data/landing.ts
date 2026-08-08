import type { Feature, FAQ, Testimonial } from '@/types';

export const features: Feature[] = [
  {
    icon: 'BookOpen',
    title: 'Curated Notes',
    description: 'Handpicked, chapter-wise notes designed to maximize your understanding and retention.',
  },
  {
    icon: 'Target',
    title: 'Board-Focused',
    description: 'Every resource is aligned with the CBSE Class 10 board exam pattern and marking scheme.',
  },
  {
    icon: 'Zap',
    title: 'Quick Revision',
    description: 'Concise summaries and key points for last-minute revision before exams.',
  },
  {
    icon: 'Layout',
    title: 'Organized Library',
    description: 'Clean subject-wise and chapter-wise organization so you find what you need instantly.',
  },
  {
    icon: 'Shield',
    title: 'Free Forever',
    description: 'All resources are completely free. No hidden charges, no premium walls.',
  },
  {
    icon: 'Smartphone',
    title: 'Mobile Ready',
    description: 'Study anywhere, anytime. Fully optimized for phones, tablets, and desktops.',
  },
];

export const faqs: FAQ[] = [
  {
    question: 'What is Revision Engine?',
    answer: 'Revision Engine is a free, premium revision platform built specifically for CBSE Class 10 students. It provides curated notes, summaries, and study materials organized by subject and chapter.',
  },
  {
    question: 'Is Revision Engine free to use?',
    answer: 'Yes, absolutely. Revision Engine is completely free and will remain free. There are no hidden charges, subscriptions, or premium tiers.',
  },
  {
    question: 'Which subjects are covered?',
    answer: 'We cover all major CBSE Class 10 subjects including Physics, Chemistry, Biology, Mathematics, and Social Science (History, Geography, Political Science, Economics).',
  },
  {
    question: 'Are the materials aligned with the CBSE syllabus?',
    answer: 'Yes. All materials are carefully curated and aligned with the latest CBSE Class 10 syllabus and exam pattern.',
  },
  {
    question: 'Can I access materials on my phone?',
    answer: 'Absolutely. Revision Engine is fully responsive and works beautifully on phones, tablets, laptops, and desktops.',
  },
  {
    question: 'Will more subjects or classes be added?',
    answer: 'Yes! We are actively working on expanding our content library. More classes and subjects will be added in the future.',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Priya Sharma',
    role: 'Class 10 Student',
    content: 'Revision Engine made my board prep so much easier. The notes are clean, well-organized, and exactly what I needed.',
  },
  {
    name: 'Rahul Verma',
    role: 'Class 10 Student',
    content: 'I love how everything is organized by chapter. No more searching through random PDFs — it is all right here.',
  },
  {
    name: 'Ananya Patel',
    role: 'Class 10 Student',
    content: 'The quick revision summaries saved me during exams. Clean design and super easy to use on my phone.',
  },
];

export const stats = [
  { value: '5', label: 'Subjects' },
  { value: '50+', label: 'Chapters' },
  { value: '100%', label: 'Free' },
  { value: '24/7', label: 'Access' },
];

export const howItWorks = [
  {
    step: 1,
    title: 'Choose Your Subject',
    description: 'Browse through Physics, Chemistry, Biology, Mathematics, or Social Science.',
  },
  {
    step: 2,
    title: 'Select a Chapter',
    description: 'Navigate to the specific chapter you want to revise.',
  },
  {
    step: 3,
    title: 'Access Resources',
    description: 'Download notes, summaries, and practice materials — all completely free.',
  },
];
