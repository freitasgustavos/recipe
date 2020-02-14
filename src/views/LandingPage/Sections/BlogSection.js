import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Info from "components/Typography/Info.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/blogStyle.js";

import team1 from "assets/img/profile-bg.jpg";
import team2 from "assets/img/bg7.jpg";
import team3 from "assets/img/landing-bg.jpg";

const useStyles = makeStyles(styles);

export default function BlogSection() {
  const classes = useStyles();

  const imageClasses = classNames(
    classes.imgCardTop,
    classes.imgCard,
    classes.imgRaised,
    classes.imgBlog
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Blog</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <CardHeader className={classes.cardHeader}>
                <img src={team1} alt="" className={imageClasses} />
                <Info>
                  <p className={classes.margin5}>
                    <b>Categoria</b>
                  </p>
                </Info>
              </CardHeader>

              <CardBody>
                <h3 className={classes.subTitle}>Titulo do post</h3>
                <p className={classes.resume}>
                  O Lorem Ipsum é um texto modelo da indústria tipográfica e de
                  impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado
                  por estas indústrias desde o ano de 1500, quando uma misturou
                  os caracteres de um texto para criar um espécime de livro.
                  <a href="/#">
                    {" "}
                    <b>Leia mais</b>
                  </a>
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <CardHeader className={classes.cardHeader}>
                <img src={team2} alt="" className={imageClasses} />
                <Info>
                  <p className={classes.margin5}>
                    <b>Categoria</b>
                  </p>
                </Info>
              </CardHeader>
              <CardBody>
                <h3 className={classes.subTitle}>Titulo do post</h3>
                <p className={classes.resume}>
                  O Lorem Ipsum é um texto modelo da indústria tipográfica e de
                  impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado
                  por estas indústrias desde o ano de 1500, quando uma misturou
                  os caracteres de um texto para criar um espécime de livro.
                  <a href="/#">
                    {" "}
                    <b>Leia mais</b>
                  </a>
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <CardHeader className={classes.cardHeader}>
                <img src={team3} alt="" className={imageClasses} />
                <Info>
                  <p className={classes.margin5}>
                    <b>Categoria</b>
                  </p>
                </Info>
              </CardHeader>
              <CardBody>
                <h3 className={classes.subTitle}>Titulo do post</h3>
                <p className={classes.resume}>
                  O Lorem Ipsum é um texto modelo da indústria tipográfica e de
                  impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado
                  por estas indústrias desde o ano de 1500, quando uma misturou
                  os caracteres de um texto para criar um espécime de livro.
                  <a href="/#">
                    {" "}
                    <b>Leia mais</b>
                  </a>
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
