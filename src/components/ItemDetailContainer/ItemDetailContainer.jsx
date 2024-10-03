import { useParams } from "react-router-dom";
import ItemDetails from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { getProductById } from "../../firebase/db";
import ItemDetailLoading from "./ItemDetailLoading/ItemDetailLoading";

function ItemDetailContainer() {

    const [item, setItem] = useState( null )
    const [loading, setLoading] = useState( true )

    const { itemId } = useParams()

    useEffect( () => {
        getProductById( itemId )
            .then( data => {
                setItem( data )
            } )
            .catch( e => {
                console.error( e )
            } )
            .finally( () => {
                setLoading( false )
            } )
    }, [itemId] )

    if(loading) {
        return (
            <>
                <ItemDetailLoading />
            </>
        )
    }

    return (
        <div>
            <ItemDetails item={item} />
        </div>
    )
}

export default ItemDetailContainer