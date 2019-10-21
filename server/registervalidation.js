import joi from 'joi';
const register = {
 validate(addentry) {
     const newentry= {
        Names: joi.string().required().trim(),
        Email: joi.string().required().trim(),
        UserName: joi.string().required().trim(),
        Password: joi.string().required().trim(),
        ConfirmPassword: joi.string().required().trim(),
     };
     return joi.validate(addentry, newentry);
 },
};
export default register;