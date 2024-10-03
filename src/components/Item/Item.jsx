import { Link } from "react-router-dom"
import styled from "styled-components"

function Item( { item } ) {

    return (
        <DivItemCard >
            <DivCardImage>
                <ImgItemCard src={item.image} alt={item.name} />
            </DivCardImage>
            <DivCardinfo>
                <SpanTextTitle>{ item.name }</SpanTextTitle>
                <SpanTextCategory><b>Category:</b> { item.category }</SpanTextCategory>
                <SpanTextBody>{ item.description }</SpanTextBody>
            </DivCardinfo>
            <Link to={`/product/${item.id}`} >
                <ButtonShowItem>More Information</ButtonShowItem>
            </Link>
        </DivItemCard>
    )
}

const width = '220'

export const DivItemCard = styled.div`
    width: ${width}px;
    height: ${width * 2}px;
    border-radius: 30px;
    background: #e0e0e0;
    box-shadow: 15px 15px 30px #bebebe,
        -5px -5px 30px #ffffff;
    transition: transform 0.5s;
    &:hover {
        transform: scale(1.05)
    }
    border: 1px solid #ccc;
    padding: 15px;
`

const DivCardImage = styled.div`
  position: relative;
`

const ImgItemCard = styled.img`
    width: ${width}px;
    height: ${width}px;
    border-radius: 30px;
`

const DivCardinfo = styled.div`
    text-align: left;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
`

const SpanTextTitle = styled.span`
    font-weight: bold;
    font-size: 1.2rem;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 10px;
    height: 25px;               /* Height of the container */
    overflow: hidden;           /* Hide overflow */
    display: -webkit-box;       /* Use flexbox with line clamping */
    -webkit-box-orient: vertical; /* Orient the container vertically */
    -webkit-line-clamp: 1;      /* Number of lines to show */
    text-overflow: ellipsis;    /* Add "..." at the end */
`

const SpanTextCategory = styled.span`
    font-size: 14px;
`

const SpanTextBody = styled.span`
    font-size: 14px;
    height: 60px;               /* Altura del contenedor */
    overflow: hidden;           /* Ocultar el desbordamiento */
    display: -webkit-box;       /* Usar flexbox con limitación de líneas */
    -webkit-box-orient: vertical; /* Orientar el contenedor verticalmente */
    -webkit-line-clamp: 3;      /* Número de líneas a mostrar */
    text-overflow: ellipsis;    /* Agregar "..." al final */
    padding: 5px; `

const ButtonShowItem = styled.button`
    margin-top: 20px;
    background-image: linear-gradient(-180deg, #37AEE2 0%, #1E96C8 100%);
    color: #FFFFFF;
    font-size: 16px;
    &:hover {
        background-image: linear-gradient(-180deg, #1D95C9 0%, #17759C 100%);
    }
`

export default Item