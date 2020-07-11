import Routes from "./routes/routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-perfect-scrollbar/dist/css/styles.css";

import React from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../src/builder/theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
