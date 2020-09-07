import React from 'react';
import {ReactComponent as Logo} from '../../assets/honeylogo.svg'
import GoogleMaps from '../../components/google-maps/google-maps.component'; 

import './contact.styles.scss';

import ContactForm from '../../components/contact-form/contact-form.component';

const Contact = () => (
    <div className='contact'>
        <div className='contact-form'>
            <ContactForm />
        </div>    
        <div className='google-maps'>
            <GoogleMaps isMarkerShown />
            <div className='info'>    
                <span><Logo /></span>
                <h4>+381 63 1234567</h4>
                <h4>35213 Despotovac, Srbija</h4>
                <h4><a href='mailto:office@honeyfarm.com' target='_blank'>office@honeyfarm.com</a></h4>    
            </div>
        </div>
        
    </div>
)

export default Contact;