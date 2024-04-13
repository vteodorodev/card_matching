import React from "react";
import "./App.css";
import Header from "./components/Header";
import Grid from "./components/Grid";

function App() {
  return (
    <div className="App">
      <Header title={"Card Matching"} />
      <Grid />
    </div>
  );
}

export default App;
