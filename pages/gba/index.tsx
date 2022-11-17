import fs from "fs";
import Link from "next/link";
import path from "path";
import React from "react";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Header from "../../components/Header/Header.js";
import Parallax from "../../components/Parallax/Parallax.js";
import styles from "../../styles/jss/nextjs-material-kit/pages/gbaLanding.module.scss";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import GbaCarousel from "../../pages-sections/Gba-Sections/GbaCarousel.js";

interface Props {
  games: ReadonlyArray<string>;
}

const GBA: React.FC<Props> = ({ games }) => {
  return (
    <div>
      <Header
        color="transparent"
        // routes={dashboardRoutes}
        brand="Function Emulator"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
      />
      <Parallax filter responsive image="/img/landing-bg.jpg">
        <div className={styles.container}>
          <GridContainer>
            <GridItem>
              <h1 className={styles.title}>Gameboy Advance Emulator</h1>
              <h4>
                The successor of the all time classic that shortly became a hit
                just like it's "father". The fact that Gameboy Advance plays the
                older Gameboy titles means you get to use the older games. There
                is also another version of the Advance called SP. Functional
                Emulator provides a fully functional Gameboy Advance emulator
                right in your browser!
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={styles.main}>
        <div className={styles.gameTitle}>
          <h2 className={styles.titleText}>Gameboy Advance Games</h2>
        </div>
        <GbaCarousel />
        <div className={styles.gamesContainer}>
          {games.map((game, idx) => (
            <GridItem key={idx}>
              <Link href={`/gba/${game}`}>
                <img
                  alt={game}
                  src={`/img/gba/${game}.jpg`}
                  className={styles.gameImage}
                />
              </Link>
            </GridItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const directoryPath = "public/static/rom/gba";
  const files = fs.readdirSync(path.join(directoryPath));

  const games = files.map((fileName) => fileName.replace(".zip", ""));

  return {
    props: {
      games: games,
    },
  };
}

export default GBA;
