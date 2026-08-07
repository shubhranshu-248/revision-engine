import {
  ArrowRight,
  Sparkles,
  BookOpenCheck,
  Download,
  Presentation,
  Network,
  BookMarked,
  FileText,
  CheckSquare,
  ChevronDown,
} from 'lucide-react'
import SubjectCard from '../components/SubjectCard'
import { getAllSubjects } from '../utils/content'

const DELIVERABLES = [
  { icon: Presentation, label: 'Quick Revision Slides' },
  { icon: Network, label: 'Mindmap' },
  { icon: BookMarked, label: 'Cheatsheet' },
  { icon: FileText, label: 'Worksheet' },
  { icon: CheckSquare, label: 'Solutions Key' },
]

export default function Home() {
  const subjects = getAllSubjects()
  const totalChapters = subjects.reduce(
    (sum, s) => sum + s.chapters.length,
    0,
  )

  return (
    <>
      {/* ─────────────────────  HERO  ───────────────────── */}
      <section className="relative overflow-hidden bg-bg-hero text-text-onDark">
        {/* Layered background: grid + gradient orbs + noise */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_75%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_800px_500px_at_10%_-10%,rgba(59,130,246,0.28),transparent_60%),radial-gradient(ellipse_700px_400px_at_90%_10%,rgba(139,92,246,0.22),transparent_60%),radial-gradient(ellipse_600px_400px_at_50%_100%,rgba(34,197,94,0.10),transparent_60%)]"
        />
        {/* Floating glowing orbs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[8%] top-24 hidden h-40 w-40 rounded-full bg-blue-500/20 blur-3xl animate-float-slow md:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[12%] bottom-16 hidden h-32 w-32 rounded-full bg-violet-500/20 blur-3xl animate-float-slower md:block"
        />

        <div className="container-content relative py-20 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            {/* Left column — copy */}
            <div>
              <span className="chip-hero">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
                </span>
                CBSE Class 10 · Board revision hub
              </span>

              <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
                <span className="text-gradient">Revise smart.</span>
                <br />
                <span className="text-gradient-accent">Score higher.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-text-onDark/75 md:text-lg">
                Exam-accurate revision slides, mindmaps, cheatsheets and
                worksheets for every Class 10 subject. Made for last-mile
                prep &mdash; download, revise, walk into the exam confident.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#subjects" className="btn-primary group">
                  Browse subjects
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
                <a href="#deliverables" className="btn-hero">
                  See what&rsquo;s inside
                </a>
              </div>

              <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
                <Stat value={subjects.length} label="Subjects" />
                <Stat value={totalChapters} label="Chapters" />
                <Stat value={5} label="Formats" />
              </dl>
            </div>

            {/* Right column — visual mock stack */}
            <div className="relative hidden lg:block">
              <HeroPreview />
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <a
          href="#subjects"
          aria-label="Scroll to subjects"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 transition-colors hover:text-white/70"
        >
          <ChevronDown className="h-6 w-6 animate-bounce" strokeWidth={2} />
        </a>
      </section>

      {/* ─────────────────────  SUBJECTS  ───────────────────── */}
      <section
        id="subjects"
        className="relative container-content py-20 md:py-24"
      >
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Pick your subject</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-text-primary md:text-4xl">
              Five subjects. One consistent revision pack.
            </h2>
            <p className="mt-3 max-w-2xl text-base text-text-secondary">
              Every subject follows the same five-file structure so you always
              know where to look for what you need.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </div>
      </section>

      {/* ─────────────────────  DELIVERABLES STRIP  ───────────────────── */}
      <section
        id="deliverables"
        className="relative overflow-hidden border-y border-border bg-gradient-to-b from-white to-muted-bg"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-grid-slate opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
        />
        <div className="container-content relative py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">What&rsquo;s in a chapter pack</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-text-primary md:text-4xl">
              Five deliverables, every single chapter.
            </h2>
            <p className="mt-3 text-base text-text-secondary">
              Whether you learn best by looking at slides, drawing on
              mindmaps, or grinding through practice questions &mdash; there&rsquo;s
              a file for that.
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {DELIVERABLES.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="group relative flex flex-col items-center gap-3 rounded-2xl border border-border bg-white p-5 text-center shadow-card transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-accent/40 hover:shadow-card-hover"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 text-accent ring-1 ring-inset ring-blue-100 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" strokeWidth={2.25} />
                </span>
                <span className="text-xs font-semibold leading-tight text-text-primary">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─────────────────────  FEATURES  ───────────────────── */}
      <section className="container-content py-20 md:py-24">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow">Why Revio</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-text-primary md:text-4xl">
            Made for how students actually study.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <FeatureCard
            icon={BookOpenCheck}
            title="Board-standard content"
            body="Every worksheet follows the 3-tier CBSE model: Foundational (25%), Board-standard (35%), and HOTS (40%)."
            accent="from-blue-500/10 to-blue-500/0"
            iconClasses="bg-blue-500/10 text-blue-600 ring-blue-500/20"
          />
          <FeatureCard
            icon={Sparkles}
            title="NCERT-exact terminology"
            body="Diagrams, terms and formulas match the NCERT textbook so what you revise here is what you write in the exam."
            accent="from-violet-500/10 to-violet-500/0"
            iconClasses="bg-violet-500/10 text-violet-600 ring-violet-500/20"
          />
          <FeatureCard
            icon={Download}
            title="No signup, no fluff"
            body="Static downloads that open on any device. Read on your phone, print for the wall — do whichever works for you."
            accent="from-emerald-500/10 to-emerald-500/0"
            iconClasses="bg-emerald-500/10 text-emerald-600 ring-emerald-500/20"
          />
        </div>
      </section>

      {/* ─────────────────────  CTA STRIP  ───────────────────── */}
      <section className="container-content pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-bg-hero p-10 text-white md:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.35),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.30),transparent_60%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-grid-dark opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
          />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-extrabold leading-tight tracking-tight text-white md:text-3xl">
                Ready to start revising?
              </h2>
              <p className="mt-3 text-sm text-text-onDark/75 md:text-base">
                Jump into any subject &mdash; new chapters go live continuously
                through the board term.
              </p>
            </div>
            <a href="#subjects" className="btn-primary shrink-0">
              Browse subjects
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

function Stat({ value, label }) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-[0.15em] text-text-onDark/50">
        {label}
      </dt>
      <dd className="mt-1 font-display text-3xl font-bold text-white md:text-4xl">
        {value}
      </dd>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, body, accent, iconClasses }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-white p-7 shadow-card transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-card-hover">
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />
      <span
        className={`relative flex h-11 w-11 items-center justify-center rounded-xl ring-1 ring-inset ${iconClasses}`}
      >
        <Icon className="h-5 w-5" strokeWidth={2.25} />
      </span>
      <h3 className="relative mt-5 text-lg font-bold text-text-primary">
        {title}
      </h3>
      <p className="relative mt-2 text-sm leading-relaxed text-text-secondary">
        {body}
      </p>
    </article>
  )
}

