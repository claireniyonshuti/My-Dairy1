import joi from 'joi';
const login = {
 validate(addentry) {
     const newentry= {
        Username: joi.string().required().trim(),
        Password: joi.string().required().trim(),
       
     };
     return joi.validate(addentry, newentry);
 },
};
export default login;