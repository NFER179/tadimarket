import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

function ItemDetail( {id, name, card_images, desc, card_prices} ) {

    const [quantityAdded, setQuantityAdded] = useState( 0 )

    const handleOnAdd = ( quantity ) => {
        setQuantityAdded( quantity )
        console.log( quantity )
    }

    return (
        <div>
            <h1>Item details</h1>
            <p>{name}</p>
            <img src={card_images[0].image_url} alt={card_images[0].image_url} height={300} width={200}/>
            <p>{id}</p>
            <p>{desc}</p>
            <p>U$S {card_prices[0].amazon_price}</p>
            { 
                quantityAdded > 0 ? (
                    <Link to='/cart' >Finish Shop</Link>
                ) : (
                    <ItemCount initial={1} stock={10} onAdd={handleOnAdd} />
                )
            }
        </div>
    )
}

export default ItemDetail