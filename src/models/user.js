const mongoose = require('mongoose');

//Schema: En mongo db son estructura JSON que contiene información 
//acerca de las propiedades de un documento
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

module.exports = mongoose.model('User', userSchema);