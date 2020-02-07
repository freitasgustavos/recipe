import { title } from "assets/jss/material-kit-react.js";

const projectStyle = {
  section: {
    padding: "50px 0",
    textAlign: "center"
  },
  product: {
    marginTop: "30px"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    color: "#999",
    fontSize: "1.3rem"
  },
  itens: {
    marginTop: "30px",

    "& b": {
      color: "#437945"
    }
  }
};

export default projectStyle;
