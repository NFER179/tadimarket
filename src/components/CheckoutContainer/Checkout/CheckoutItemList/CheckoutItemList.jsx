import styled from "styled-components"
import { useCartContext } from "../../../../context/CartContext"
import { formatPesosNumberWithDotsAndDecimals } from "../../../../functions"

function CheckoutItemList() {

    const { cart, getTotal } = useCartContext()

    return (
        <DivCheckoutItemList>
            <h3>Resumen de compra:</h3>
            {
                cart.map(item => (
                    <DivCheckoutItem key={item.id} >
                        <p>
                            {item.name} | {formatPesosNumberWithDotsAndDecimals(item.price)} x {item.quantity} = {formatPesosNumberWithDotsAndDecimals(item.price * item.quantity)} </p>
                    </DivCheckoutItem>
                ))
            }
            <DivCheckoutTotal>Precio Total: {formatPesosNumberWithDotsAndDecimals(getTotal())}</DivCheckoutTotal>
        </DivCheckoutItemList>
    )
}

const DivCheckoutItemList = styled.div`
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    width: 48%;
`

const DivCheckoutItem = styled.div`
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
    &:last-child {
    border-bottom: none;
}
`

const DivCheckoutTotal = styled.div`
    margin-top: 20px;
    font-weight: bold;
`

export default CheckoutItemList