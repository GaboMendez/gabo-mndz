import { ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import { SnackbarProvider } from 'notistack';
import { useEffect, useState } from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Scroll from '../components/scroll';
import Sidebar from '../components/sidebar';
import '../styles/globals.css';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    // Hide scroll when is Sidebar Opened
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
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
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Sidebar isOpen={isOpen} handleToggle={handleToggle} />
        <Navbar handleToggle={handleToggle} />
        <Component {...pageProps} />
        <Scroll />
        <Footer />
      </ThemeProvider>
    </SnackbarProvider>
  );
}

export default MyApp;
