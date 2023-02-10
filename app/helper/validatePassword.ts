// Password criteria validation func.
const validatePassword = (pw: string) => {
    // At least one uppercase letter
    // At least one lowercase letter
    // At least one digit
    // At least one special symbol
    // should be more than 8 character
    return /[A-Z]/.test(pw) &&
           /[a-z]/.test(pw) &&
           /[0-9]/.test(pw) &&
           /[^A-Za-z0-9]/.test(pw) &&
           pw.length > 8;

};

export default validatePassword;