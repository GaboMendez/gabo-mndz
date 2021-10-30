import Head from 'next/head';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Scroll from '../components/scroll';
import Sidebar from '../components/sidebar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

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
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
      </Head>
      <Sidebar isOpen={isOpen} handleToggle={handleToggle} />
      <Navbar handleToggle={handleToggle} />
      <Component {...pageProps} />
      <div
        style={{
          padding: 24,
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <Slider
          slidesToShow={3}
          slidesToScroll={1}
          swipeToSlide={true}
          focusOnSelect={true}
          speed={500}
          autoplaySpeed={3000}
          cssEase={'linear'}
          autoplay
          dots
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
      <Scroll />
      <Footer />
    </>
  );
}

export default MyApp;
