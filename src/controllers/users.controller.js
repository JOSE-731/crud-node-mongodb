/* Importing the userSchema from the user.js file in the models folder. */
import userSchema from '../models/user.js';

/**
 * It gets all the users from the database and sends them to the client.
 * @param req - request
 * @param res - The response object.
 */
export const getUsers = async (req, res) => {
    const [users] = await userSchema.find();
    try {
        res.json(users)
    } catch (error) {
        return res.status(500).json({
            message: "Error en la solicitud"
        })
    }
}

/**
 * It takes the id from the request params, finds the user by id, and sends the user back to the
 * client.
 * @param req - The request object. This object represents the HTTP request and has properties for the
 * request query string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
export const getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userSchema.findById(id);
        res.json(user);
    } catch (error) {
        return res.status(500).json({
            message: "Error en la solicitud"
        })
    }
}

/**
 * It takes the request body, creates a new user with the userSchema, saves the user, and sends the
 * user back to the client.
 * @param req - request
 * @param res - The response object.
 */
export const createUser = async (req, res) => {
    const user = userSchema(req.body);
    try {
        user.save()
        res.send(user)
    } catch (error) {
        return res.status(500).json({
            message: "Error en la solicitud de creacion del usuario"
        })
    }
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
    try {

        const editUser = await userSchema.updateOne({ _id: id }, { $set: { age, email, name } });
        res.send(editUser)
    } catch (error) {
        return res.status(500).json({
            message: "Error en la edicion del usuario"
        })
    }
}

/**
 * It deletes a user from the database by id
 * @param req - request
 * @param res - The response object.
 */
export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteUser = await userSchema.remove({ _id: id });
        res.send(deleteUser)
    } catch (error) {
        return res.status(500).json({
            message: "Error al eliminar el usuario"
        })
    }
}