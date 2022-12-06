const router = require('express').Router()

const {
    register, login, getUsers
} = require('../controllers/user-ctrl')
router.get('/',getUsers)
router.post('/register', register)
router.post('/login', login)


module.exports = router;
