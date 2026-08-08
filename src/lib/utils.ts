export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function getSubjectColorClass(subjectId: string): {
  bg: string;
  text: string;
  border: string;
  glow: string;
} {
  const colors: Record<string, { bg: string; text: string; border: string; glow: string }> = {
    physics: {
      bg: 'bg-blue-500/10',
      text: 'text-blue-400',
      border: 'border-blue-500/20',
      glow: 'shadow-blue-500/10',
    },
    chemistry: {
      bg: 'bg-emerald-500/10',
      text: 'text-emerald-400',
      border: 'border-emerald-500/20',
      glow: 'shadow-emerald-500/10',
    },
    mathematics: {
      bg: 'bg-amber-500/10',
      text: 'text-amber-400',
      border: 'border-amber-500/20',
      glow: 'shadow-amber-500/10',
    },
    biology: {
      bg: 'bg-green-500/10',
      text: 'text-green-400',
      border: 'border-green-500/20',
      glow: 'shadow-green-500/10',
    },
    'social-science': {
      bg: 'bg-purple-500/10',
      text: 'text-purple-400',
      border: 'border-purple-500/20',
      glow: 'shadow-purple-500/10',
    },
  };

  return colors[subjectId] ?? {
    bg: 'bg-accent/10',
    text: 'text-accent-light',
    border: 'border-accent/20',
    glow: 'shadow-accent/10',
  };
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function getChapterCount(chapters: { status: string }[]): {
  total: number;
  available: number;
  comingSoon: number;
} {
  const total = chapters.length;
  const available = chapters.filter((c) => c.status === 'available').length;
  return { total, available, comingSoon: total - available };
}
