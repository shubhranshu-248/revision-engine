import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="py-20">
      <Container size="sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="text-8xl font-bold gradient-text mb-6">404</div>
          <h1 className="text-2xl font-semibold text-text-primary mb-3">
            Page not found
          </h1>
          <p className="text-text-muted mb-8 max-w-md mx-auto">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Button
              variant="secondary"
              icon={<ArrowLeft size={16} />}
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
            <Link to="/">
              <Button variant="primary" icon={<Home size={16} />}>
                Home
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
