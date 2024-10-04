import styled from "styled-components"
import CheckoutForm from "./CheckoutForm/CheckoutForm"
import CheckoutItemListContainer from "./CheckoutItemListContainer/CheckoutItemListContainer"

function Checkout() {

    return (
        <DivCheckout>
            <CheckoutItemListContainer />
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