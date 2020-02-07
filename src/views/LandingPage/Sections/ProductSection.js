import React from "react";
// react component for creating beautiful carousel
// import Carousel from "react-leaf-carousel";
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
        <GridContainer spacing={3}>
          <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
            <h2 className={classes.title}>Produtos</h2>
            <h5 className={classes.description}>
              Conheça alguns dos nossos produtos
            </h5>
          </GridItem>
          <GridItem xs={6} sm={6} md={4} className={classes.marginAuto}>
            <img
              alt=""
              src={image1}
              className={
                classes.imgRaised +
                " " +
                classes.imgRounded +
                " " +
                classes.imgFluid
              }
            />
          </GridItem>
          <GridItem xs={6} sm={6} md={4} className={classes.marginAuto}>
            <img
              alt=""
              src={image2}
              className={
                classes.imgRaised +
                " " +
                classes.imgRounded +
                " " +
                classes.imgFluid
              }
            />
          </GridItem>
          <GridItem xs={6} sm={6} md={4} className={classes.marginAuto}>
            <img
              alt=""
              src={image3}
              className={
                classes.imgRaised +
                " " +
                classes.imgRounded +
                " " +
                classes.imgFluid
              }
            />
          </GridItem>

          <GridItem xs={6} sm={6} md={4} className={classes.marginAuto}>
            <img
              alt=""
              src={image4}
              className={
                classes.imgRaised +
                " " +
                classes.imgRounded +
                " " +
                classes.imgFluid
              }
            />
          </GridItem>
          <GridItem xs={6} sm={6} md={4} className={classes.marginAuto}>
            <img
              alt=""
              src={image5}
              className={
                classes.imgRaised +
                " " +
                classes.imgRounded +
                " " +
                classes.imgFluid
              }
            />
          </GridItem>
          <GridItem xs={6} sm={6} md={4} className={classes.marginAuto}>
            <img
              alt=""
              src={image6}
              className={
                classes.imgRaised +
                " " +
                classes.imgRounded +
                " " +
                classes.imgFluid
              }
            />
          </GridItem>

          <GridItem xs={6} sm={6} md={6} className={classes.marginAuto}>
            <img
              src={image7}
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRounded +
                " " +
                classes.imgFluid
              }
            />
          </GridItem>
          <GridItem xs={6} sm={6} md={6} className={classes.marginAuto}>
            <img
              src={image8}
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRounded +
                " " +
                classes.imgFluid
              }
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
