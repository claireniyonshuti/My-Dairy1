import joi from 'joi';
const entryvalidation = {
 validate(addentry) {
     const newentry= {
         title: joi.string().required().trim(),
     description: joi.string().required().trim(),
     };
     return joi.validate(addentry, newentry);
 },
};
export default entryvalidation;

