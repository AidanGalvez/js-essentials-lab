function ScoreSummary(props){
    const totalEntries = props.items.length

    const highestScore = props.items.reduce((max,player)=>{
        if(player.score > max){
            max = player.score;
        }
        return max;
    },0)
    
    const averageScore = (props.items.reduce((acc, player) => 
        acc + Number(player.score), 0)/totalEntries).toFixed(0)
    
    return (
        totalEntries === 0 ? (
            <div className="form-control">
                <h1>Score Summary</h1>
                <p>No scores found.</p>
            </div>
            
        ) : (
            <div className="form-control">
                <h1>Score Summary</h1>
                <p>Total Number of Entries: {totalEntries}</p>
                <p>Highest Score: {highestScore}</p>
                <p>Average Score: {averageScore}</p>
            </div>
        )
    );
}

export default ScoreSummary;