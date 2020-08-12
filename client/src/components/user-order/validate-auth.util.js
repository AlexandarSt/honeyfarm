export const validateAuth = (values) => {
        const errors = {};
        if (!values.firstName) {
          errors.firstName = 'Unesite vaše ime';
        } else if (!/^([a-zA-ZĆ-ćČ-čĐ-đŠ-šŽ-žЉ-љЊ-њР-рЗ-зУ-уИ-иП-пШ-шЂ-ђЖ-жС-сД-дФ-фГ-гХ-хЛ-лЧ-чЋ-ћЏ-џЦ-цВ-вБ-бН-н]+\s)*[a-zA-ZĆ-ćČ-čĐ-đŠ-šŽ-žЉ-љЊ-њР-рЗ-зУ-уИ-иП-пШ-шЂ-ђЖ-жС-сД-дФ-фГ-гХ-хЛ-лЧ-чЋ-ћЏ-џЦ-цВ-вБ-бН-н]+$/.test(values.firstName)) {
          errors.firstName = 'Unesite ispravno vaše ime';
        } else if (!values.lastName) {
          errors.lastName = 'Unesite vaše prezime';
        } else if (!/^([a-zA-ZĆ-ćČ-čĐ-đŠ-šŽ-žЉ-љЊ-њР-рЗ-зУ-уИ-иП-пШ-шЂ-ђЖ-жС-сД-дФ-фГ-гХ-хЛ-лЧ-чЋ-ћЏ-џЦ-цВ-вБ-бН-н]+\s)*[a-zA-ZĆ-ćČ-čĐ-đŠ-šŽ-žЉ-љЊ-њР-рЗ-зУ-уИ-иП-пШ-шЂ-ђЖ-жС-сД-дФ-фГ-гХ-хЛ-лЧ-чЋ-ћЏ-џЦ-цВ-вБ-бН-н]+$/.test(values.lastName)) {
          errors.lastName = 'Unesite ispravno vaše prezime';
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

    // /^[a-zA-Z\p{Cyrillic}\d\s\-]+$/u

    // Ć-ćČ-čĐ-đŠ-šŽ-ž