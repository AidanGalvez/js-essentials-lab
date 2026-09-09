function WorkoutSummary(props){
    const workoutTotal = props.items.length

    const timeTotal = props.items.reduce((acc, workout) => 
        acc + Number(workout.duration), 0)

    return(
        <div className="form-control">
            <h1>Workout Summary</h1>
            <p>Total Number of Workouts: {workoutTotal}</p>
            <p>Total Duration: {timeTotal} minutes</p>
        </div>
    );
}

export default WorkoutSummary;