import React, { type ReactNode } from 'react';

export const RootLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="relative h-full">{children}</div>;
};
