import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>gabo-dev</title>
        <link rel='icon' href='/command.png' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing
          <code className={styles.code}>pages/index.js</code>
        </p>
      </main>
    </div>
  );
}
