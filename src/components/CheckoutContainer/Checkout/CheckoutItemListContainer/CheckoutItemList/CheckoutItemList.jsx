import styled from "styled-components"
import { useCartContext } from "../../../../../context/CartContext"
import { formatPesosNumberWithDotsAndDecimals } from "../../../../../functions"

function CheckoutItemList( { item } ) {

    const { deleteItemFromList } = useCartContext()

    const handleDeleteItemFromList = () => {
        deleteItemFromList( item.id )
    }

    return (
        <DivCheckoutItem key={item.id} >
            <p>{item.name} | {formatPesosNumberWithDotsAndDecimals(item.price)} x {item.quantity} = {formatPesosNumberWithDotsAndDecimals(item.price * item.quantity)} </p>
            <BtnDelete onClick={handleDeleteItemFromList}>Eliminar</BtnDelete>
        </DivCheckoutItem>
    )
}

const DivCheckoutItem = styled.div`
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
    &:last-child {
        border-bottom: none;
    }
`

const BtnDelete = styled.button`
    background: red;
    color: white;
`

export default CheckoutItemList