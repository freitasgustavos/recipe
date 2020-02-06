import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}>Venha promover a Cultura Verde</h2>
          <h5 className={classes.description}>
            O Recipê é uma plataforma que premia pessoas com atitudes
            ambientalmente corretas. Por meio de um site responsivo,
            disponibilizamos um calendário com os dias e horários onde será
            possível realizar a coleta seletiva. Em troca dos materiais
            recicláveis, disponibilizamos uma moeda chamada Ipê Reais, onde você
            poderá utilizar para pagar a coleta ou trocar por objetos e brindes
            dentro da plataforma.
          </h5>
        </GridItem>
      </GridContainer>
      <div className={classes.product}>
        <GridContainer className={classes.itens}>
          <GridItem xs={12} sm={12} md={6}>
            <Box color="text.primary">
              <h2>Colabore na diminuição de lixo no mundo</h2>
            </Box>
            <Box color="text.secondary" textAlign="center" fontSize={17}>
              na economia de <b>água</b> utilizada para a produção de novas
              peças que não utilizam materiais <b>recicláveis</b>, e na
              diminuição do tamanho das ilhas de <b>lixo</b> encontrada em nosso
              oceano pacífico. Assim, contribuímos para um futuro melhor
            </Box>
          </GridItem>
          <Hidden smDown>
            <GridItem md={6}>
              <img src={require("assets/img/artes.png")} alt="" mb={15} />
            </GridItem>
          </Hidden>
        </GridContainer>
        <GridContainer className={classes.itens}>
          <Hidden smDown>
            <GridItem md={6}>
              <img src={require("assets/img/arte.png")} alt="" mb={15} />
            </GridItem>
          </Hidden>
          <GridItem xs={12} sm={12} md={6}>
            <Box color="text.primary">
              <h2>Ajudando o Instituto Ipê</h2>
            </Box>
            <Box color="text.secondary" textAlign="center" fontSize={17}>
              você garante um <b>futuro</b> melhor para os <b>jovens</b> que não
              possuem condições para cursar a faculdade e aprender uma nova{" "}
              <b>profissão</b>
            </Box>
          </GridItem>
        </GridContainer>
        <GridContainer className={classes.itens}>
          <GridItem xs={12} sm={12} md={6}>
            <Box color="text.primary">
              <h2>O Ipê reais</h2>
            </Box>
            <Box color="text.secondary" textAlign="center" fontSize={17}>
              é a nossa <b>moeda</b> de agradecimento pelo apoio de vocês. Ela
              pode ser usada na troca de <b>móveis</b> e <b>brinquedos</b>{" "}
              disponíveis no nosso ateliê como produto de troca ou pode ser
              trocada pela coleta seletiva destes materiais
            </Box>
          </GridItem>
          <Hidden smDown>
            <GridItem md={6}>
              <img src={require("assets/img/artes.png")} alt="" />
            </GridItem>
          </Hidden>
        </GridContainer>
      </div>
    </div>
  );
}
