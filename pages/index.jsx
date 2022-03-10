import Head from 'next/head';
import MainLayout from '../components/mainLayout';
import Users from '../components/Users';

export default function Home({ users }) {
  return (
    <div>
      <Head>
        <title>Index</title>
      </Head>
      <MainLayout>
        <div>
          <h1>Next</h1>
          <Users users={users} />
        </div>
      </MainLayout>
    </div>
  );
}

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`https://reqres.in/api/users`);
  const resJSON = await res.json();

  // Pass data to the page via props
  return {
    props: {
      users: resJSON.data,
    },
  };
}
