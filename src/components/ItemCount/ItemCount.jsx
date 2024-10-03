import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import styled from "styled-components"

function ItemCount( {item, stock, onAdd} ) {

    const [quantity, setQuantity] = useState( 1 )

    const { addToCart } = useCartContext()

    function increment() {
        if( quantity < stock ) {
            setQuantity( quantity + 1 )
        }
    }

    function decrement() {
        if( quantity > 1 )
            setQuantity( quantity - 1 )
    }

    const handleAddToCartOnClick = () => {
        onAdd( quantity )
        addToCart( {...item, quantity: quantity} )
    }

    return (
        <div>
            <DivCounter>
                <BtnCounter onClick={decrement}>-</BtnCounter>
                <SpanCounter>{quantity}</SpanCounter>
                <BtnCounter onClick={increment}>+</BtnCounter>
            </DivCounter>
            <DivAddToCart>
                <BtnAddToCart 
                    onClick={handleAddToCartOnClick} 
                    disabled={!stock} >
                    Agregar al Carrito
                </BtnAddToCart>
            </DivAddToCart>
        </div>
    )
}

const DivCounter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
    padding: 0px;
    background: #aaa;
    border-radius: 50px;
    width: 170px;
`

const SpanCounter = styled.span`
    font-weight: 400;
    font-size: 16px;
    color: #fff;
`

const BtnCounter = styled.button`
    font-weight: 400;
    font-size: 18px;
    color: #fff;
    border-radius: 100%;
    border: none;
    background: transparent;
    &:focus {
        outline: none;
    }
`

const DivAddToCart = styled.div`
    padding-top: 10px;
`

const BtnAddToCart = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
`

export default ItemCount