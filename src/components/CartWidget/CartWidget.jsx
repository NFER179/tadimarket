import React from "react"
import { FaShoppingCart } from 'react-icons/fa'
import styled from "styled-components"

function CartWidget( props ) {

    return (
        <DivCartWidget>
            <FaShoppingCart size={24} />
            { props.itemsQuantity > 0 ? <SpanItemsQuantity>{ props.itemsQuantity }</SpanItemsQuantity> : <span></span> }
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