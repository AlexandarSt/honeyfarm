export const validateAuth = (values) => {
        const errors = {};
        if (!values.firstName) {
            errors.firstName = 'Unesite vaše ime';
        } else if (!values.lastName) {
          errors.lastName = 'Unesite vaše prezime';
        } else if (!values.address) {
          errors.address = 'Unesite vašu adresu';
        } else if (!values.city) {
          errors.city = 'Unesite vaš grad';
        } else if (!values.phone) {
          errors.phone = 'Unesite vaš kontakt telefon';
        } else if (!values.email) {
            errors.email = 'Unesite e-mail adresu';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Pogrešna e-mail adresa';
          } 

        return errors;
      
    }