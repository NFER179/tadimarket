import { useParams } from "react-router-dom";
import ItemDetails from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { getYuGiOhCardById } from "../../asyncMock";

export function ItemDetailContainer() {

    const [product, setProduct] = useState( null )
    const [loading, setLoading] = useState( true )

    const { cardId } = useParams()

    useEffect( () => {
        getYuGiOhCardById( cardId )
            .then(data => {
                setProduct(data.data[0])
            })
            .catch(e => {
                console.log(e)
            })
            .finally(
                setLoading(false)
            )
    }, [cardId] )

    if(loading) {
        return (
            <h1>
                Loading
            </h1>
        )
    }

    return (
        <div>
            { product? <ItemDetails {...product} />:<></>}
        </div>
    )
}