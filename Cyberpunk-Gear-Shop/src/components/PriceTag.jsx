function PriceTag(props){
    return(
        <div>
            <p>Base Price: ${props.basePrice}</p>
            <p>After trade tax: ${(props.basePrice * 1.15).toFixed(2)}</p>
        </div>
    );
}

export default PriceTag;