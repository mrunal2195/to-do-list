import express from 'express';
import bcrypt from 'bcrypt';
import userController from '../controller/userController';

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  userController.getallusers().then((users) => {
    res.send(users);
  });
});

userRouter.post('/', (req, res) => {
  userController.createUser(req.body).then(user => res.send(user));
});

userRouter.post('/login', (req, res) => {
  userController.loginUser(req.body).then((newuser) => {
    res.send(newuser);
  }).catch(err => res.send(err.message));
});


export default userRouter;
