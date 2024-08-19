import styled from "styled-components"

function ItemListContainer( props ) {

    return (
        <DivBody>
            <h2>{ props.greeting }</h2>
        </DivBody>
    )
}

const DivBody = styled.div`
`

export default ItemListContainer