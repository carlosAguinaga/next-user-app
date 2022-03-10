import Head from 'next/head';
import MainLayout from '../components/mainLayout';

const About = () => {
  return (
    <div>
      <Head>
          <title>About</title>
      </Head>
      <MainLayout>
        <h1>About page</h1>
      </MainLayout>
    </div>
  );
};

export default About;
