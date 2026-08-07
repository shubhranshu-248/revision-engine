import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, FileWarning, BookOpen } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'
import FileCard from '../components/FileCard'
import NotFound from './NotFound'
import { getChapter } from '../utils/content'
import { sortFilesByType } from '../utils/format'

export default function Chapter() {
  const { subjectSlug, chapterSlug } = useParams()
  const { subject, chapter } = getChapter(subjectSlug, chapterSlug)

  if (!subject || !chapter) return <NotFound />

  const files = sortFilesByType(chapter.files || [])
  const isAvailable = chapter.status === 'available' && files.length > 0

  return (
    <section className="container-content py-10 md:py-14">
      <Breadcrumb
        items={[
          { label: 'Home', to: '/' },
          { label: subject.name, to: `/subject/${subject.slug}` },
          { label: chapter.name },
        ]}
      />

      <header className="relative mb-10 overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-card md:p-10">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-transparent blur-3xl"
        />
        <div className="relative flex flex-col gap-5 md:flex-row md:items-start md:gap-6">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 font-mono text-xl font-bold text-white shadow-md ring-1 ring-white/10">
            {String(chapter.number).padStart(2, '0')}
          </span>
          <div className="flex-1">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
              <BookOpen className="mr-1 inline h-3 w-3 -translate-y-px" />
              {subject.name} &middot; Chapter {chapter.number}
            </p>
            <h1 className="mt-2 font-display text-3xl font-extrabold leading-tight tracking-tight text-text-primary md:text-4xl">
              {chapter.name}
            </h1>
            <p className="mt-3 text-sm text-text-secondary md:text-base">
              {isAvailable
                ? `${files.length} downloadable resource${files.length === 1 ? '' : 's'} available for this chapter.`
                : 'Materials for this chapter are being finalised.'}
            </p>
          </div>
        </div>
      </header>

      {isAvailable ? (
        <>
          <div className="mb-6">
            <p className="eyebrow">Download pack</p>
            <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-text-primary md:text-3xl">
              Pick your format
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {files.map((file) => (
              <FileCard
                key={file.filename}
                file={file}
                subjectSlug={subject.slug}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="relative overflow-hidden rounded-3xl border border-dashed border-border bg-white p-12 text-center">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-grid-slate opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
          />
          <div className="relative mx-auto flex max-w-md flex-col items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-amber-50 text-amber-600 ring-1 ring-amber-200/60">
              <FileWarning className="h-6 w-6" />
            </span>
            <h2 className="font-display text-xl font-bold text-text-primary">
              Coming soon
            </h2>
            <p className="text-sm text-text-secondary">
              Revision materials for this chapter haven&rsquo;t been uploaded
              yet. New chapters typically go live shortly after they are
              covered in class.
            </p>
          </div>
        </div>
      )}

      <div className="mt-12">
        <Link
          to={`/subject/${subject.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to {subject.name}
        </Link>
      </div>
    </section>
  )
}
