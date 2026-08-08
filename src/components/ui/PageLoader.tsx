import { motion } from 'framer-motion';

export function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="relative">
          <div className="w-10 h-10 rounded-full border-2 border-accent/20" />
          <motion.div
            className="absolute inset-0 w-10 h-10 rounded-full border-2 border-transparent border-t-accent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        <p className="text-sm text-text-muted">Loading...</p>
      </motion.div>
    </div>
  );
}
