import Head from 'next/head';
import Image from 'next/image';

import {
  useState,
  useEffect,
  useRef
} from 'react';

import styles from '../styles/Home.module.css';

const API_TIMEOUT = 5000;

const TRENDING = [
  'yes.eth',
  '0x0bEed7099AF7514cCEDF642CfEA435731176Fb02',
  'eumelaninc.eth',
  '0xE6a451b2b47E054C8Cd37cDdaAB65acEea61F0cc',
  '0xca973cF69C0fd8f410B542dB3d3Ac28bf8bF86fd'
];

export default function Home () {
  const [search, setSearch] = useState('');
  const [searchTimeout, setSearchTimeout] = useState();
  const [isSearching, setIsSearching] = useState(false);
  const [NFTs, setNFTs] = useState();

  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
  }, []);

  const fetchSearchResults = async tag => {
    clearTimeout(searchTimeout);

    setSearchTimeout(
      setTimeout(() => (
        setIsSearching(false)
      ),
      API_TIMEOUT
    ));

    setIsSearching(true);

    const response = await fetch('/api/search/nfts-by-owner', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ownerAddress: tag || search
      })
    });

    if (response?.ok) {
      const result = await response.json();

      const nfts = [];

      for (const nft of result) {
        await new Promise(resolve => setTimeout(resolve, 100));

        const metadata = await fetch('/api/search/nft-metadata', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(nft)
        });

        if (metadata?.ok) {
          const nftData = await metadata.json();

          nfts.push(nftData);
        }
      }

      setNFTs(nfts);
      setIsSearching(false);
    }
  };

  const onChangeSearch = ({
    nativeEvent: {
      keyCode,
      target: {
        value
      }
    }
  }) => (
    setSearch(value)
  );

  const onKeyDownSearch = ({
    nativeEvent: {
      target,
      keyCode
    }
  }) => {
    if (!isSearching && keyCode === 13) {
      target.blur();
      fetchSearchResults();
    }
  };

  const onClickSearch = () => (
    !isSearching && fetchSearchResults()
  );

  const onClickTag = tag => () => {
    setSearch(tag);
    fetchSearchResults(tag);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>NFToogle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.logo}>NFToogle</h1>
      <main className={styles.main}>
        <div className={NFTs ? styles.search : styles.spotlight}>
          <input
            placeholder={`Try searching "0x0bEed7099AF7514cCEDF642CfEA435731176Fb02", "vitalik.eth", or "naval.eth"...`}
            onChange={onChangeSearch}
            onKeyDown={onKeyDownSearch}
            value={search}
            autoFocus={true}
            ref={input}
          />
          <button
            onClick={onClickSearch}
            disabled={isSearching}
          >
            Search
          </button>
        </div>
        <ul className={styles.cardlist}>
          {NFTs && NFTs.map(({
            name,
            tokenAddress,
            tokenId,
            imageUrl
          }) => (
            tokenAddress && tokenId && (<li
              key={`${tokenAddress}/${tokenId}`}
              className={styles.card}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl}
                alt={name}
                width="100%"
                height="100%"
              />
              <p>{name}</p>
              <p>#{tokenId}</p>
            </li>)
          ))}
        </ul>
        <h3>Trending</h3>
        <ul className={styles.taglist}>
          {
            TRENDING.map(li => (
              <li
                key={li}
                onClick={onClickTag(li)}
              >
                {li}
              </li>
            ))
          }
        </ul>
      </main>
    </div>
  )
}
