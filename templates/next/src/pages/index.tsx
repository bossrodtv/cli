import Home from 'modules/Home';
import { PageLayout } from 'modules/Layouts';
import { type NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <PageLayout>
      <Home />
    </PageLayout>
  );
};

export default HomePage;
