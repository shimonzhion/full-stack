
const router = require('express').Router()
const {
    getProducts,
    createProduct,
    getProductById,
    deleteProduct,
    updateProduct
} = require('../controllers/product-ctrl')

router.get('/', getProducts)
router.get('/:id', getProductById)
router.post('/saveData', createProduct)
router.delete('/delete/:id', deleteProduct)
router.put('/update/:id', updateProduct)

module.exports = router;