/**
 * A decorative preview stack shown on desktop — mimics the six deliverable
 * cards fanned out. Not interactive; pure eye-candy so the hero feels
 * like a real product page rather than plain text on a color.
 */
function HeroPreview() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
      {/* Back card — mindmap */}
      <div className="absolute right-4 top-2 h-64 w-72 rotate-[6deg] rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/25 to-violet-500/5 p-5 shadow-2xl backdrop-blur">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
            <Network className="h-4 w-4 text-violet-200" />
          </span>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-white/70">
            Mindmap
          </div>
        </div>
        <div className="mt-3 space-y-2">
          <div className="h-2 w-3/4 rounded bg-white/15" />
          <div className="h-2 w-1/2 rounded bg-white/10" />
          <div className="h-2 w-2/3 rounded bg-white/10" />
        </div>
      </div>

      {/* Middle card — worksheet */}
      <div className="absolute left-2 top-16 h-72 w-72 -rotate-[4deg] rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/25 to-blue-500/5 p-5 shadow-2xl backdrop-blur">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
              <FileText className="h-4 w-4 text-blue-200" />
            </span>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-white/70">
              Worksheet
            </div>
          </div>
          <span className="rounded-md bg-white/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase text-white/80">
            .docx
          </span>
        </div>
        <div className="mt-4 space-y-2.5">
          <div className="h-2 w-full rounded bg-white/15" />
          <div className="h-2 w-5/6 rounded bg-white/10" />
          <div className="h-2 w-2/3 rounded bg-white/10" />
          <div className="mt-4 h-2 w-full rounded bg-white/15" />
          <div className="h-2 w-4/5 rounded bg-white/10" />
        </div>
      </div>

      {/* Front card — slides */}
      <div className="absolute bottom-0 right-2 h-56 w-80 rotate-[3deg] rounded-2xl border border-white/15 bg-gradient-to-br from-white/20 to-white/5 p-5 shadow-2xl backdrop-blur">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-400/40 to-orange-500/20">
              <Presentation className="h-4 w-4 text-orange-100" />
            </span>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-white/80">
              Quick Revision
            </div>
          </div>
          <span className="rounded-md bg-white/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase text-white/80">
            .pptx
          </span>
        </div>
        <div className="mt-4 rounded-lg border border-white/10 bg-black/20 p-4">
          <div className="h-2 w-1/2 rounded bg-white/25" />
          <div className="mt-3 space-y-1.5">
            <div className="h-1.5 w-full rounded bg-white/12" />
            <div className="h-1.5 w-5/6 rounded bg-white/10" />
            <div className="h-1.5 w-2/3 rounded bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  )
}
