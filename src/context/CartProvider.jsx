import { useState } from "react"
import { CartContext } from "./CartContext"

function CartProvider( {children} ) {

    const [cart, setCart] = useState([])

    // Function to add products to the order.
    const addToCart = async (product) => {
        // Check if the product already exists in the cart
        const existingProduct = cart.find( ( p )  => p.id === product.id )

        // If product exists, update its quantity
        if( existingProduct ) {
            const newCart = cart.map( (p) => (
                p.id === product.id ? { ...p, quantity: p.quantity + product.quantity } : p
             ) )
            setCart( newCart )
        } else {
            // if it doesn't exist, add the new product
            setCart([...cart, product])
        }
    }

    // Function to calculate total price.
    const getTotal = () => {
        const prices = cart.map( p => p.price * p.quantity )

        const total = prices.reduce( ( acc, current ) => acc + current, 0 )

        return total
    }

    // Function to clean cart.
    const cleanCart = () => {
        setCart( [] )
    }

    // Function to delete a element from cart.
    const deleteItemFromList = async ( itemId ) => {
        const newProductList = cart.filter( item => item.id !== itemId )
        setCart( newProductList )
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, getTotal, cleanCart, deleteItemFromList }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider