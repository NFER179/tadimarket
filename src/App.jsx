import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './ItemListContainer/ItemListContainer'

function App() {

  /* -> Segmento para que funcione el botón 'Add Product' */
  const [ products, setProducts ] = useState( [] )
  const [ count, setCount ] = useState( 0 )
  
  function addProduct() {
    products.push( count )
    
    setProducts( products )
    setCount( count + 1 )
  }
  /* <- Segmento para que funcione el botón 'Add Product' */


  return (
    <>
      <div>
        <NavBar products={products}/>
        <ItemListContainer greeting={'¡Bienvenidos!'} />
        <button onClick={addProduct}>Add Product</button>
      </div>
    </>
  )
}

export default App
