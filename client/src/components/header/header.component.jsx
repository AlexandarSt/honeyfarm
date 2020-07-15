import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../assets/honeylogo.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss'

const Header = ({hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
        <Link className='option' to='/shop'>
            PRODAVNICA
        </Link>
        <Link className='option' to='/contact'>
            KONTAKT
        </Link>
        <CartIcon />
        </div>
        {
            hidden ? null :
            <CartDropdown />
        }
        
    </div>
)

const mapStateToProps = ({cart: {hidden}}) => ({
    // currentUser: state.user.currentUser
    hidden
})

export default connect(mapStateToProps)(Header);