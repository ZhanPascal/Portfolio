import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({ children, className = '', hover = true, onClick }: CardProps) {
  return (
    <motion.div
      className={`bg-white dark:bg-soft-800 rounded-2xl shadow-sm border border-soft-100 dark:border-soft-700 p-6 ${
        hover ? 'hover:shadow-md transition-shadow duration-300' : ''
      } ${className}`}
      whileHover={hover ? { y: -2 } : {}}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
