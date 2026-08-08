import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Download } from 'lucide-react';
import { useChapter } from '@/hooks/useSubject';
import { getSubjectColorClass } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { EmptyState } from '@/components/ui/EmptyState';
import NotFound from './NotFound';

export default function ChapterDetail() {
  const { subjectSlug, chapterSlug } = useParams<{ subjectSlug: string; chapterSlug: string }>();
  const { subject, chapter } = useChapter(subjectSlug, chapterSlug);

  if (!subject || !chapter) return <NotFound />;

  const colors = getSubjectColorClass(subject.id);

  return (
    <div className="py-12">
      <Container size="md">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Subjects', href: '/subjects' },
            { label: subject.name, href: `/subjects/${subject.slug}` },
            { label: chapter.name },
          ]}
        />

        {/* Back Button */}
        <Link
          to={`/subjects/${subject.slug}`}
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors mt-6 mb-8"
        >
          <ArrowLeft size={16} />
          Back to {subject.name}
        </Link>

        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center`}>
              <span className={`text-sm font-bold ${colors.text}`}>{chapter.number}</span>
            </div>
            <Badge variant="accent">{subject.name}</Badge>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">{chapter.name}</h1>
        </motion.div>

        {/* Resources */}
        {chapter.files.length > 0 ? (
          <div className="space-y-3">
            {chapter.files.map((file) => (
              <motion.a
                key={file.id}
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:bg-card-hover hover:border-border-hover transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <FileText size={18} className="text-accent-light" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-text-primary truncate">{file.name}</h3>
                  <p className="text-xs text-text-muted mt-0.5 capitalize">{file.type}{file.size ? ` · ${file.size}` : ''}</p>
                </div>
                <Download size={16} className="text-text-muted group-hover:text-accent-light transition-colors flex-shrink-0" />
              </motion.a>
            ))}
          </div>
        ) : (
          <EmptyState
            icon={<FileText className="w-7 h-7 text-text-muted" />}
            title="Resources coming soon"
            description="We're working on adding study materials for this chapter. Check back soon!"
            action={
              <Button variant="secondary" size="sm" onClick={() => window.history.back()}>
                Go Back
              </Button>
            }
          />
        )}
      </Container>
    </div>
  );
}
