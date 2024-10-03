import styled from "styled-components"
import CheckoutItemList from "./CheckoutItemList/CheckoutItemList"
import CheckoutForm from "./CheckoutForm/CheckoutForm"

function Checkout() {

    return (
        <DivCheckout>
            <CheckoutItemList />
            <CheckoutForm />
        </DivCheckout>
    )
}

const DivCheckout = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: auto;
    text-align: start;
`

export default Checkout