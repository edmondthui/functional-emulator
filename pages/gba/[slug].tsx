import { useRouter } from "next/router";
import Script from "next/script";
import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import styles from "/styles/jss/nextjs-material-kit/pages/emulator.module.scss";

interface Props {}

const GBA: React.FC<Props> = ({}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
    EJS_startOnLoaded = true
    EJS_player = '#game'
    EJS_core = 'gba'
    EJS_biosUrl = '/static/bios/gba_bios.bin'
    EJS_gameUrl = '/static/rom/gba/${slug}.zip'
    EJS_pathtodata = 'https://rawcdn.githack.com/EmulatorJS/EmulatorJS/main/data/'`;
    document.head.appendChild(script);

    window.onpopstate = () => {
      window.location.reload();
    };
  }, []);

  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <Header
        color="dark"
        //   routes={dashboardRoutes}
        brand="Function Emulator"
        rightLinks={<HeaderLinks />}
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
      />
      <div className={styles.container}>
        <div id="game"></div>
      </div>
      <Script src="https://rawcdn.githack.com/EmulatorJS/EmulatorJS/main/data/loader.js" />
    </>
  );
};

export default GBA;
