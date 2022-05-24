const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3001

router.get('/', (req, res) => {
    res.json({
        'All Products': `http://localhost:${PORT}/api/product`,
        'Newsletter Sign Up': `http://localhost:${PORT}/api/users`
    })
})

// api/product
router.use('/product', require('./api/productRoutes'))

// api/users
router.use('/users', require('./api/userRoutes'))

module.exports = router