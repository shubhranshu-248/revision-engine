import { motion } from 'framer-motion';
import { BookOpen, Target, Users, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

const values = [
  { icon: BookOpen, title: 'Quality First', description: 'Every resource is carefully curated to ensure accuracy and alignment with the CBSE syllabus.' },
  { icon: Target, title: 'Student-Centric', description: 'Designed from the ground up with students in mind — clean, fast, and distraction-free.' },
  { icon: Users, title: 'Free for All', description: 'Education should be accessible. All materials are and will always be completely free.' },
  { icon: Sparkles, title: 'Always Improving', description: 'We are constantly adding new content and features to help you prepare better.' },
];

export default function About() {
  return (
    <div className="py-12">
      <Container size="md">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-light border border-accent/20 mb-6">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary tracking-tight mb-6">
            Built for students,{' '}
            <span className="gradient-text">by students</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Revision Engine is a free, premium revision platform designed to help CBSE Class 10 students
            ace their board exams with curated, high-quality study materials.
          </p>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-card p-8 sm:p-10 mb-16"
        >
          <h2 className="text-xl font-semibold text-text-primary mb-4">Our Story</h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              Revision Engine started with a simple observation: students spend too much time searching
              for quality study materials across scattered sources. We wanted to create a single,
              beautiful destination where everything is organized, accessible, and free.
            </p>
            <p>
              Today, we cover all major CBSE Class 10 subjects — Physics, Chemistry, Biology,
              Mathematics, and Social Science — with chapter-wise notes and resources designed
              to maximize understanding and retention.
            </p>
            <p>
              Our vision extends beyond Class 10. We are actively working on expanding to cover
              more classes and boards, making quality revision materials accessible to every student.
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <SectionHeading
          label="Our Values"
          title="What drives us"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <value.icon size={20} className="text-accent-light" />
              </div>
              <h3 className="text-base font-semibold text-text-primary mb-2">{value.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
