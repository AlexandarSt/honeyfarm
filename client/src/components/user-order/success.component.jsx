import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearCartAll} from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';

import './success.styles.scss'

const Success = ({clearCartAll}) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
    <div className='success'>
        <h1>Uspešno ste naručili!</h1>
        <br/>
        <img src="../../assets/success.png" alt="Success" />
        <br/>
        <h4>Vaša narudžbina je uspešno kreirana. Paket će Vam biti poslat u najkracem roku.</h4>
        <h4>Hvala na poverenju!</h4>
        <br />
        <Link to='/'>
        <CustomButton onClick={() => {
            clearCartAll()
        }}>
            Vrati se na početnu
        </CustomButton>
        </Link>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearCartAll: () => dispatch(clearCartAll())
})

export default connect(null, mapDispatchToProps)(Success);