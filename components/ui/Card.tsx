import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className = '', children, ...props }) => {
  return (
    <article {...props} className={`rounded-mdx border border-black/5 bg-white p-6 shadow-card shadow-glow ${className}`.trim()}>
      {children}
    </article>
  );
};

export default Card;
