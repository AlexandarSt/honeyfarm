import React, {useState} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Modal from 'react-modal';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, dispatch}) => {
    const [modalIsOpen, setmodalIsOpen] = useState(false)

    Modal.setAppElement('#root')

    return(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ? 
                cartItems.map(cartItem => 
                    <CartItem key={cartItem.id} item={cartItem}/>
                )
                :
                <span className='empty-message'>Vaša tegla je prazna</span>    
            }
        </div>
        <CustomButton onClick={() =>{
            if (cartItems.length) { 
            history.push('/checkout');
            dispatch(toggleCartHidden());
            } else {
                setmodalIsOpen(true)
                }
            }  
        }>
        NARUČITE
        </CustomButton>
        <Modal 
            isOpen={modalIsOpen} 
            onRequestClose={() => setmodalIsOpen(false)}
            className='Modal'
            overlayClassName='Overlay'
        >
            <h2>Izaberite proizvod koji želite da kupite</h2>
            <CustomButton onClick = {
                () => setmodalIsOpen(false)
            }>
                Zatvori
            </CustomButton>
        </Modal>
    </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));