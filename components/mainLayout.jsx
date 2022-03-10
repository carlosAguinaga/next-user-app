import Navbar from './navbar';
import Head from 'next/head';

const mainLayout = (props) => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css"
        ></link>
      </Head>
      <Navbar />
      <div className='container'>{props.children}</div>
    </div>
  );
};


export default mainLayout;
