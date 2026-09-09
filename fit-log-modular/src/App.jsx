import NewWorkout from "./components/NewWorkout";
import WorkoutList from "./components/WorkoutList";

import {useState} from "react";
import './App.css'

const INITIAL_WORKOUTS = [
  {id: 'w1', title: "Morning Run", duration: 30, type: "Cardio"},
  {id: 'w2', title: "Weight Training", duration: 45, type: "Strength"}
];

function App() {
  const[workouts, setWorkouts] = useState(INITIAL_WORKOUTS)

  const addWorkoutHandler = (workout) => {
    setWorkouts((prevWorkouts) => [workout, ...prevWorkouts]);
  }



  
  return (
    <div>
      <h1>Fitlog - Fitness Activity Tracker</h1>
      {/* Workout Form Mockup */}
        <NewWorkout onAddWorkout={addWorkoutHandler}/>
        
      {/* Mock Workout List */}
        <WorkoutList items={workouts}/>

    </div>
  )
}

export default App
