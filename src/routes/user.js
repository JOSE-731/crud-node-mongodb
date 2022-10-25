import express from 'express';
/* Importing the userSchema from the user.js file. */
import  userSchema from '../models/user.js';
/* Importing the functions from the users.controller.js file. */
import {getUsers, createUser, editUser, deleteUser, getUser} from '../controllers/users.controller.js'

/* Creating a new router object. */
const router = express.Router();

/* Creating a new route for the user. */
router.get('/users', getUsers);
router.post('/user', createUser);
router.put('/user/:id', editUser);
router.get('/user/:id', getUser);
router.delete('/user/:id', deleteUser);

export default router;