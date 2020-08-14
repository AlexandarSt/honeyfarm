export const validateAuthContact = (values) => {
        const errors = {};
        if (!values.firstlastName) {
          errors.firstlastName = 'Unesite vaše ime';
        } else if (/[.;,<>$&!~`^*:"}{\][|\\?%0-9]/.test(values.firstlastName)) {
          errors.firstlastName = 'Unesite ispravno vaše ime';
        } else if (!values.email) {
          errors.email = 'Unesite e-mail adresu';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Pogrešna e-mail adresa';
        } else if (!values.text) {
          errors.text = 'Upišite poruku';
        }

        return errors;
      
    }

    