import styled from "styled-components"
import Item from "../Item/Item"

function ItemList( {cards} ) {

    const cardsToShow = cards.slice( 0, 18 )

    return (
        <DivItemListCardDashBoard>
            {
              cardsToShow.map(card => (
                <Item  key={card.id} {...{card}} />
               ) )  
            }
        </DivItemListCardDashBoard>
    )
}

const DivItemListCardDashBoard = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 10px; /* Space between grid items */
    padding: 10px; /* Padding around the container */
`

export default ItemList