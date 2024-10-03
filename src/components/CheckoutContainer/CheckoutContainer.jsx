import styled from "styled-components"
import Checkout from "./Checkout/Checkout"

function CheckoutContainer() {

    return(
        <DivCartContainer>
            <Checkout />
        </DivCartContainer>
    )
}

const DivCartContainer = styled.div`
    margin: 0;
    padding: 20px;
`

export default CheckoutContainer