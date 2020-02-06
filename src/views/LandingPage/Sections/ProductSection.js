import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-leaf-carousel";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import image1 from "assets/img/1.jpg";
import image2 from "assets/img/2.jpg";
import image3 from "assets/img/3.jpg";
import image4 from "assets/img/4.jpg";
import image5 from "assets/img/5.jpg";
import image6 from "assets/img/6.jpg";
import image7 from "assets/img/7.jpg";
import image8 from "assets/img/8.jpg";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
            <h2 className={classes.title}>Produtos</h2>
            <h5 className={classes.description}>
              Conheça alguns dos nossos produtos
            </h5>
            <Carousel
              breakpoints={[
                {
                  breakpoint: 500,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                  }
                },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                  }
                }
              ]}
              dots={false}
              showSides={true}
              sidesOpacity={0.5}
              sideSize={0.1}
              slidesToScroll={4}
              slidesToShow={4}
              scrollOnDevice={true}
              autoCycle={true}
            >
              <div>
                <img alt="" src={image1} />
              </div>
              <div>
                <img alt="" src={image2} />
              </div>
              <div>
                <img alt="" src={image3} />
              </div>
              <div>
                <img alt="" src={image4} />
              </div>
              <div>
                <img alt="" src={image5} />
              </div>
              <div>
                <img alt="" src={image6} />
              </div>
              <div>
                <img alt="" src={image7} />
              </div>
              <div>
                <img alt="" src={image8} />
              </div>
            </Carousel>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
