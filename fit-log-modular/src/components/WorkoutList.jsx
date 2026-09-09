import { useState } from "react";
import WorkoutItem from "./WorkoutItem";
import WorkoutFilter from "./WorkoutFilter";
import WorkoutSummary from "./WorkoutSummary";

function WorkoutList(props){
    const [filterType, setFilterType] = useState("All");

    const filterChangeHandler = (selectedType) => {
        setFilterType(selectedType);
    }

    const filteredWorkouts = props.items.filter((workout)=>{
        if (filterType === "All"){
            return true;
        }
        return workout.type === filterType;
    });

    return(
        <div className="card">
            <h2>Daily Log</h2>
            <WorkoutFilter onChangeFilter={filterChangeHandler}/>
            
            <WorkoutSummary items={filteredWorkouts}/>

            { filteredWorkouts.length === 0 ? (
                <p>No workouts found.</p>
            ) : (
            
            filteredWorkouts.map((workout) => (
                <WorkoutItem 
                    key={workout.id} 
                    title={workout.title} 
                    duration={workout.duration} 
                    type={workout.type}
                />
            )
            ))}
        </div>
    );
}

export default WorkoutList;