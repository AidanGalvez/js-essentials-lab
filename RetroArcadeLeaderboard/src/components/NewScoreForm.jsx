import { useState } from "react";

function NewScoreForm(props){
    const [enteredInitials, setEnteredInitials] = useState("");
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredScore, setEnteredScore] = useState(0);
    const [enteredType, setEnteredType] = useState("Arcade Classic");

    const submitHandler = (event) => {
        event.preventDefault();

        const scoreData = {
            id: Math.random().toString(),
            playerInitials: enteredInitials,
            gameTitle: enteredTitle,
            score: enteredScore,
            category: enteredType
        }

        props.onAddScore(scoreData);

        setEnteredInitials("");
        setEnteredTitle("");
        setEnteredScore(0);
        setEnteredType("Arcade Classic");

        
    }

    return (
        <form className = "card" onSubmit={submitHandler}>
            <div className = "form-control">
                <label>Initials</label>
                <input 
                    type="text"
                    maxLength={3} 
                    value={enteredInitials} 
                    onChange={(e)=>setEnteredInitials(e.target.value)}
                />
            </div>
            <div className = "form-control">
                <label>Game Title</label>
                <input 
                    type="text"  
                    value={enteredTitle} 
                    onChange={(e)=>setEnteredTitle(e.target.value)}
                />
            </div>
            <div className = "form-control">
                <label>High Score</label>
                <input 
                    type="number" 
                    value={enteredScore} 
                    onChange={(e)=>setEnteredScore(e.target.value)}
                />
            </div>
            <div className = "form-control">
                <label>Category</label>
                <select value={enteredType} onChange = {(e)=>setEnteredType(e.target.value)}>
                    <option value="Arcade Classic">Arcade Classic</option>
                    <option value="Sci-Fi Shooter">Sci-Fi Shooter</option>
                    <option value="Puzzle">Puzzle</option>
                </select>
            </div>
            <button type="submit">Add Score</button>
        </form>
    );
}

export default NewScoreForm;
