const daoCommon = require('./common/daoCommon')

const productDao = {
    ...daoCommon,
    ...require('./api/productDao')
}

const userDao = {
    ...daoCommon,
    ...require('./api/userDao')
}


module.exports = {
    productDao,
    userDao
}