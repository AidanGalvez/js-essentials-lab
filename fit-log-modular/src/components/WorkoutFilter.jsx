function WorkoutFilter(props){
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }

    return (
        <div className="form-control">
            <label>Filter by Type</label>
            <select value={props.selected} onChange={dropdownChangeHandler}>
                <option value="All">All</option>
                <option value="Cardio">Cardio</option>
                <option value="Strength">Strength</option>
                <option value="Flexibility">Flexibility</option>
            </select>
        </div>
    );
}

export default WorkoutFilter;