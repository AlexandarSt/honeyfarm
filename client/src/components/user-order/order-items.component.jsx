import React from 'react';

import './order-items.styles.scss';

const OrderItems = ({cartItem}) => {
const {name, price, quantity, imageUrl} = cartItem

    return(
    <div>
        <div className='order-items'>
            <img src={imageUrl} alt='item' />
            <span className='name'>{name} x {quantity}</span>
            <span className='price'>{price} din.</span>
        </div>
        
    </div>
    )
}

export default OrderItems;