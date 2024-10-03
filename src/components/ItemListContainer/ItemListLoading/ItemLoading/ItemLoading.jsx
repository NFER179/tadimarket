import { styled, keyframes } from "styled-components"
import { DivItemCard } from "../../../Item/Item"

function ItemLoading() {

    return (
        <DivItemCard>
            <DivLoading>
                <DivWrapper>
                    <DivImageLoading />
                    <DivLine $tp='248' $hght='25' />
                    <DivLine $tp='285' $hght='13' />
                    <DivLine $tp='305' $hght='60' />
                    <DivLoadingButton $tp='385' $hght='45' />
                </DivWrapper>
            </DivLoading>
        </DivItemCard>
    )
}

const gradient_animation_2 = keyframes`
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
`;

const DivLoading = styled.div`
    position: relative;
    width: 220px;
    height: 440px;
    margin-bottom: 0px;
    /* border: 1px solid #d3d3d3; */
    border-radius: 30px;
    padding: 0px;
    background-color: #e0e0e0;
    overflow: hidden;
    &:after{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: linear-gradient(110deg, rgba(227, 227, 227, 0) 0%, rgba(227, 227, 227, 0) 40%, rgba(227, 227, 227, 0.5) 50%, rgba(227, 227, 227, 0) 60%, rgba(227, 227, 227, 0) 100%);
        animation: ${gradient_animation_2} 1.2s linear infinite;
    }
`

const DivWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    > div {
        background-color: #cacaca;
    }
`

const DivImageLoading = styled.div`
    width: 220px;
    height: 220px;
    border-radius: 30px;
`

const DivLine = styled.div`
    position: absolute;
    top: ${ props => props.$tp || '10' }px;
    left: 5%;
    height: ${ props => props.$hght || '25' }px;
    width: 90%;
    border-radius: 5px;
`

const DivLoadingButton = styled.div`
    position: absolute;
    top: ${ props => props.$tp || '10' }px;
    left: 20px;
    height: ${ props => props.$hght || '40' }px;
    width: 175px;
    border-radius: 8px;
`

export default ItemLoading