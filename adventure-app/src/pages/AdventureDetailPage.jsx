import { useParams } from "react-router-dom";


function AdventureDetailPage(){
    const params = useParams();
    return (
        <>
            <h1>Adventure Details!</h1>
            <p>{params.adventureId}</p>
        </>
    )
}

export default AdventureDetailPage;