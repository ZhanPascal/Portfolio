import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  className?: string;
  href?: string;
}

export function Button({
  children,
  onClick,
  variant = 'primary',
  className = '',
  href,
}: ButtonProps) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 text-sm';
  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 shadow-sm hover:shadow-md',
    outline: 'border-2 border-primary-400 text-primary-600 dark:text-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20',
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
