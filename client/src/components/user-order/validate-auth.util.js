export const validateAuth = (values) => {
        const errors = {};
        if (!values.firstName) {
          errors.firstName = 'Unesite vaše ime';
        } else if (!/^[a-zA-Z]+$/.test(values.firstName)) {
          errors.firstName = 'Možete uneti samo slova';
        } else if (!values.lastName) {
          errors.lastName = 'Unesite vaše prezime';
        } else if (!/^[a-zA-Z]+$/.test(values.lastName)) {
          errors.lastName = 'Možete uneti samo slova';
        } else if (!values.address) {
          errors.address = 'Unesite vašu adresu';
        } else if (!values.city) {
          errors.city = 'Unesite vaš grad';
        } else if (!values.phone) {
          errors.phone = 'Unesite vaš kontakt telefon';
        } else if (!/^[0-9\b]+$/.test(values.phone)) {
          errors.phone = 'Unesite samo cifre broja bez razmaka';
        } else if (!values.email) {
            errors.email = 'Unesite e-mail adresu';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Pogrešna e-mail adresa';
          } 

        return errors;
      
    }