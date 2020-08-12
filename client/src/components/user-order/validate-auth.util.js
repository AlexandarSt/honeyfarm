export const validateAuth = (values) => {
        const errors = {};
        if (!values.firstName) {
          errors.firstName = 'Unesite vaše ime';
        } else if (/[.;,<>$&!~`^*:"}{\][|\\?%0-9]/.test(values.firstName)) {
          errors.firstName = 'Unesite ispravno vaše ime';
        } else if (!values.lastName) {
          errors.lastName = 'Unesite vaše prezime';
        } else if (/[.;,<>$&!~`^*:"}{\][|\\?%0-9]/.test(values.lastName)) {
          errors.lastName = 'Unesite ispravno vaše prezime';
        } else if (!values.address) {
          errors.address = 'Unesite vašu adresu';
        } else if (/[;<>$!~`^*:}{\][|\\?%]/.test(values.address)) {
          errors.address = 'Unesite ispravnu adresu';
        } else if (!values.city) {
          errors.city = 'Unesite vaš grad';
        } else if (/[.;,<>$&!~`^*:"}{\][|\\?%0-9]/.test(values.city)) {
          errors.city = 'Unesite ispravno ime grada';
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

    