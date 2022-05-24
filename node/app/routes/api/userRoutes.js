const express = require('express')
const router = express.Router()

const { userDao: dao } = require('../../daos/dao')


// api/user
router.get('/', (req, res) => {
    dao.findAll(res, dao.table)
})

// api/user/count
router.get('/count', (req, res) => {
    dao.countAll(res, dao.table)
})

// api/user/sort
router.get('/sort', (req, res) => {
    dao.sort(req, res)
})

// api/user/:id
router.get('/:id', (req, res) => {
    dao.findById(res, dao.table, req.params.id)
})

router.post('/create', (req, res) => {
    dao.create(req, res)
})

module.exports = router