import styled from "styled-components"
import CartWidget from "../CartWidget/CartWidget"
import { useState, useEffect } from "react"
import { getMenuItems } from "../../functions"
import { Link } from "react-router-dom"
import logo from '../../assets/logo-512x256_trans.png'

function NavBar( {amount} ) {

    const [categorias, setCategorias] = useState([])

    useEffect( () => {
        setCategorias( getMenuItems() )
    }, [] )

    return (
        <DivNavBar>
            <DivNavBarMainBar>
                <DivLogo>
                    <Link to={'/'} >
                        <img src={logo} alt="cat-pack" height={70} width={140} />
                    </Link>
                </DivLogo>
                <UlNavBarLink>
                    { categorias.map( (categoria) => (
                        <LiNavBar key={categoria}>
                            <LinkMenuItem to={`/category/${categoria}`}>{categoria}</LinkMenuItem>
                        </LiNavBar>
                    ) ) }
                </UlNavBarLink>
                <DivPurchaseInformation>
                    <CartWidget itemsQuantity={ amount } />
                </DivPurchaseInformation>
            </DivNavBarMainBar>
        </DivNavBar>
    )

}

const DivNavBar = styled.div`
    width: 100%;
    padding-top: 5px;
    margin: 10px auto;
`

const H1Header = styled.h1`
    margin: 5px auto;
`

const DivNavBarMainBar = styled.div`
    /* Grid */
    display: grid;
    grid-template-columns: repeat( 6, 1fr );
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

const LinkMenuItem = styled(Link)`
    background-color: gray;
    border-radius: 10px;
    color: white;
    margin: auto 10px;
    padding: 10px;
    &:hover {
        cursor: pointer;
    }
`

const DivPurchaseInformation = styled.div`
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: 10px;
`

export default NavBar