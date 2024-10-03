import styled from "styled-components"
import { formatPesosNumberWithDotsAndDecimals } from "../../../../functions"

function OrderSummary( {order} ) {

    return (
        <DivOrder>
            <h2><strong>Orden ID: </strong>{ order.id }</h2>
            <p><strong>Fecha Facturación:</strong> { order.date.toDate().toLocaleDateString() }</p>
            <HorizontalLine />
            <h3>Datos Comprador</h3>
            <p>{ order.buyer.lastName }, { order.buyer.firstName }</p>
            <p><strong>Email:</strong> {order.buyer.email}</p>
            <p><strong>Tel:</strong> {order.buyer.phone}</p>
            <HorizontalLine />
            <h3>Productos: </h3>
            {
                order.items.map( item => (
                    <DivProducts key={item.id}>
                        <p><strong>Nombre:</strong> {item.name}</p>
                        <p><strong>Precio Unitario:</strong> { formatPesosNumberWithDotsAndDecimals( item.price ) } - <strong>Cantidad:</strong> {item.quantity} uni. - <strong>Precio Total:</strong> { formatPesosNumberWithDotsAndDecimals( item.price * item.quantity ) }</p>
                    </DivProducts>
                ) )
            }
            <HorizontalLine />
            <DivFooter>
                <p><strong>Total de compra:</strong> { formatPesosNumberWithDotsAndDecimals( order.total ) } </p>
            </DivFooter>
        </DivOrder>
    )
}

const DivOrder = styled.div`
    text-align: left;
    padding: 0px 10px;
    margin: 10px auto;
    width: 92%;
    border: 1px solid #aaa;
    border-radius: 15px;
`

const HorizontalLine = styled.hr`
    border: none;
    height: 1px;
    background-color: #ccc;
    margin: 20px 0;
`

const DivProducts = styled.div`
    margin-left: 20px;
`

const DivFooter = styled.div`
    text-align: right;
`

export default OrderSummary