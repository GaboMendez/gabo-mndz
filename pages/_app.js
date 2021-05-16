import Head from 'next/head';
import { useState } from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <title>gabo-dev</title>
        <link rel='icon' href='/command.png' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Averia+Sans+Libre&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Averia+Sans+Libre:ital,wght@0,400;0,700;1,700&family=Hammersmith+One&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Sidebar isOpen={isOpen} handleToggle={handleToggle} />
      <Navbar handleToggle={handleToggle} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
