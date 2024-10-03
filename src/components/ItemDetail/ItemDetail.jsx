import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { formatPesosNumberWithDotsAndDecimals } from "../../functions"

function ItemDetail( {item} ) {

    const [quantityAdded, setQuantityAdded] = useState( 0 )

    const handleOnAdd = ( quantity ) => {
        setQuantityAdded( quantity )
    }

    return (
        <DivOuterContainer>
            <H1Title>Detalles del item</H1Title>
            <DivContainer>
                <DivImageContainer>
                    <Image src={item.image} alt={item?.name}/>
                </DivImageContainer>
                <DivDetailsContainer>
                    <h2>{item?.name}</h2>
                    <p>{item?.description}</p>
                    <p><strong>Precio:</strong> {formatPesosNumberWithDotsAndDecimals(item.price)}</p>
                    <p><strong>Cantidad: </strong>{ item.stock } unidades</p>
                    {
                        
                        ( item.stock === 0 ) ?
                            ( <h2>Sin stock</h2> )
                        : (
                            quantityAdded > 0 ? (
                                <Link to='/cart' >
                                    <DivFinishPurchase>
                                        Finalizar Compra
                                    </DivFinishPurchase>
                                </Link>
                            ) : (
                                <ItemCount item={item} stock={item.stock} onAdd={handleOnAdd} />
                            )
                        )
                    }
                </DivDetailsContainer>
            </DivContainer>
        </DivOuterContainer>
    )
}

const DivOuterContainer = styled.div`
    display: 'flex';
    flex-direction: 'column';
    align-items: 'center';
    margin: '16px 0';
`

const H1Title = styled.h1`
    text-align: center;
    margin-bottom: 16px;
`

const DivContainer = styled.div`
    display: flex;
    max-width: 800px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 16px;
    margin: 0 auto;
`

const DivImageContainer = styled.div`
    flex: 1;
    padding-right: 16px;
`

const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 5px;
`

const DivDetailsContainer = styled.div`
    flex: 1;
    text-align: justify;
`

const DivFinishPurchase = styled.button`
background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
`

export default ItemDetail