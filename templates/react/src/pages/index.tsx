import { PageLayout } from 'modules/Layouts';
import React from 'react';

const AsyncHome = React.lazy(() => import('modules/Home'));

const HomePage: React.FC = () => {
  return (
    <PageLayout>
      <AsyncHome />
    </PageLayout>
  );
};

export default HomePage;
