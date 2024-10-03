import styled from "styled-components"
import OrderSummary from "./OrderSummary/OrderSummary"

function OrderSummaryList( {orders} ) {

    return (
        <DivOrederSummaryList>
            {
                orders.map( order => (
                    <OrderSummary key={ order.id } {...{order}} />
                ) )
            }
        </DivOrederSummaryList>
    )
}

const DivOrederSummaryList = styled.div`
`

export default OrderSummaryList