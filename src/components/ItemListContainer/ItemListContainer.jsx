import { useEffect, useState } from "react"
import styled from "styled-components"
import { getYuGiOhAllCards, getYuGiOhMonsterCards, getYuGiOhSpellsCards, getYuGiOhTrapCards } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

function ItemListContainer(props) {

    const [cards, setCards] = useState([])
    const [loading, setLoading] = useState(true)

    /* Get params in URL */
    const { typeId } = useParams()

    //Get all cards of YU-GI-OH.
    function getYHOCards() {
        getYuGiOhAllCards()
            .then(data => {
                setCards(data.data)
            })
            .catch(e => {
                console.log(e)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    // Get all monster cards
    function getYHOMonsterCards() {
        getYuGiOhMonsterCards()
            .then(data => {
                setCards(data.data)
            })
            .catch(e => {
                console.log(e)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    // Get all spells cards
    function getYGOSpellCards() {
        getYuGiOhSpellsCards()
            .then( data => {
                setCards( data.data )
            } )
            .catch( e => {
                console.log( 'Error get spell cards' )
                console.log( e )
            } )
            .finally( () => {
                setLoading( false )
            } )
    }

    // Get all trap cards
    function getYGOTrapCards() {
        getYuGiOhTrapCards()
            .then( data => {
                setCards( data.data )
            })
            .catch( e => {
                console.log( 'Error get trap Cards' )
                console.log( e )
            } )
            .finally( () => {
                setLoading( false )
            } )
    }

    useEffect(() => {
        setLoading(true)

        if (typeId) {
            switch (typeId) {
                case 'Monsters':
                    console.log('monsters')
                    getYHOMonsterCards()
                    break
                case 'Spells':
                    console.log( 'Spells' )
                    getYGOSpellCards()
                    break
                case 'Traps':
                    console.log( 'Traps' )
                    getYGOTrapCards()
                    break
                default:
                    console.log( 'default' )
                    setCards([])
                    break
            }
        } else {
            getYHOCards()
        }

    }, [typeId])

    //TODO: Presentasion de cargando componentes.
    if (loading) {
        return (
            <div>
                <h1>
                    Loading
                </h1>
            </div>
        )
    }

    return (
        <DivBody>
            <ItemList {...{ cards }} />
        </DivBody>
    )
}

const DivBody = styled.div`
    background-color: white;
    color: black;
    padding: 10px;
`

export default ItemListContainer