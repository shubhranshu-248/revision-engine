import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { subjects } from '@/data/content';
import { getSubjectColorClass } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SubjectIcon } from '@/components/shared/SubjectIcon';

export default function Subjects() {
  return (
    <div className="py-12">
      <Container>
        <SectionHeading
          label="CBSE Class 10"
          title="Choose Your Subject"
          description="Select a subject to browse chapter-wise revision materials."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => {
            const colors = getSubjectColorClass(subject.id);
            return (
              <motion.div
                key={subject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <Link to={`/subjects/${subject.slug}`}>
                  <div className="group rounded-2xl border border-border bg-card p-6 hover:bg-card-hover hover:border-border-hover transition-all duration-300 hover:-translate-y-1">
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                      <SubjectIcon name={subject.icon} className={colors.text} size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">{subject.name}</h3>
                    <p className="text-sm text-text-muted mb-4 line-clamp-2">{subject.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-text-muted">
                        {subject.chapters.length} {subject.chapters.length === 1 ? 'chapter' : 'chapters'}
                      </span>
                      <ArrowRight size={16} className="text-text-muted group-hover:text-accent-light group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
