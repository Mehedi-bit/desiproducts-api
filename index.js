const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')
require('dotenv').config()

const app = express()


// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}))



// Routes
app.use('/api/products', productRoute)




app.get('/',  (req, res) => {
    res.send("Welcome to desiproducts API!")
})





// Database connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to database!")
        app.listen(5000, () => {
            console.log("Server running on port 5000")
        })
    })

    .catch((err) => {
        console.log('Connection failed')
    })




