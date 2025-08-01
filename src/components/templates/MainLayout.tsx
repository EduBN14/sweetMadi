import React from 'react';

type MainLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export default function MainLayout({ children, className = '' }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className={`container mx-auto px-4 py-10 ${className}`}>
        {children}
      </div>
    </div>
  );
}
