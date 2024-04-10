const express = require('express')

const { 
    createProduct, 
    getAllProducts,
    getSingleProduct,
    updateAnyProduct,
    deleteProduct,
 } = require('../controllers/product.controller')

const router = express.Router()




// create product
router.post('/', createProduct)

// find all products
router.get('/', getAllProducts)

// get product by id
router.get('/:id', getSingleProduct)

//update any product
router.put('/:id', updateAnyProduct)

// delete product
router.delete('/:id', deleteProduct)






module.exports = router