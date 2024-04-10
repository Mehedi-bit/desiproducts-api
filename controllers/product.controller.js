const Product = require('../models/product.model.js')


const createProduct = async (req, res) => {
    const product = new Product({
        name: req.body.name,
        desc: req.body.desc,
        img: req.body.img,
        category: req.body.category,
        country: req.body.country,
        qualityGood: req.body.qualityGood,
        verified: req.body.verified
    })

    try {
        const newProduct = await product.save()
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}




const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}



const getSingleProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (product == null) {
            return res.status(404).json({message: 'Product not found'})
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}



const updateAnyProduct = async (req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findOneAndUpdate({_id: id}, req.body, {new: true})

        if (!product) {
            return res.status(404).json({message: 'Product not found'})
        }

        // normally the product gets updated, so recheck it from database
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}



const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params
        const deletedProduct = await Product.findByIdAndDelete(id)
        if (!deletedProduct) {
            return res.status(404).json({message: 'Product not found'})
        }

        res.status(200).json({message: "Product deleted successfully"})

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}





module.exports = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateAnyProduct,
    deleteProduct,
}