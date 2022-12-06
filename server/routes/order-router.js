
const router = require('express').Router()
const {
    getOrders,
    createOrder,
    getOrderById,
    deleteOrder,
    updateOrder
} = require('../controllers/order-ctrl')

router.get('/', getOrders)
router.get('/:id', getOrderById)
router.post('/saveData', createOrder)
router.delete('/delete/:id', deleteOrder)
router.put('/update/:id', updateOrder)

module.exports = router;