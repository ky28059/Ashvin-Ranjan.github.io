import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#aaaaaa",
      light: "#dddddd",
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
    },
  },
  spreadIt: {
    button: {
      backgroundColor: "#4CAFFF",

      textAlign: "center",
      fontSize: "25px",
      padding: "10px 5px",
      color: "white",
    },
    link: {
      textDecoration: "none",
      color: "white",
      textAlign: "none",
    },
  },
});

export default theme;
