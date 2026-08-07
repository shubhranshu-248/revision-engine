import { useParams } from 'react-router-dom'
import { BookOpen, CheckCircle2, Hourglass } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'
import ChapterCard from '../components/ChapterCard'
import SubjectHeader from '../components/SubjectHeader'
import Badge from '../components/Badge'
import NotFound from './NotFound'
import { getSubjectBySlug, availableChapterCount } from '../utils/content'

export default function Subject() {
  const { subjectSlug } = useParams()
  const subject = getSubjectBySlug(subjectSlug)

  if (!subject) return <NotFound />

  const available = availableChapterCount(subject)
  const total = subject.chapters.length
  const pending = total - available
  const progress = total === 0 ? 0 : Math.round((available / total) * 100)

  return (
    <section className="container-content py-10 md:py-14">
      <Breadcrumb
        items={[{ label: 'Home', to: '/' }, { label: subject.name }]}
      />

      <SubjectHeader
        subject={subject}
        meta={
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge icon={CheckCircle2}>{available} available</Badge>
              {pending > 0 && (
                <Badge variant="muted" icon={Hourglass}>
                  {pending} coming soon
                </Badge>
              )}
              <Badge variant="muted" icon={BookOpen}>
                {total} chapters total
              </Badge>
            </div>
            <div>
              <div className="flex items-center justify-between text-[11px] font-medium text-text-secondary">
                <span>Chapter coverage</span>
                <span className="font-mono font-semibold text-text-primary">
                  {progress}%
                </span>
              </div>
              <div className="mt-1.5 h-1.5 w-full max-w-md overflow-hidden rounded-full bg-muted-bg">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-violet-500 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        }
      />

      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="eyebrow">All chapters</p>
          <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-text-primary md:text-3xl">
            Choose a chapter to revise
          </h2>
        </div>
      </div>

      {subject.chapters.length === 0 ? (
        <div className="card-base p-10 text-center">
          <p className="text-sm text-text-secondary">
            No chapters have been indexed yet for this subject. Check back
            soon.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {subject.chapters.map((chapter) => (
            <ChapterCard
              key={chapter.id}
              chapter={chapter}
              subjectSlug={subject.slug}
            />
          ))}
        </div>
      )}
    </section>
  )
}
