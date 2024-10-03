import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import CheckoutContainer from '../components/CheckoutContainer/CheckoutContainer'
import OrderSummaryContent from '../components/OrderSummaryListContent/OrderSummaryListContent'

export function RouterMap(props) {

    return (
        <BrowserRouter>
            <NavBar amount={3} />
            <Routes>
                {/* <ItemListContainer greeting={'¡Bienvenidos!'} /> */}
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/product/:itemId' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<CheckoutContainer />} />
                <Route path='/orders' element={ <OrderSummaryContent /> } />
                <Route path='/order/:orderId' element={ <OrderSummaryContent /> } />
                <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            </Routes>
        </BrowserRouter>
    )
}