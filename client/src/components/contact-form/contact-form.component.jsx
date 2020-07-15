import React from 'react';

import './contact-form.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import axios from 'axios';

class ContactForm extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            text: '',
            error: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        const {name, email, text} = this.state

        const data = {
            name,
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

        this.setState({
            name: '',
            email: '',
            text: ''
        })

    }

    handleChange = event => {
        const {value, name} = event.target

        this.setState({ [name]: value })
    }

    render() {
        return(
            <div>
            <h2>Kontaktirajte nas</h2>
            <span>Posaljite nam vaše sugestije i utiske</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput 
                    name='name' 
                    value={this.state.name} 
                    handleChange={this.handleChange}
                    label='Ime i Prezime'
                    required />
                
                <FormInput 
                    name='email' 
                    type='email' 
                    value={this.state.email}
                    handleChange={this.handleChange}
                    label='Email' 
                    required />
                
                <textarea 
                    name='text' 
                    value={this.state.text} 
                    onChange={this.handleChange}
                    rows="10" 
                    cols="75"
                    maxLength="500"
                    required>
                </textarea>
                <CustomButton type='submit'>
                    Pošalji
                </CustomButton>
            </form>
            </div>
        )
    }
}

export default ContactForm;