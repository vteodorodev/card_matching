import React, { useCallback, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Grid from "./components/Grid";
import { GridRef } from "./types";

function App() {
  const [turn, setTurn] = useState(0);
  const boardRef = useRef<GridRef>(null);

  const incrementTurn = useCallback(() => setTurn((prev) => prev + 1), []);

  const resetGame = () => {
    boardRef?.current?.shuffle();
    setTurn(0);
  };

  return (
    <div className="App">
      <Header title={"Card Matching"} />
      <button onClick={resetGame}>RESET</button>
      <Grid incrementTurn={incrementTurn} ref={boardRef} />
      <span>{`Turns: ${turn}`}</span>
    </div>
  );
}

export default App;
