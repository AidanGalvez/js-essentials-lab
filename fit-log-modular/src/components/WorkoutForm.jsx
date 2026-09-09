import { useState } from "react";

function WorkoutForm(props){
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredDuration, setEnteredDuration] = useState("");
    const [enteredType, setEnteredType] = useState("Cardio");

    const submitHandler = (event) => {
        event.preventDefault();

        const workoutData = {
            title: enteredTitle,
            duration: enteredDuration,
            type: enteredType
        }

        props.onSaveWorkoutData(workoutData);
        
        setEnteredTitle("");
        setEnteredDuration("");
        setEnteredType("Cardio");
    }

    return(
        <form className = "card" onSubmit={submitHandler}>
            <div className = "form-control">
                <label>Title</label>
                <input 
                    type="text" 
                    value={enteredTitle} 
                    onChange={(e)=>setEnteredTitle(e.target.value)}
                />
            </div>
            <div className = "form-control">
                <label>Duration (mins)</label>
                <input 
                    type="number" 
                    min="1" 
                    step="1" 
                    value={enteredDuration} 
                    onChange={(e)=>setEnteredDuration(e.target.value)}
                />
            </div>
            <div className = "form-control">
                <label>Type</label>
                <select value={enteredType} onChange = {(e)=>setEnteredType(e.target.value)}>
                    <option value="Cardio">Cardio</option>
                    <option value="Strength">Strength</option>
                    <option value="Flexibility">Flexibility</option>
                </select>
            </div>
            <button type="submit">Add Workout</button>
        </form>
    );
}

export default WorkoutForm;