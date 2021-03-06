import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
// import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Proizvod</span>
            </div>
            <div className='header-block'>
                <span>Opis</span>
            </div>
            <div className='header-block'>
                <span>Količina</span>
            </div>
            <div className='header-block'>
                <span>Cena</span>
            </div>
            <div className='header-block'>
                <span>Ukloni</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }

        <div className='total'>
            <span>UKUPNO: {total} din</span>
        </div>
        { total ? 
        <Link to='/order'>
        <CustomButton>
            Naruči
        </CustomButton> 
        </Link>
        : 
        ''
        }
        
        {/*<div className='test-warning'>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 05/20 - CVV: 123
    </div>*/}
        {/*<StripeCheckoutButton price={total} />*/}
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);