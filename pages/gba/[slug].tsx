import Head from "next/head";
import styles from "/styles/jss/nextjs-material-kit/pages/emulator.module.scss";
import Script from "next/script";
import React from "react";
import { useRouter } from "next/router";

interface Props {}

const GBA: React.FC<Props> = ({}) => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `EJS_player = '#game'
            EJS_core = 'gba'
            EJS_biosUrl = '/static/bios/gba_bios.bin'
            EJS_gameUrl = '/static/rom/gba/${slug}.zip'
            EJS_pathtodata = 'https://rawcdn.githack.com/EmulatorJS/EmulatorJS/main/data/'`,
          }}
        ></script>
      </Head>
      <div className={styles.container}>
        <div id="game"></div>
      </div>
      <Script src="https://rawcdn.githack.com/EmulatorJS/EmulatorJS/main/data/loader.js" />
    </>
  );
};

export default GBA;
