import React from 'react';
import type { ReactNode } from 'react';
import './ScrollStack.css';

export interface ScrollStackItemProps {
  children: ReactNode;
  className?: string;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, className = '' }) => (
  <div className={`scroll-stack-card ${className}`.trim()}>{children}</div>
);

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
  itemDistance?: number;
  // Accept legacy props but keep implementation minimal
  itemScale?: number;
  baseScale?: number;
  onStackComplete?: () => void;
  useWindowScroll?: boolean;
}

const ScrollStack: React.FC<ScrollStackProps> = ({ children, className = '', itemDistance = 24 }) => {
  return (
    <div className={`scroll-stack-scroller compact ${className}`.trim()}>
      <div className="scroll-stack-inner compact" style={{ gap: `${itemDistance}px` }}>
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;
