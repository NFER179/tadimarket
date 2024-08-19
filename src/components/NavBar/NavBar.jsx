import styled from "styled-components"
import CartWidget from "../CartWidget/CartWidget"

function NavBar( props ) {

    return (
        <DivNavBar>
            <div id="NavBarTitle">
                <H1Header>Ecommerce</H1Header>
            </div>
            <DivNavBarMainBar>
                <DivLogo>
                    <img src="src/assets/logo-512x256_trans.png" alt="cat-pack" height={60} width={120} />
                </DivLogo>
                <UlNavBarLink>
                    <LiNavBar>
                        <AMenuItem>Link 1</AMenuItem>
                    </LiNavBar>
                    <LiNavBar>
                        <AMenuItem>link 2</AMenuItem>
                    </LiNavBar>
                    <LiNavBar>
                        <AMenuItem>link 3</AMenuItem>
                    </LiNavBar>
                    <LiNavBar>
                        <AMenuItem>link 4</AMenuItem>
                    </LiNavBar>
                </UlNavBarLink>
                <DivPurchaseInformation>
                    <CartWidget itemsQuantity={ props.products.length } />
                </DivPurchaseInformation>
            </DivNavBarMainBar>
        </DivNavBar>
    )

}

const DivNavBar = styled.div`
    width: 100%;
    border-bottom: 4px solid yellow;
    border-radius: 0px;
    padding-bottom: 5px;
    margin: auto;
`

const H1Header = styled.h1`
    margin: 5px auto;
`

const DivNavBarMainBar = styled.div`
    /* Grid */
    display: grid;
    grid-template-columns: repeat( 6, 1fr );
    /* grid-gap: 5px; */
    /* grid-auto-rows: minmax( 10px, auto ) */
`

const DivLogo = styled.div`
    margin-left: 5px;
    margin-right: auto;
`

const UlNavBarLink = styled.ul`
    margin: auto;
    padding: 0;

    /* Grid */
    grid-column: 2 / 6;
`

const LiNavBar = styled.li`
    display: inline;
`

const AMenuItem = styled.a`
    background-color: gray;
    border-radius: 10px;
    color: white;
    margin: auto 10px;
    padding: 10px;
`

const DivPurchaseInformation = styled.div`
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: 10px;
`

export default NavBar