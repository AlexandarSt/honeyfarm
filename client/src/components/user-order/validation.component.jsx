// import React from 'react';
import { useEffect, useState } from 'react';


const Validation = (initialstate, validate, nextStep) => {
    const [values, setValues] = useState(initialstate)
    const [errors, setErrors] = useState({})
    const [isSubmitting, setSubmitting] = useState(false)

    useEffect(() => {
        if(isSubmitting){
            const noErrors = Object.keys(errors).length === 0
            if(noErrors){
                // console.log('autentifikovan!', values.email, values.firstName)
                nextStep()
                setSubmitting(false)
            } else {
                setSubmitting(false)
            }
        }
    }, [errors])
    
    const handleChange = event => {
        const {value, name} = event.target

        setValues({
            ...values,    
            [name]: value
         })
    }

    const handleSubmit = event => {
        event.preventDefault()
        const validationErrors = validate(values)
        setErrors(validationErrors)
        setSubmitting(true)
    }
    
    return {handleChange, handleSubmit, values, errors, isSubmitting}
}

export default Validation;