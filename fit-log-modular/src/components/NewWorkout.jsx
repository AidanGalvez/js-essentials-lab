import WorkoutForm from "./WorkoutForm"

function NewWorkout(props){
    const saveWorkoutDataHandler = (enteredWorkoutData) => {
        const workoutData = {
            ...enteredWorkoutData,
            id: Math.random().toString()
        }
        props.onAddWorkout(workoutData)
    }

    return (
        <div>
            <WorkoutForm onSaveWorkoutData={saveWorkoutDataHandler}/>
        </div>

    );
}

export default NewWorkout;