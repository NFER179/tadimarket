import { useState } from "react"

function ItemCount( {stock, initial, onAdd} ) {

    const [quantity, setQuantity] = useState( initial )

    function increment() {
        if( quantity < stock ) {
            setQuantity( quantity + 1 )
        }
    }

    function decrement() {
        if( quantity > 1 )
            setQuantity( quantity - 1 )
    }

    return (
        <div>
            <div>
                <button onClick={decrement}>-</button>
                <h3>{quantity}</h3>
                <button onClick={increment}>+</button>
            </div>
            <div>
                <button onClick={() => onAdd(quantity)} disabled={!stock}>
                    Add Product
                </button>
            </div>
        </div>
    )
}

export default ItemCount