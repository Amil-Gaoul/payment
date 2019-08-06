const requiredMessage: string = 'Required field';

export const ErrorMessages: object = {
    cardHolderName: {
        required: requiredMessage,
        pattern: 'Only characters'
    },
    cardNumber: {
        required: requiredMessage,
        invalidCardNumber: 'Wrong card number',
        pattern: 'Only numbers'
    },
    month: {
        required: requiredMessage,
        pattern: 'Only numbers',
        invalidMonth: 'Wrong month',
        monthLessThan: 'Month can\'t be less than'
    },
    year: {
        required: requiredMessage,
        pattern: 'Only numbers',
        yearLessThan: 'Year can\'t be less than'
    },
    cvv: {
        required: requiredMessage,
        pattern: 'Only numbers',
        minlength: 'CVV must be three characters'
    }
};
