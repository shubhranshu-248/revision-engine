import { useMemo } from 'react';
import { subjects } from '@/data/content';
import type { Subject, Chapter } from '@/types';

export function useSubject(slug: string | undefined): Subject | undefined {
  return useMemo(() => {
    if (!slug) return undefined;
    return subjects.find((s) => s.slug === slug);
  }, [slug]);
}

export function useChapter(
  subjectSlug: string | undefined,
  chapterSlug: string | undefined
): { subject: Subject | undefined; chapter: Chapter | undefined } {
  return useMemo(() => {
    if (!subjectSlug || !chapterSlug) return { subject: undefined, chapter: undefined };
    const subject = subjects.find((s) => s.slug === subjectSlug);
    const chapter = subject?.chapters.find((c) => c.slug === chapterSlug);
    return { subject, chapter };
  }, [subjectSlug, chapterSlug]);
}
