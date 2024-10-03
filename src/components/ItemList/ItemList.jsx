import styled from "styled-components"
import Item from "../Item/Item"

function ItemList( {items} ) {

    return (
        <DivItemListCardDashBoard>
            {
              items.map(item => (
                <Item  key={item.id} {...{item}} />
               ) )  
            }
        </DivItemListCardDashBoard>
    )
}

export const DivItemListCardDashBoard = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 10px; /* Space between grid items */
    padding: 10px; /* Padding around the container */
`

export default ItemList