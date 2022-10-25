import userSchema from '../models/user.js';

/**
 * It gets all the users from the database and sends them to the client.
 * @param req - request
 * @param res - The response object.
 */
export const getUsers = async (req, res) => {
    const users = await userSchema.find();
    res.send(users)
}

export const getUser = async (req, res) =>{
    const {id} = req.params;
    const user = await  userSchema.findById(id);
    res.send(user);
}

/**
 * It takes the request body, creates a new user with the userSchema, saves the user, and sends the
 * user back to the client.
 * @param req - request
 * @param res - The response object.
 */
export const createUser = async (req, res) => {
    const user = userSchema(req.body);
    user.save()
    res.send(user)
}

/**
 * It takes the id from the url, and the age, email, and name from the body, and updates the user with
 * the matching id with the new age, email, and name.
 * @param req - request
 * @param res - {
 */
export const editUser = async (req, res) => {
    const { id } = req.params;
    const { age, email, name } = req.body;

    const editUser = await userSchema.updateOne({ _id: id }, { $set: { age, email, name } });
    res.send(editUser)
}

/**
 * It deletes a user from the database by id
 * @param req - request
 * @param res - The response object.
 */
export const deleteUser = async (req, res) =>{
    const {id} = req.params;
    const deleteUser = await  userSchema.remove({_id:id});
    res.send(deleteUser)
}