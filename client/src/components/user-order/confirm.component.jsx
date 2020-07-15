import React,{ useEffect } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors.js';
import CustomButton from '../../components/custom-button/custom-button.component';
import OrderItems from '../user-order/order-items.component';
// import CheckoutItem from '../../components/checkout-item/checkout-item.component';
// import Validation from './validation.component';
import './confirm.styles.scss';


const Confirm = ({cartItems, total, nextStep, prevStep, values}) => {
        useEffect(() => {
            window.scrollTo(0, 0)
        }, [])

        const handleSubmit = event => {
            event.preventDefault()
    
            const {firstName, lastName, address, city, phone, email, text} = values

            const rng = Math.floor(Math.random() * 10000000 + 1)

            // const itemImage = cartItems.map((cartItem) => {
            //         return cartItem.imageUrl;
            // })
            // const itemName = cartItems.map((cartItem) => {
            //     return cartItem.name;
            // })
            // const itemQuantity = cartItems.map((cartItem) => {
            //     return cartItem.quantity;
            // })
            // const itemPrice = cartItems.map((cartItem) => {
            //     return cartItem.price;
            // })
            
            const order = {
                firstName,
                lastName,
                address,
                city,
                phone,
                email,
                text,
                rng,
                // itemImage,
                // itemName,
                // itemQuantity,
                // itemPrice,
                cartItems,
                total
            }
    
            axios.post('/order/order', order)
            .then(()=>{
                console.log('Success! Data has been sent.')
            })
            .catch(()=>{
                console.log('Failure! Data has NOT been sent.')
            })
    
        }

    return (
    <div className='ordr'>   
        <div className='personal-data'>
            <h2>Podaci za dostavu</h2>
            <h4 style={{ borderBottom: '1px solid grey', display: 'inline'}}>Ime i prezime</h4>
            <p>{values.firstName} {values.lastName}</p>
            <h4 style={{ borderBottom: '1px solid grey', display: 'inline'}}>Adresa</h4>
            <p>{values.address}</p>
            <h4 style={{ borderBottom: '1px solid grey', display: 'inline'}}>Grad</h4>
            <p>{values.city}</p>
            <h4 style={{ borderBottom: '1px solid grey', display: 'inline'}}>Telefon</h4>
            <p>{values.phone}</p>
            <h4 style={{ borderBottom: '1px solid grey', display: 'inline'}}>Email</h4>
            <p>{values.email}</p>
            <h4 style={{ borderBottom: '1px solid grey', display: 'inline'}}>Dodatna napomena</h4>
            <textarea rows='7' cols='30' defaultValue={values.text}></textarea>
        </div>
        
        <div className='order'>
            <h2>Artikli za naručivanje</h2>
            {
                cartItems.map(cartItem => (
                    <OrderItems key={cartItem.id} cartItem={cartItem} />
                ))
            }
            <h2>Ukupno: {total} din</h2>
        </div>
        
        <div className='nav-button'>
            <CustomButton onClick={prevStep}>
                Nazad
            </CustomButton>
            <CustomButton id="forward" onClick={(e) =>{
                handleSubmit(e)
                nextStep()
            }}>
                Pošalji narudžbinu
            </CustomButton>
        </div>   
    </div> 
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Confirm);