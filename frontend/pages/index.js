import Head from 'next/head';
import { UserProvider } from '../contexts/UserContext';
import Mainframe from '../components/layout/Mainframe';

import styles from '../styles/AigenEsis.module.css';

export default function AigenEsis() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aigen'esis</title>
        <meta name="description" content="Aigen'esis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <UserProvider>
          <Mainframe />
        </UserProvider>
      </main>
    </div>
  )
}
