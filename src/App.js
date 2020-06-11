import Routes from "./routes/Routes";
import TopNav from "./navigation/TopNav";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <TopNav />
      <Routes />
    </div>
  );
}

export default App;
