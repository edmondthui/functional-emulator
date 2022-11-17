import fs from "fs";
import Link from "next/link";
import path from "path";
import React from "react";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Header from "../../components/Header/Header.js";
import Parallax from "../../components/Parallax/Parallax.js";
import styles from "../../styles/jss/nextjs-material-kit/pages/gbaLanding.module.scss";
// import Button from "../../components/CustomButtons/Button.js";

interface Props {
  games: ReadonlyArray<string>;
}

const GBA: React.FC<Props> = ({ games }) => {
  return (
    <div>
      <Header
        color="transparent"
        //   routes={dashboardRoutes}
        brand="Function Emulator"
        //   rightLinks={<HeaderLinks />}
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
              <h1 className={styles.title}>Your Story Starts With Us.</h1>
              <h4>
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
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
  );
};

export async function getStaticProps() {
  const directoryPath = "public/static/rom/gba";
  const files = fs.readdirSync(path.join(directoryPath));

  const games = files.map((fileName) => fileName.replace(".zip", ""));

  console.log(games);

  return {
    props: {
      games: games,
    },
  };
}

export default GBA;
