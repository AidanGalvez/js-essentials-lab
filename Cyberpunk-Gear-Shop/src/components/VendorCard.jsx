import Card from "./Card";

function VendorCard(props){
    return(
        <Card>
            <h2>{props.vendorName}</h2>
            <p>{props.location}</p>
        </Card>
    );
}

export default VendorCard;