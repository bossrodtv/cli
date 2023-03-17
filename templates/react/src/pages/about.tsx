import { PageLayout } from 'modules/Layouts';
import React from 'react';

const AsyncAbout = React.lazy(() => import('modules/About'));

const AboutPage: React.FC = () => {
  return (
    <PageLayout>
      <AsyncAbout />
    </PageLayout>
  );
};

export default AboutPage;
