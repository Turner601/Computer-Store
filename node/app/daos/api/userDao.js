const con = require('../../config/dbconfig')
const daoCommon = require('../common/daoCommon')

const userDao = {
    ...daoCommon,
    table: 'users',

    findAll: (res, table)=>{
        con.query(
            `SELECT * FROM ${table}`,
        (error, rows)=>{
            if(!error){
                if(rows.length === 1){
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else {
                console.log('DAO ERROR', error)
            }
        })
    },

    create: (req, res) => {
        if (Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to create"
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.query(
                `INSERT INTO users SET ${fields.join(' = ?, ')} = ?`,
                values,
                (error, dbres) => {
                    if (!error) {
                        res.json({Last_id: dbres.insertId})
                    } else {
                        console.log(' DAO ERROR ', error)
                        res.send('Error creating record')
                    }
                }
            )
        }
    },

    sort: (req, res) => {
        
        con.execute(
            'SELECT * FROM users ORDER BY users_lastName',
            [req.body],
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

module.exports = userDao