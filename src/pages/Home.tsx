import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Target,
  Zap,
  LayoutGrid,
  Shield,
  Smartphone,
  ArrowRight,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { SubjectIcon } from '@/components/shared/SubjectIcon';
import { cn, getSubjectColorClass } from '@/lib/utils';
import { features, faqs, testimonials, stats, howItWorks } from '@/data/landing';
import { subjects } from '@/data/content';
import type { FAQ } from '@/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const featureIcons: Record<string, React.ComponentType<any>> = {
  BookOpen,
  Target,
  Zap,
  Layout: LayoutGrid,
  Shield,
  Smartphone,
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

/* ─── FAQ Accordion Item ──────────────────────────────────────────────── */

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-border rounded-2xl overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.02]"
      >
        <span className="text-base font-medium text-text-primary">{faq.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 text-text-secondary"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-5 text-sm leading-relaxed text-text-secondary">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Home Page ───────────────────────────────────────────────────────── */

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div className="relative overflow-hidden">
      {/* ── Hero Section ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center py-20">
        {/* Animated gradient orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -40, 20, 0],
              scale: [1, 1.1, 0.95, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-purple-600/20 blur-[120px]"
          />
          <motion.div
            animate={{
              x: [0, -30, 20, 0],
              y: [0, 30, -30, 0],
              scale: [1, 0.9, 1.1, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[120px]"
          />
          <motion.div
            animate={{
              x: [0, 20, -10, 0],
              y: [0, -20, 10, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[100px]"
          />
        </div>

        <Container size="lg" className="relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center"
          >
            {/* Badge */}
            <motion.div variants={staggerItem}>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent-light">
                <Sparkles size={14} />
                Free &amp; Open for All Students
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={staggerItem}
              className="mt-8 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Ace Your CBSE Board Exams
            </motion.h1>

            {/* Gradient subtitle */}
            <motion.p
              variants={staggerItem}
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl"
            >
              <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
                with Revision Engine
              </span>
            </motion.p>

            {/* Description */}
            <motion.p
              variants={staggerItem}
              className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg"
            >
              Your one-stop revision platform for CBSE Class 10. Access curated notes,
              chapter-wise summaries, and exam-focused resources — beautifully organized
              and completely free.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={staggerItem}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
            >
              <Link to="/subjects">
                <Button size="lg" icon={<ArrowRight size={18} />}>
                  Explore Subjects
                </Button>
              </Link>
              <a href="#features">
                <Button variant="ghost" size="lg">
                  Learn More
                </Button>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={staggerItem}
              className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-12"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-text-primary sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-text-secondary">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ── Features Section ──────────────────────────────────────────── */}
      <AnimatedSection id="features" className="py-24">
        <Container>
          <SectionHeading
            label="Features"
            title="Everything you need to excel"
            description="A carefully crafted set of tools and resources to help you prepare smarter, not harder."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature) => {
              const Icon = featureIcons[feature.icon];
              return (
                <motion.div key={feature.title} variants={staggerItem}>
                  <Card hover={false} className="h-full">
                    <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-accent/10 p-3">
                      {Icon && <Icon className="text-accent-light" size={22} />}
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </AnimatedSection>

      {/* ── How It Works Section ──────────────────────────────────────── */}
      <AnimatedSection className="py-24">
        <Container>
          <SectionHeading
            label="How It Works"
            title="Start revising in 3 simple steps"
            description="Getting started is effortless. Pick a subject, choose a chapter, and dive in."
          />

          <div className="relative grid gap-12 md:grid-cols-3 md:gap-8">
            {/* Connecting lines on desktop */}
            <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
              <div className="absolute top-10 left-[calc(33.33%+0.5rem)] right-[calc(33.33%+0.5rem)] h-px bg-gradient-to-r from-accent/40 via-accent/20 to-accent/40" />
            </div>

            {howItWorks.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 text-xl font-bold text-white shadow-lg shadow-accent/20">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-text-primary">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      {/* ── Subjects Preview Section ──────────────────────────────────── */}
      <AnimatedSection className="py-24">
        <Container>
          <SectionHeading
            label="Subjects"
            title="Choose your subject"
            description="Dive into any of the core CBSE Class 10 subjects. Each one is packed with chapter-wise resources."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {subjects.map((subject) => {
              const colors = getSubjectColorClass(subject.id);
              return (
                <motion.div key={subject.id} variants={staggerItem}>
                  <Link to={`/subjects/${subject.slug}`} className="block h-full">
                    <Card className={cn('h-full', colors.border)}>
                      <div
                        className={cn(
                          'mb-4 inline-flex items-center justify-center rounded-xl p-3',
                          colors.bg
                        )}
                      >
                        <SubjectIcon
                          name={subject.icon}
                          className={colors.text}
                          size={24}
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-text-primary">
                        {subject.name}
                      </h3>
                      <p className="mt-1 text-xs font-medium text-text-secondary">
                        {subject.chapters.length} chapters
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                        {subject.description}
                      </p>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </AnimatedSection>

      {/* ── Testimonials Section ──────────────────────────────────────── */}
      <AnimatedSection className="py-24">
        <Container>
          <SectionHeading
            label="Testimonials"
            title="Loved by students"
            description="Hear from students who use Revision Engine to prepare for their board exams."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.name} variants={staggerItem}>
                <Card hover={false} className="h-full flex flex-col">
                  <p className="flex-1 text-sm leading-relaxed text-text-secondary italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="mt-6 border-t border-border pt-4">
                    <p className="text-sm font-semibold text-text-primary">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-text-secondary">{testimonial.role}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </AnimatedSection>

      {/* ── FAQ Section ───────────────────────────────────────────────── */}
      <AnimatedSection className="py-24">
        <Container size="md">
          <SectionHeading
            label="FAQ"
            title="Frequently asked questions"
            description="Everything you need to know about Revision Engine."
          />

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openFAQ === index}
                onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </Container>
      </AnimatedSection>

      {/* ── CTA Section ───────────────────────────────────────────────── */}
      <section className="py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600/20 via-violet-600/10 to-blue-600/20 border border-accent/20 px-6 py-16 text-center sm:px-12 sm:py-20"
          >
            {/* Decorative orbs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-purple-500/10 blur-[80px]" />
              <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-blue-500/10 blur-[80px]" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
                Ready to start revising?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-secondary">
                Join thousands of students preparing smarter for their CBSE board exams.
                All resources, all subjects, completely free.
              </p>
              <div className="mt-8">
                <Link to="/subjects">
                  <Button size="lg" icon={<ArrowRight size={18} />}>
                    Explore Subjects
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
