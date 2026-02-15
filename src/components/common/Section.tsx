import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`py-16 md:py-24 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 max-w-5xl">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-soft-900 dark:text-soft-50">
            {title}
          </h2>
        )}
        {children}
      </div>
    </motion.section>
  );
}
