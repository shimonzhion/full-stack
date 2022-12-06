
const router = require('express').Router()
const {
    getSales,
    createSale,
    getSaleById,
    deleteSale,
    updateSale
} = require('../controllers/sale-ctrl')

router.get('/', getSales)
router.get('/:id', getSaleById)
router.post('/saveData', createSale)
router.delete('/delete/:id', deleteSale)
router.put('/update/:id', updateSale)

module.exports = router;