import { Link } from "react-router-dom"
import styled from "styled-components"

// TODO: Not only for cards.
// function Item( {id, nombreproducto, precio, descr, stock, category, img_url} ) {
function Item( {card} ) {

    return (
        <DivItemCard>
            <ImgItemCard src={card.card_images[0].image_url_cropped} alt={card.name} />
            <p>{card.name}</p>
            <p>{card.type}</p>
            <p>{card.id}</p>
            <Link as={Link} to={`/product/${card.id}`} >
                <button>More Information</button>
            </Link>
        </DivItemCard>
    )
}

const width = 250

const DivItemCard = styled.div`
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
`

const ImgItemCard = styled.img`
    width: ${width}px;
    height: ${width}px;
    border-radius: 30px 30px 0px 0px;
`

export default Item