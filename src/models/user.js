/* Importing the mongoose library. */
import mongoose from 'mongoose';

//Schema: En mongo db son estructura JSON que contiene información 
//acerca de las propiedades de un documento

/* Creating a schema for the user model. */
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    }
});

export default mongoose.model('User', userSchema);