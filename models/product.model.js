const mongoose = require('mongoose'); 

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    
    desc: {
        type: String,
        required: false
    },

    img: {
        type: String,
        required: false
    },

    category: {
        type: String,
        required: false
    },

    country: {
        type: String,
        required: [true, 'Country is required']
    },

    qualityGood: {
        type: Boolean,
        default: true
    },

    verified: {
        type: Boolean,
        default: false
    },

    

}, {timestamps: true})



const Product = mongoose.model('Product', productSchema)

module.exports = Product