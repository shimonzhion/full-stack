const orderModel = require('../models/order-model');

const getOrders = async (req, res) => {
    await orderModel.find({})
        .then((orders, error) => {
            if (error) {
                return res.status(400).json({ success: false, error })
            }
            if (orders.length == 0) {
                return res.json({ success: false, massage: "no orders" })
            }
            res.status(200).json({ success: true, orders })
        })
}
const getOrderById = async (req, res) => {
    await orderModel.findById(req.params.id)
        .then(order => {
            if (!order) {
                return res.json({ success: false, massage: "order is not available" })
            }
            return res.status(200).json({ success: true, order })
        })
        .catch(error => res.status(400).json({ success: false, error }))
}
const createOrder = async (req, res) => {

    await orderModel.insertMany(req.body.order)
        .then(() => res.status(300).json({ success: true, massage: "order added successfully" }))
        .catch((error) => res.status(400).json({ success: false, error }))
}
const updateOrder = async (req, res) => {
    await orderModel.findByIdAndUpdate(req.params.id, req.body.order)
        .then(result => res.status(200).json({ success: true, result }))
        .catch(error => res.status(400).json({ success: false, error }))
}
const deleteOrder = async (req, res) => {
    await orderModel.findByIdAndDelete(req.params.id)
        .then(() => res.status(300).json({ success: true }))
        .catch(error => res.status(400).json({ success: false ,error}))
}


module.exports = {
    getOrders,
    createOrder,
    getOrderById,
    deleteOrder,
    updateOrder
}