import ScoreCard from "./ScoreCard";

function LeaderboardList(props){
    return(
        <div className="card">
            <h2>LeaderBoard</h2>
            
            {props.items.map((score) => (
                <ScoreCard 
                    key={score.id} 
                    initials={score.playerInitials}
                    title={score.gameTitle} 
                    score={score.score} 
                    type={score.category}
                />
            ))}
        </div>
    );
}

export default LeaderboardList;