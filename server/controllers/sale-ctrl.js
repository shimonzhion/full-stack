const saleModel = require('../models/sales-model');

const getSales= async (req, res) => {
    await saleModel.find({})
        .then((sales, error) => {
            if (error) {
                return res.status(400).json({ success: false, error })
            }
            if (sales.length == 0) {
                return res.json({ success: false, massage: "no sales" })
            }
            res.status(200).json({ success: true, sales })
        })
}
const getSaleById = async (req, res) => {
    await saleModel.findById(req.params.id)
        .then(sale => {
            if (!sale) {
                return res.json({ success: false, massage: "sale is not available" })
            }
            return res.status(200).json({ success: true, sale })
        })
        .catch(error => res.status(400).json({ success: false, error }))
}
const createSale = async (req, res) => {
    await saleModel.insertMany(req.body.sale)
        .then(() => res.status(300).json({ success: true, massage: "sale added successfully" }))
        .catch((error) => res.status(400).json({ success: false, error }))
}
const updateSale = async (req, res) => {
    await saleModel.findByIdAndUpdate(req.params.id, req.body.sale)
        .then(result => res.status(200).json({ success: true, result }))
        .catch(error => res.status(400).json({ success: false, error }))
}
const deleteSale = async (req, res) => {
    await saleModel.findByIdAndDelete(req.params.id)
        .then(() => res.status(300).json({ success: true }))
        .catch(error => res.status(400).json({ success: false ,error}))
}


module.exports = {
    getSales,
    createSale,
    getSaleById,
    deleteSale,
    updateSale
}