import About from 'modules/About';
import { PageLayout } from 'modules/Layouts';
import { type NextPage } from 'next';

const AboutPage: NextPage = () => {
  return (
    <PageLayout>
      <About />
    </PageLayout>
  );
};

export default AboutPage;
