const express = require('express')
const router = express.Router()

const { productDao: dao } = require('../../daos/dao')


// api/product
router.get('/', (req, res) => {
    dao.findAll(res, dao.table)
})

// api/product/count
router.get('/count', (req, res) => {
    dao.countAll(res, dao.table)
})

// api/product/sort
router.get('/sort', (req, res) => {
    dao.sort(req, res)
})

router.get('/type/:id', (req, res) => {
    dao.findByProductType(req, res, req.params.id)
})

// api/product/:id
router.get('/:id', (req, res) => {
    dao.findById(res, dao.table, req.params.id)
})

router.post('/create', (req, res) => {
    dao.update(req, res)
})

router.patch('/update/:id', (req, res) => {
    dao.update(req, res)
})

module.exports = router