import { serverTimestamp } from "firebase/firestore"
import styled from "styled-components"
import { useCartContext } from "../../../../context/CartContext"
import { createOrder } from "../../../../firebase/db"
import { useState } from "react"
import Modal from 'react-modal'
import { Link } from "react-router-dom"

function CheckoutForm() {

    const [isModelOpen, setIsModalOpen] = useState( false )
    const [ orderId, setOrderId ] = useState( "" )

    const { cart, getTotal, cleanCart } = useCartContext()

    const handleSubmit = async ( e ) => {
        e.preventDefault()

        const firstName = e.target.firstname.value
        const lastName = e.target.lastname.value
        const phone = e.target.phone.value
        const email = e.target.email.value

        const order = {
            buyer: { firstName, lastName, phone, email },
            items: cart,
            date: serverTimestamp(),
            total: getTotal()
        }

        const orderCreated = await createOrder( order )
        if ( orderCreated.successCommit ) {
            // console.log( `Order Created: ${orderCreated.id}` )
            setOrderId( orderCreated.id )
            cleanCart()
        } else {
            console.error( "error" )
        }

        setIsModalOpen( true )
    }

    const closeModal = () => {
        setIsModalOpen( false )
    }

    const showOrderSummary = () => {
        closeModal()
    }

    return (
        <DivCheckoutForm>
            <h3>Datos para la compra:</h3>
            <DivFormContainer>
                <form onSubmit={handleSubmit}>
                    <DivFormGroup>
                        <LabelForm>Nombre:</LabelForm>
                        <InputForm type="text" id="firstname" name="firstname" required />
                    </DivFormGroup>
                    <DivFormGroup>
                        <LabelForm>Apellido:</LabelForm>
                        <InputForm type="text" id="lastname" name="lastname" required />
                    </DivFormGroup>
                    <DivFormGroup>
                        <LabelForm>Teléfono:</LabelForm>
                        <InputForm type="tel" id="phone" name="phone" required />
                    </DivFormGroup>
                    <DivFormGroup>
                        <LabelForm>Correo Electrónico:</LabelForm>
                        <InputForm type="email" id="email" name="email" required />
                        <span style={{ color: "gray" }}>Nunca compartiremos tu email.</span>
                    </DivFormGroup>
                    <ButtonForm type="submit">Enviar</ButtonForm>
                    <Modal isOpen={isModelOpen} onRequestClose={closeModal}>
                        <h2>Orden creada con exito</h2>
                        <p>Su id de orden es: {orderId}</p>
                        <Link to={`/order/${orderId}`}>
                            <ButtonForm onClick={showOrderSummary}>Cerrar y Ver Orden</ButtonForm>
                        </Link>
                    </Modal>
                </form>
            </DivFormContainer>
        </DivCheckoutForm>

    )
}

const DivCheckoutForm = styled.div`
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    width: 48%; /* Adjust the size of each panel */
`

/* form */
const DivFormContainer = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`

const DivFormGroup = styled.div`
    margin-bottom: 15px;
`

const LabelForm = styled.label`
    display: block;
    margin-bottom: 5px;
`

const InputForm = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box; /* Include padding and border in the total width */
`

const ButtonForm = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    &:hover{
        background-color: #0056b3; /* Darker color on hover */
    }
`

export default CheckoutForm