import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Delete from "@material-ui/icons/Delete";
import ThumbUp from "@material-ui/icons/ThumbUp";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
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
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Colabore na diminuição de lixo"
              description="No mundo na economia de água utilizada para a produção de novas peças que não utilizam materiais recicláveis, e na diminuição do tamanho das ilhas de lixo encontrada em nosso oceano pacífico. Assim, contribuímos para um futuro melhor"
              icon={Delete}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Ajudando o instituto ipê"
              description="Você garante um futuro melhor para os jovens que não possuem condições para cursar a faculdade e aprender uma nova profissão"
              icon={ThumbUp}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="O Ipê Reais"
              description="É a nossa moeda de agradecimento pelo apoio de vocês. Ela pode ser usada na troca de móveis e brinquedos disponíveis no nosso ateliê como produto de troca ou pode ser trocada pela coleta seletiva destes materiais"
              icon={MonetizationOn}
              iconColor="success"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
