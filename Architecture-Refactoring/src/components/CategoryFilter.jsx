function CategoryFilter(props){
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }

    return (
        <div className="form-control">
            <label>Filter by Type</label>
            <select value={props.selected} onChange={dropdownChangeHandler}>
                <option value="All Categories">All Categories</option>
                <option value="Arcade Classic">Arcade Classic</option>
                <option value="Sci-Fi Shooter">Sci-Fi Shooter</option>
                <option value="Puzzle">Puzzle</option>
            </select>
        </div>
    );
}

export default CategoryFilter;