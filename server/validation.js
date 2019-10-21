import joi from 'joi';
const entryvalidation = {
 validate(addentry) {
     const newentry= {
     entry_Title: joi.string().required().trim(),
     entry_Content: joi.string().required().trim(),
     entry_post: joi.string().required().trim(),
     entry_view: joi.string().required().trim()
     };
     return joi.validate(addentry, newentry);
 },
};
export default entryvalidation;

