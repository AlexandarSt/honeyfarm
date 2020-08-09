import React from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
// import Validation from './validation.component';
// import {validateAuth} from './validate-auth.util';

import './user-details.styles.scss'


// const INITIAL_STATE = {
//     firstName: '',
//     lastName: '',
//     address: '',
//     city: '',
//     phone: '',
//     email: ''
// }
const UserDetails = ({values, handleChange, handleSubmit, errors, isSubmitting}) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // const {
    //     handleChange,
    //     handleSubmit,
    //     values,
    //     errors,
    //     isSubmitting
    // } = Validation(INITIAL_STATE, validateAuth, nextStep)

    return (
    <div className='bee'>
        <div className='form'>
            <h1>Podaci za pošiljku</h1>
            <p>Molimo Vas da unesete kontakt podatke i adresu na koju zelite da bude isporuka </p>
            <form onSubmit = {handleSubmit}>
                    <FormInput 
                        name='firstName'
                        value={values.firstName} 
                        handleChange={handleChange}
                        label='Ime'
                    />
                    {errors.firstName && <p className='form-error'>{errors.firstName}</p>}
                    <FormInput 
                        name='lastName' 
                        value={values.lastName} 
                        handleChange={handleChange}
                        label='Prezime'
                    />
                    {errors.lastName && <p className='form-error'>{errors.lastName}</p>}
                    <FormInput 
                        name='address' 
                        value={values.address} 
                        handleChange={handleChange}
                        label='Adresa'
                    />
                    {errors.address && <p className='form-error'>{errors.address}</p>}
                    <FormInput 
                        name='city' 
                        value={values.city} 
                        handleChange={handleChange}
                        label='Grad'
                    />
                    {errors.city && <p className='form-error'>{errors.city}</p>}
                    <FormInput 
                        name='phone' 
                        value={values.phone} 
                        handleChange={handleChange}
                        label='Telefon'
                    />
                    {errors.phone && <p className='form-error'>{errors.phone}</p>}
                    <FormInput 
                        name='email' 
                        // type='email' 
                        value={values.email}
                        handleChange={handleChange}
                        label='Email' 
                    />
                    {errors.email && <p className='form-error'>{errors.email}</p>}
                    <div className='group'>
                    <textarea 
                        name='text' 
                        value={values.text} 
                        onChange={handleChange}
                        rows="7" 
                        cols="40"
                        maxLength="500"
                        placeholder="Dodatna uputstva za isporuku (opciono) "  
                        >       
                    </textarea>
                    </div>
                    <Link to='/checkout'>
                    <CustomButton id='back'>
                        Nazad
                    </CustomButton>
                    </Link>
                    <CustomButton id='forward' disabled={isSubmitting} type='submit' >
                        Nastavi
                    </CustomButton>
                
            </form>
        </div>
    </div>
    )
}
export default UserDetails;