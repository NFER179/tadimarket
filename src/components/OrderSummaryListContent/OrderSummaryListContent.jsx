import { useEffect, useState } from 'react'
import OrderSummaryList from './OrderSummaryList/OrderSummaryList'
import { getOrders } from '../../firebase/db'
import { useParams } from 'react-router-dom'

function OrderSummaryContent() {

    const [orders, setOrders] = useState( [] )
    const [loading, setLoading] = useState( false )

    const { orderId } = useParams()

    function showOrders() {
        setLoading( true )

        getOrders()
            .then( (orders) => {
                if( orderId ) {
                    setOrders( orders.filter( order => order.id === orderId ) )
                } else {
                    setOrders( orders )
                }
            } )
            .catch( ( e ) => {
                console.error( 'Error: ', e )
            } )
            .finally( () => {
                setLoading( false )
            } )
    }

    useEffect( () => {
        showOrders()
    }, [orderId] )

    if( loading ) {
        return (
            <>
                Loading
            </>
        )
    }

    return (
        <>
            <OrderSummaryList {...{orders}} />
        </>
    )
}

export default OrderSummaryContent