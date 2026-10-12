import { useState, useEffect } from "react";
import useWordCycle from "../hooks/useWordCycle";

const StatusDisplay = (props) => {

  const doWork = () => {
    console.log("Performing some action...");
  }

  const word = useWordCycle(props.words, false, props.delay, doWork);
  /*
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => {
        // Stop at the last word ("Ready!") instead of looping back to 0
        if (prevIndex === props.words.length - 1) {
          clearInterval(timer);
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, props.delay);

    return () => clearInterval(timer);
  }, [props.words, props.delay]);
  */
  return (
    <div className="card">
      <h3>System Status</h3>
      <p className="status-word">{word}</p>
    </div>
  );
};

export default StatusDisplay;