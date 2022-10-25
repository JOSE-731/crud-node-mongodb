import userSchema from '../models/user.js';

export const getUsers = async (req, res) =>{
    const users = await  userSchema.find();
    res.send(users)
}