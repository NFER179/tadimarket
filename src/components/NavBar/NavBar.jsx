import styled from "styled-components"
import CartWidget from "../CartWidget/CartWidget"
import { useState, useEffect } from "react"
import { getMenuItems } from "../../functions"
import { Link } from "react-router-dom"
import logo from '../../assets/logo-512x256_trans.png'
import { TbZoomMoney } from "react-icons/tb"

function NavBar({ amount }) {

    const [categorias, setCategorias] = useState([])

    useEffect( () => {

        function makeMenu() {
            getMenuItems()
                .then( menuItems => {
                    setCategorias( menuItems )
                } )
                .catch( e => {
                    console.error( e )
                } )
                .finally( () => {
                    // TODO: finally function.
                } )
        }

        makeMenu()

    }, [])

    return (
        <DivNavBar>
            <DivNavBarMainBar>
                <DivLogo>
                    <Link to={'/'} >
                        <img src={logo} alt="cat-pack" height={70} width={140} />
                    </Link>
                </DivLogo>
                {(categorias) ? (<UlNavBarLink>
                    {categorias.map((categoria) => (
                        <LiNavBar key={categoria}>
                            <LinkMenuItem to={`/category/${categoria}`}>{categoria}</LinkMenuItem>
                        </LiNavBar>
                    ))}
                </UlNavBarLink>
                ) : (<></>)}
                <DivBills >
                    <Link to={"/orders"}>
                        <TbZoomMoney size={24} color="black" />
                    </Link>
                </DivBills>
                <DivPurchaseInformation>
                    <CartWidget itemsQuantity={amount} />
                </DivPurchaseInformation>
            </DivNavBarMainBar>
        </DivNavBar>
    )

}

const DivNavBar = styled.div`
    background-color: rgba(210, 210, 210, 0.9);
    width: 100%;
    padding-top: 10px;
    padding-bottom: 5px;
    margin: 0px auto;
`

const H1Header = styled.h1`
    margin: 5px auto;
`

const DivNavBarMainBar = styled.div`
    /* Grid */
    display: grid;
    grid-template-columns: repeat( 12, 1fr );
`

const DivLogo = styled.div`
    margin-left: 5px;
    margin-right: auto;

    /* Grid */
    grid-column: 1 / 3;
`

const UlNavBarLink = styled.ul`
    margin: auto;
    padding: 0;

    /* Grid */
    grid-column: 3 / 11;
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

const DivBills = styled.div`
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: 20px;

    /* Grid */
    grid-column: 11 / 12;
`

const DivPurchaseInformation = styled.div`
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: 20px;

    /* Grid */
    grid-column: 12 / 13;
`

export default NavBar