import { useEffect, useState } from "react"
import styled from "styled-components"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProducts } from "../../firebase/db"
import ItemListLoading from "./ItemListLoading/ItemListLoading"

function ItemListContainer() {

    const [loading, setLoading] = useState(false)
    const [items, setItems] = useState([])

    /* Get params from URL */
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        function showProduct() {
            getProducts()
                .then(data => {
                    if (categoryId) {
                        setItems(data.filter(product => product.category === categoryId))
                    } else {
                        setItems(data)
                    }
                })
                .catch(e => {
                    console.error(e)
                })
                .finally(() => {
                    setLoading(false)
                })
        }

        showProduct()
    }, [categoryId])

    if (loading) {
        return (
            <DivContainer>
                <ItemListLoading />
            </DivContainer>
        )
    }

    return (
        <DivContainer>
            <ItemList {...{ items }} />
        </DivContainer>
    )
}

const DivContainer = styled.div`
    background-color: white;
    color: black;
    padding: 10px;
`

export default ItemListContainer