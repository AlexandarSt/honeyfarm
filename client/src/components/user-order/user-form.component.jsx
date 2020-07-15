import React, { useState } from 'react';

import UserDetails from './user-details.component';
import Confirm from './confirm.component';
import Success from './success.component';
import Validation from './validation.component';
import {validateAuth} from './validate-auth.util';

const INITIAL_STATE = {
    step: 1,
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    phone: '',
    email: '',
    text: ''
}

const UserForm = () => {

    const [state, setState] = useState(INITIAL_STATE) 

    const nextStep = () => {
        const {step} = state
        setState({
            step: step + 1
        })
    }

    const prevStep = () => {
        const {step} = state
        setState({
            step: step - 1
        })
    }

    const {
        handleChange,
        handleSubmit,
        values,
        errors,
        isSubmitting
    } = Validation(INITIAL_STATE, validateAuth, nextStep)
        
    const { step } = state 
        
        switch(step) {
            case 1:
                return (
                   <UserDetails 
                        nextStep={nextStep}
                        isSubmitting = {isSubmitting}
                        values = {values}
                        errors = {errors}
                        handleChange = {handleChange}
                        handleSubmit = {handleSubmit}
                    /> 
                );
            case 2:
                return (
                    <Confirm
                        values={values}
                        nextStep={nextStep}
                        prevStep={prevStep}
                    />
                );
            case 3:
                return (
                    <Success />
                );
            default:
                return ;    
               
        }
    }

export default UserForm;