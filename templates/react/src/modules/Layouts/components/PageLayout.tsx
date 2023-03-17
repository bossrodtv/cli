import { Footer, Navbar, PrivateRoute } from 'modules/Partials';
import React, { Suspense, type ReactNode } from 'react';

export const PageLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <PrivateRoute>
      <div>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <div className="content-main">{children}</div>
        </Suspense>
        <Footer />
      </div>
    </PrivateRoute>
  );
};
