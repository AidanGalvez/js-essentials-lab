import "./Card.css";

function Card(props){
    return <div className = "card-box">{props.children}</div>;
}

export default Card;