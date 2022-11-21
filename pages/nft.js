import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../styles/Home.module.css';

export default function NFT () {
  const { query } = useRouter();

  const {
    name,
    tokenAddress,
    tokenId,
    imageUrl
  } = query;

  return (
    <div className={styles.container}>
      <Head>
        <title>NFToogle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">
        <h1 className={styles.logo}>NFToogle</h1>
      </Link>
      <main className={styles.main}>
        <section className={styles.detail}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt={`${name} | NFToogle`} src={imageUrl} />
          <h1>{name}</h1>
          <h3>{tokenAddress}<span>/{tokenId}</span></h3>
        </section>
      </main>
    </div>
  )
}
