/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Hidden from "@material-ui/core/Hidden";

// @material-ui/icons
import { MeetingRoom, HomeOutlined, WebOutlined, AssignmentOutlined } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
        >
          <HomeOutlined className={classes.icons} /> Início
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
        >
          <WebOutlined className={classes.icons} /> Blog
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
        >
          <AssignmentOutlined className={classes.icons} /> Cadastrar
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://app.recipe.org.br"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <MeetingRoom className={classes.icons} /> Entrar
        </Button>
      </ListItem>
    </List>
  );
}
