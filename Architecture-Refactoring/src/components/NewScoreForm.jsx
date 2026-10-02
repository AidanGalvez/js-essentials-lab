import { useState, useReducer, useEffect } from "react";
import ErrorModal from "./ErrorModal";

const playerStatsReducer = (state, action) => {
    if (action.type === "INITIALS_INPUT"){
        return {
            initials: action.val,
            initialsIsValid: action.val.trim().length > 0,
            score: state.score,
            scoreIsValid: state.scoreIsValid
        };
    }

    if (action.type === "SCORE_INPUT"){
        return {
            score: action.val,
            scoreIsValid: action.val.trim().length > 0,
            initials: state.initials,
            initialsIsValid: state.initialsIsValid
        };
    }

    if (action.type === "REFRESH"){
        return {
            initials: action.initials,
            initialsIsValid: action.initials.trim().length > 0,
            score: action.score,
            scoreIsValid: action.score.trim().length > 0
        };
    }

    if(action.type === "DEFAULT"){
        return {
            initials: "",
            initialsIsValid: false,
            score: "",
            scoreIsValid: false
        };
    }

    return state;
}

const gameInfoReducer = (state, action) => {
    if (action.type === "TITLE_INPUT"){
        return {
            title: action.val,
            titleIsValid: action.val.trim().length > 0,
            category: state.category,
        };
    }

    if (action.type === "TYPE_INPUT"){
        return {
            category: action.val,
            title: state.title,
            titleIsValid: state.titleIsValid
        };
    }

    if (action.type === "REFRESH"){
        return {
            title: action.title,
            titleIsValid: action.title.trim().length > 0,
            category: action.category,
        };
    }

    if(action.type === "DEFAULT"){
        return {
            title: "",
            titleIsValid: false,
            category: "Arcade Classic"
        };
    }

    return state;
}

function NewScoreForm(props){
    //const [enteredInitials, setEnteredInitials] = useState("");
    //const [enteredScore, setEnteredScore] = useState(0);

    //const [enteredTitle, setEnteredTitle] = useState("");
    //const [enteredType, setEnteredType] = useState("Arcade Classic");

    const [error, setError] = useState(null);

    const [playerState, dispatchPlayer] = useReducer(playerStatsReducer, {
        initials: "",
        initialsIsValid: false,
        score: "",
        scoreIsValid: false
    });

    const [gameState, dispatchGame] = useReducer(gameInfoReducer, {
        title: "",
        titleIsValid: false,
        category: "Arcade Classic"
    });

    useEffect(() => {
        const getInitials = localStorage.getItem("initials")|| "";
        const getScore = localStorage.getItem("score")|| "";
        const getTitle = localStorage.getItem("title")|| "";
        const getType = localStorage.getItem("type")|| "";

        dispatchPlayer({
            type: "REFRESH",
            initials: getInitials,
            score: getScore
        });

        dispatchGame({
            type: "REFRESH",
            title: getTitle,
            category: getType
        })
    },[]);
    

    useEffect(() => {
        const timerId = setTimeout(() => {
            localStorage.setItem("initials",playerState.initials);
            localStorage.setItem("score",playerState.score);
            localStorage.setItem("title",gameState.title);
            localStorage.setItem("type",gameState.category);
            }, 500)
            
            return () => {
            clearTimeout(timerId);
            };
    },[playerState.initials, playerState.score, gameState.title, gameState.category]);


    const submitHandler = (event) => {
        event.preventDefault();

        const scoreData = {
            id: Math.random().toString(),
            playerInitials: playerState.initials,
            gameTitle: gameState.title,
            score: Number(playerState.score),
            category: gameState.category
        }

        if (!playerState.initialsIsValid || !gameState.titleIsValid || !playerState.scoreIsValid) {
            setError({
                title: 'Invalid input',
                message: 'Please enter valid Initials, title, and score',
             });
            return;
        }

        props.onAddScore(scoreData);

        dispatchPlayer({type: "DEFAULT"})
        dispatchGame({type: "DEFAULT"})

    }

    return (
        <form className = "card" onSubmit={submitHandler}>
            {error && (
                <ErrorModal
                title={error.title}
                message={error.message}
                onConfirm={() => setError(null)}
                />
            )}
            <div className = "form-control">
                <label>Initials</label>
                <input 
                    type="text"
                    maxLength={3} 
                    value={playerState.initials} 
                    onChange={(e)=>dispatchPlayer({
                        type: "INITIALS_INPUT",
                        val: e.target.value})
                    }
                />

                <label>Game Title</label>
                <input 
                    type="text"  
                    value={gameState.title} 
                    onChange={(e)=>dispatchGame({
                        type: "TITLE_INPUT",
                        val: e.target.value})
                    }
                />

                <label>High Score</label>
                <input 
                    type="number" 
                    value={playerState.score} 
                    onChange={(e)=> dispatchPlayer({
                        type: "SCORE_INPUT",
                        val: e.target.value})
                    }
                />

                <label>Category</label>
                <select value={gameState.category} onChange={(e)=>dispatchGame({
                        type: "TYPE_INPUT",
                        val: e.target.value})
                    }>
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
