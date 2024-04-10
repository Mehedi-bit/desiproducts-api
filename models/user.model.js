const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    
        username: {
            type: String,
            required: true
        },
        
        email: {
            type: String,
            required: true,
            unique: true
        },
    
        password: {
            type: String,
            required: true
        },
    
    
        avatar: {
            type: String,
            default: 'https://img.freepik.com/free-vector/hand-drawn-one-line-art-illustration_23-2149286202.jpg?t=st=1712740572~exp=1712744172~hmac=024622624a0d756f4cda5a1de0241120ba667646722baa735fc74609dced9314&w=740'
        },


        isAdmin: {
            type: Boolean,
            default: false
        },



}, {timestamps: true})



const User = mongoose.model('User', userSchema)

module.exports = User