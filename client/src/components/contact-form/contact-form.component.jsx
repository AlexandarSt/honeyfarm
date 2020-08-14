import React, {useEffect, useState} from 'react';
import axios from 'axios';

import './contact-form.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {validateAuthContact} from './validate-auth-contact.util';
import { resolveContent } from 'nodemailer/lib/shared';


const INITIAL_STATE = {
    firstlastName: '',
    email: '',
    text: ''
}

const ContactForm = () => {

    const [values, setValues] = useState(INITIAL_STATE)
    const [errors, setErrors] = useState({})
    const [isSubmitting, setSubmitting] = useState(false)

    useEffect(() => {
        if(isSubmitting){
            const noErrors = Object.keys(errors).length === 0
            if(noErrors){
                setSubmitting(false)
                const {firstlastName, email, text} = values
                const data = {
                    firstlastName,
                    email,
                    text
                }
                axios.post('/contact/mail', data)
                .then(()=>{
                    console.log('Success! Data has been sent.')
                })
                .catch(()=>{
                    console.log('Failure! Data has NOT been sent.')
                })
                setValues(INITIAL_STATE)
            } else {
                setSubmitting(false)
            }
        }
    }, [errors])

    const handleSubmit = event => {
        event.preventDefault()

        const validationErrors = validateAuthContact(values)
        setErrors(validationErrors)
        setSubmitting(true)
            
    }

    const handleChange = event => {
        const {value, name} = event.target

        setValues({
            ...values,    
            [name]: value
         })
    }

    // const handleChange = event => {
    //     const {value, name} = event.target

    //     setValues({ [name]: value })
    // }

        return (
        
            <div>
            <h2>Kontaktirajte nas</h2>
            <span>Posaljite nam vaše sugestije i utiske</span>


            <form onSubmit={handleSubmit}>
                <FormInput 
                    name='firstlastName' 
                    value={values.firstlastName} 
                    handleChange={handleChange}
                    label='Ime i Prezime'
                />
                {errors.firstlastName && <p className='form-error'>{errors.firstlastName}</p>}      
                
                <FormInput 
                    name='email' 
                    value={values.email}
                    handleChange={handleChange}
                    label='Email' 
                /> 
                {errors.email && <p className='form-error'>{errors.email}</p>}

                <textarea 
                    name='text' 
                    value={values.text} 
                    onChange={handleChange}
                    rows="10" 
                    cols="75"
                    maxLength="500"
                >
                </textarea>
                {errors.text && <p className='form-error'>{errors.text}</p>}
    
                <CustomButton disabled={isSubmitting} type='submit'>
                    Pošalji
                </CustomButton>
            </form>
            </div>
        )
    }

export default ContactForm;