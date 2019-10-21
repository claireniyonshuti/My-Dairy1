import validation from '../registervalidation';
import validatesignin from '../loginvalidation';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { pool } from '../config/connect';

const register = async (req, res) => {
   const { error } = validation.validate(req.body);
   if (error) {
       return res.status(400).json({ status: 400, error: error.details[0].message });
   }
   const etaken = req.body.Email;
   const findemail = 'SELECT * FROM DairyUsers WHERE email= $1';
   const user = await pool.query(findemail, [etaken]);
   if (user.rows[0]) {
       return res.status(400).send({
           status: 400,
           message: 'Email exist',
       });
   }
   const hash = bcrypt.hashSync(req.body.Password.trim(), 10);
   const hashpc = bcrypt.hashSync(req.body.ConfirmPassword.trim(), 10);

   let newItem = {
       Names: req.body.Names,
       Email: req.body.Email,
       UserName: req.body.UserName,
       Password: hash,
       ConfirmPassword: hashpc
   };
   const query = 'INSERT INTO DairyUsers(names,email,username,new_password,confirm_password) VALUES($1,$2,$3,$4,$5) RETURNING *';
   const values = [newItem.Names, newItem.Email, newItem.UserName, newItem.Password, newItem.ConfirmPassword];
   const result = await pool.query(query, values);
   const { user_id, Names, Email, UserName } = result.rows[0];
   const payload = { user_id, Names, Email, UserName }
   const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1year' });
   return res.status(201).send({
       status: 201,
       message: 'User Registered',
       token,
       data: result.rows[0],
   });
};




const login = async(req, res) => {
   const { error } = validatesignin.validate(req.body);
   if (error) {
       return res.status(400).json({ status: 400, error: error.details[0].message });
   }
   const etaken = req.body.Email;
   const findemail = 'SELECT * FROM signup WHERE Email= $1';
   const {
       rows
   } = await pool.query(findemail, [etaken]);
   if (!rows[0]) {
       return res.status(400).send({
           status: 400,
           message: 'incorrect email or password',
       });
   }
   const password = bcrypt.compareSync(req.body.Password.trim(), rows[0].password);
   if (!password) {
       return res.status(400).send({
           status: 400,
           message: 'Wrong email or password',
       });
   }
   const { user_id, Names, Email, UserName } = result.rows[0];
   const payload = { user_id, Names, Email, UserName }
   const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1year' });
   return res.status(200).send({
       status: 200,
       message: 'Login Successfully ',
       token,
       data: rows[0],
   });
}
export { register, login};