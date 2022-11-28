import Head from 'next/head';
// import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Mainframe from '../components/layout/Mainframe.js';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aigen'esis</title>
        <meta name="description" content="Aigen'esis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.screen}>
        <main className={styles.main}>
          <Mainframe />
        </main>
      </div>
    </div>
  )
}
