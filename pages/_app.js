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
      <Sidebar isOpen={isOpen} handleToggle={handleToggle} />
      <Navbar handleToggle={handleToggle} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
