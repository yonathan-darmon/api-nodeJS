const express = require('express')
const router = express.Router();
const db = require('../models/database')

router.get('/', (req, res) => {
    console.log(db);
    const users = db.query('SELECT * FROM user', (error, result, fields) => {
        if (error) throw error;
        res.send(result)

        res.statusCode = 200;
    })
})
router.post('/add',(req, res) => {
        res.statusCode = 201
        res.send("utilisateur créé")
    })
router.post('/connect', (req, res) => {
    res.statusCode = 204
    res.send("utilisateur connecté")
})
router.get('/id',(req, res) => {
        res.statusCode = 200;
        res.send("voilà les detail")
    })
router.patch('/id/mod',(req, res) => {
        res.statusCode = 204;
        res.send("Modif effectués")
    })
router.patch('/id/groupe', (req, res) => {
    res.statusCode = 204;
    res.send("ajout de groupe")
})
router.delete('/user/id/delete', (req, res) => {
    res.statusCode = 204;
    res.send("user effacé")
})
module.exports = router