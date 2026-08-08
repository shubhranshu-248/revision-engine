import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { useSubject } from '@/hooks/useSubject';
import { getSubjectColorClass } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Badge } from '@/components/ui/Badge';
import { SubjectIcon } from '@/components/shared/SubjectIcon';
import NotFound from './NotFound';

export default function SubjectDetail() {
  const { subjectSlug } = useParams<{ subjectSlug: string }>();
  const subject = useSubject(subjectSlug);

  if (!subject) return <NotFound />;

  const colors = getSubjectColorClass(subject.id);

  return (
    <div className="py-12">
      <Container>
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Subjects', href: '/subjects' },
            { label: subject.name },
          ]}
        />

        {/* Subject Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 mb-10"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center flex-shrink-0`}>
              <SubjectIcon name={subject.icon} className={colors.text} size={28} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-text-primary">{subject.name}</h1>
              <p className="text-text-secondary mt-1">{subject.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <Badge variant="accent">{subject.chapters.length} chapters</Badge>
            <Badge variant="default">CBSE Class 10</Badge>
          </div>
        </motion.div>

        {/* Chapter List */}
        <div className="space-y-3">
          {subject.chapters.map((chapter, index) => {
            const isAvailable = chapter.status === 'available';
            const content = (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className={`group rounded-2xl border border-border bg-card p-5 flex items-center gap-4 transition-all duration-300 ${
                  isAvailable
                    ? 'hover:bg-card-hover hover:border-border-hover cursor-pointer'
                    : 'opacity-60'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                  <span className={`text-sm font-semibold ${colors.text}`}>
                    {chapter.number}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-text-primary truncate">
                    {chapter.name}
                  </h3>
                </div>
                {isAvailable ? (
                  <ArrowRight size={16} className="text-text-muted group-hover:text-accent-light group-hover:translate-x-1 transition-all flex-shrink-0" />
                ) : (
                  <Badge variant="warning">
                    <Clock size={10} className="mr-1" />
                    Coming Soon
                  </Badge>
                )}
              </motion.div>
            );

            return isAvailable ? (
              <Link key={chapter.id} to={`/subjects/${subject.slug}/${chapter.slug}`}>
                {content}
              </Link>
            ) : (
              <div key={chapter.id}>{content}</div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
