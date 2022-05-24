// Connect to the database
const con = require('../../config/dbconfig')

const daoCommon = {
    findAll: (res, table) => {
        con.execute(
            `SELECT * FROM product  
            LEFT JOIN gpu_specs ON product.gpu_specs = gpu_id
            LEFT JOIN cpu_specs ON product.cpu_specs = cpu_id
            LEFT JOIN motherboard_specs ON product.motherboard_specs = motherboard_id
            LEFT JOIN drive_specs ON product.drive_specs = drive_id
            LEFT JOIN memory_specs ON product.memory_specs = memory_id
            LEFT JOIN computer_case_specs ON product.computer_case_specs = computer_case_id
            LEFT JOIN fan_specs ON product.fan_specs = fan_id
            LEFT JOIN power_specs ON product.power_specs = power_id
            LEFT JOIN radiator_specs ON product.radiator_specs = radiator_id;`,
            (error, rows) => {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(' DAO ERROR ', error)
                }
            }
        )
    },

    findById: (res, table, id) => {
        con.execute(
            `SELECT * FROM ${table} WHERE ${table}_id = ?`,
            [id],
            (error, rows) => {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(' DAO ERROR ', error)
                }
            }
        )
    },

    countAll: (res, table) => {
        con.execute(
            `SELECT COUNT(*) count FROM ${table}`,
            (error, rows) => {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(' DAO ERROR ', error)
                }
            }
        )
    }
}

module.exports = daoCommon