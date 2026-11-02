import {Link, useNavigate} from "react-router-dom";

function HomePage(){
    const navigate = useNavigate();

    function navigateHandler(){
        navigate("/adventures")
    }

    return (
        <>
        <h1>Home Page</h1>
        <p>
            Go to <Link to="/adventures">adventures page</Link>
        </p>
        <p>
            <button onClick={navigateHandler}>Jump to Adventures</button>
        </p>
        </>
    )
}

export default HomePage;