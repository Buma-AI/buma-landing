import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl p-6 shadow-lg transition-all duration-300 border border-gray-200',
        hover && 'hover:shadow-xl hover:-translate-y-1 hover:border-primary-200',
        className
      )}
    >
      {children}
    </div>
  );
}

