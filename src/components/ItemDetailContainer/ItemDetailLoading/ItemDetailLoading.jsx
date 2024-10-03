import styled from "styled-components"

function ItemDetailLoading() {

    return (
        <DivLoadingContainer>
            <h1>Cargando...</h1>
            <p>Por favor, espere un momento.</p>
            <LoadingPlaceholder $hght="200px" />
            <LoadingPlaceholder $hght="20px" />
            <LoadingPlaceholder $hght="20px" />
            <LoadingPlaceholder $hght="20px" />
            <LoadingPlaceholder $hght="50px" />
            <DivQuantityContainer>
                <LoadingPlaceholder $hght="30px" />
            </DivQuantityContainer>
        </DivLoadingContainer>
    )
}

const DivLoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
`

const LoadingPlaceholder = styled.div`
    height: { props => props.$hght || '20px'};
    background-color: #e0e0e0;
    border-radius: 5px;
    margin-bottom: 8px;
`

const DivQuantityContainer = styled.div`
    margin-top: 12px;
`


export default ItemDetailLoading