import React from "react"
import { FaShoppingCart } from 'react-icons/fa'
import styled from "styled-components"
import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

function CartWidget() {

    const { cart } = useCartContext()

    return (
        <DivCartWidget>
            <Link to='/cart'>
                <FaShoppingCart size={24} color="black"/>
                { cart.length > 0 ? <SpanItemsQuantity>{ cart.length }</SpanItemsQuantity> : <span></span> }
            </Link>
        </DivCartWidget>
    )
}

const DivCartWidget = styled.div`
    width: 25px;
    display: flex;
    align-items: center;
    position: relative;
`

const SpanItemsQuantity = styled.span`
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: red;
    color: white;
    border-radius: 50%;
    padding: 3px 9px;
    font-size: 11px;
`

export default CartWidget