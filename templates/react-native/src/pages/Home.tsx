import React from 'react';

const AsyncHome = React.lazy(() => import('modules/Home'));

const HomePage: React.FC = () => {
  return <AsyncHome />;
};

export default HomePage;
