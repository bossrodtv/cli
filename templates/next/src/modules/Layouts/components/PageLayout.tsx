import { Footer, Navbar, PrivateRoute } from 'modules/Partials';
import React, { type ReactNode } from 'react';

export const PageLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <PrivateRoute>
      <div>
        <Navbar />
        <div className="content-main">{children}</div>
        <Footer />
      </div>
    </PrivateRoute>
  );
};
