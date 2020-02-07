import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/whoStyle.js";

const useStyles = makeStyles(styles);

export default function WhoSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}>Quem Somos</h2>
          <h5 className={classes.description}>
            Somos uma Organização não governamental que trabalha diretamente com
            3 dos 17 objetivos globais de sustentabilidade da ONU. Nosso
            objetivo é promover uma boa saúde, consumo sustentável, empregos
            dígnos para catadores de lixo e boas oportunidades de estudo e
            aprendizagem para jovens carentes que, por muitas das vezes, não
            possui condições de fazer uma faculdade.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center" spacing={3}>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <iframe
              frameBorder={0}
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/N0R8A0x1O4A"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              title="Tv Paranaíba"
            ></iframe>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Tv Paranaíba
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Entrevista com a TV Paranaíba, onde mostrando um pouco mais
                sobre o espaço e os projetos que estão ativos.
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small" color="primary">
                Espaço Ipê Cultural
              </Button>
            </CardActions>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <iframe
              frameBorder={0}
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/zigCqUpqdbQ"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              title="Band"
            ></iframe>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Ipê na Band
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Este vídeo é uma reportagem que fizemos com a TV Bandeirantes,
                onde explicamos sobre os projetos adote um oficineiro e o Recipê
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small" color="primary">
                Projeto Recipê
              </Button>
            </CardActions>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
