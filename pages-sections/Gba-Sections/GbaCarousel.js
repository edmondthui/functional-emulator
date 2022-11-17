import React from "react";
import Carousel from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import Link from "next/link";

import styles from "/styles/jss/nextjs-material-kit/pages/gbaSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel className={classes.link} {...settings}>
                <Link href="/gba/pokemon-emerald">
                  <div>
                    <img
                      src="/img/gba/pokemon-emerald.jpg"
                      alt="First slide"
                      className="slick-image"
                    />
                    {/* <div className="slick-caption">
                      <h4>
                        Pokemon Emerald
                      </h4>
                    </div> */}
                  </div>
                </Link>
                <Link   href="/gba/super-mario-bros-3">
                  <div>
                    <img
                      src="/img/gba/super-mario-bros-3.jpg"
                      alt="Second slide"
                      className="slick-image"
                    />
                    {/* <div className="slick-caption">
                      <h4>
                        Super Mario Bros. 3
                      </h4>
                    </div> */}
                  </div>
                </Link>
                <Link href="/gba/megaman-zero">
                  <div>
                    <img
                      src="/img/gba/megaman-zero.jpg"
                      alt="Third slide"
                      className="slick-image"
                    />
                    {/* <div className="slick-caption">
                      <h4>
                        Megaman Zero
                      </h4>
                    </div> */}
                  </div>
                </Link>
                <Link href="/gba/pokemon-leaf-green">
                  <div>
                    <img
                      src="/img/gba/pokemon-leaf-green.jpg"
                      alt="Third slide"
                      className="slick-image"
                    />
                    {/* <div className="slick-caption">
                      <h4>
                        Pokemon Leaf Green
                      </h4>
                    </div> */}
                  </div>
                </Link>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
