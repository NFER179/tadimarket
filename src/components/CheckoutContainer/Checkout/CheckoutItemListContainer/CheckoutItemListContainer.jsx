import styled from "styled-components"
import CheckoutItemList from './CheckoutItemList/CheckoutItemList'
import { useCartContext } from "../../../../context/CartContext"
import { formatPesosNumberWithDotsAndDecimals } from "../../../../functions"

function CheckoutItemListContainer() {

    const { cart, getTotal, cleanCart } = useCartContext()

    if( cart.length === 0 ) {
        return (
            <>
                <h2>UUUPS! Aún no cargaste productos a tu carrito.</h2>
            </>
        )
    }

    return (
        <DivCheckoutItemList>
            <h3>Resumen de compra:</h3>
            {
                cart.map(item => (
                    <CheckoutItemList key={item.id} {...{item}}/>
               ))
            }
            <DivCheckoutTotal>Precio Total: { formatPesosNumberWithDotsAndDecimals( getTotal() ) }</DivCheckoutTotal>
            {
                cart.length > 0
                    ? <BtnDeleteProducst onClick={cleanCart}>Vaciar Carro</BtnDeleteProducst>
                    : <></>
            }
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

const DivCheckoutTotal = styled.div`
    margin-top: 20px;
    font-weight: bold;
`

const BtnDeleteProducst = styled.button`
    background: red;
    color: white;
`

export default CheckoutItemListContainer