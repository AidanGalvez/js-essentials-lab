function ScoreCard(props){
    return (
        <div className="card">
            <h2>{props.initials}</h2>
            <p>Game: {props.title}</p>
            <p>Score: {props.score}</p>
            <p>Category: {props.type}</p>
        </div>

    );
}

export default ScoreCard;