import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer';

export function RouterMap(props) {

    return (
        <BrowserRouter>
            <NavBar amount={3} />
            <Routes>
                {/* <ItemListContainer greeting={'¡Bienvenidos!'} /> */}
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:typeId' element={<ItemListContainer />} />
                <Route path='/product/:cardId' element={<ItemDetailContainer />} />
                <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            </Routes>
        </BrowserRouter>
    )
}