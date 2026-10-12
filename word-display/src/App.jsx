import { useState, useEffect } from "react";
import StatusDisplay from "./components/StatusDisplay";
import useWordCycle from "./hooks/useWordCycle";

const heroWords = ["Fast", "Reliable", "Simple", "Powerful"];
const statusSteps = ["Gathering data...", "Loading...", "Ready!"];

function App() {

  const word = useWordCycle(heroWords);

  return (
    <main>
      <div className="card">
        <h2>
          Build apps that are{" "}
          <span className="hero-word">{word}</span>
        </h2>
      </div>

      <StatusDisplay words={statusSteps} delay={1500} />
    </main>
  );
}

export default App;