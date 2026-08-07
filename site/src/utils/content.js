import content from '../data/content.json'

export function getAllSubjects() {
  return content.subjects
}

export function getSubjectBySlug(slug) {
  return content.subjects.find((s) => s.slug === slug) || null
}

export function getChapter(subjectSlug, chapterSlug) {
  const subject = getSubjectBySlug(subjectSlug)
  if (!subject) return { subject: null, chapter: null }
  const chapter =
    subject.chapters.find((c) => c.slug === chapterSlug) || null
  return { subject, chapter }
}

export function availableChapterCount(subject) {
  return subject.chapters.filter((c) => c.status === 'available').length
}

export function totalChapterCount(subject) {
  return subject.chapters.length
}
