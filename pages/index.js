import Head from 'next/head';
import Link from 'next/link';
import HeroSection from '../components/hero';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>gabo-dev</title>
        <link rel='icon' href='/command.png' />
      </Head>
      <HeroSection />
    </>
  );
}
