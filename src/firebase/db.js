import { 
    getFirestore, 
    collection, 
    getDocs, 
    doc, 
    getDoc,
    addDoc
} from "firebase/firestore";
import { app } from './config'

const db = getFirestore( app );

export const getProducts = async () => {
    const querySnapshot = await getDocs( collection( db, "products" ) )
    const products = []
    let product = {}

    querySnapshot.forEach( ( doc ) => {
    //   console.log( doc.data() );
        product = doc.data()
        product.id = doc.id
        products.push( product )
    })

    return products
}

/* Function to return al categories. */
export const getCategories = async () => {
    const querySnapshot = await getDocs( collection( db, "products" ) )
    const categories = new Set()

    querySnapshot.forEach( ( doc ) => {
        let product = doc.data()
        categories.add( product.category )
    } )

    return Array.from( categories )
}

/* Function to return product by id of product. */
export const getProductById = async ( productId ) => {
    const docRef = doc( db, "products", productId )
    const docSnap = await getDoc( docRef )

    let product = {}

    if( docSnap.exists() ) {
        product = docSnap.data()
        product.id = docSnap.id
    } else {
        product.error = "No Such document"
    }

    return product
}

/* Function to save orders. */
export const createOrder = async ( order ) => {

    let orderCreated = {}

    try {
        const docRef = await addDoc( collection( db, "orders" ), order )
        orderCreated.id = docRef.id
        orderCreated.successCommit = true
    } catch( e ) {
        console.error( "Error adding document: ", e )
        orderCreated.id = ""
        orderCreated.successCommit = false
    }

    return orderCreated
}

// Function to obtain all orders
export const getOrders = async () => {

    const querySnapshot = await getDocs( collection( db, "orders" ) )
    const orders = []
    let order = {}

    querySnapshot.forEach( ( doc ) => {
        order = doc.data()
        order.id = doc.id
        orders.push( order )
    } )

    return orders
}
