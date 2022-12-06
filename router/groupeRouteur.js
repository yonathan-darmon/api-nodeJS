const express = require('express')
const router = express.Router();
const db = require('../models/database')

router.get('/', (req, res) => {
    const groupes = db.query('SELECT name FROM groupe', (error, result, fields) => {
        if (error) throw error;
        res.send(result)
        db.end()
    })
    res.statusCode = 200;
})
router.get('/users', (req, res) => {
    const groupes = db.query('SELECT groupe.name, user.firstName, user.lastname FROM groupe INNER JOIN user on user.groupe_id=groupe.id', (error, result, fields) => {
        if (error) throw error;
        res.send(result)
        db.end()
    })
    res.statusCode = 200;
})

router.post('/add', (req, res) => {
    res.statusCode = 201
    res.send("groupe créé")
})
router.patch('/id/mod', (req, res) => {
    res.statusCode = 201
    res.send("groupe modifié")
})
router.delete('/id/delete', (req, res) => {
    res.statusCode = 201
    res.send("groupe supprimé")
})
router.patch('/id/users', (req, res) => {
    res.statusCode = 201
    res.send("utilisateurs modifié")
})
module.exports = router