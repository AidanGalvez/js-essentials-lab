import PriceTag from "./PriceTag.jsx";
import Card from "./Card";

function GearItemCard(props){
    return(
        <Card>
            <h3>{props.name}</h3>
            <p>{props.category}</p>
            <p>{props.description}</p>
            <PriceTag basePrice = {props.basePrice}/>
        </Card>
    );
}

export default GearItemCard;