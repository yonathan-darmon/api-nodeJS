const express = require('express')
var mysql = require("mysql")
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'api-symfony'
})
connection.connect();
const app = express()
const port = 3000
app.route('/users')
    .get((req, res) => {
        const users = connection.query('SELECT * FROM user', (error, result, fields) => {
            if (error) throw error;
            res.send(result)
        })
        connection.end()
        res.statusCode = 200;
    })
    .post((req, res) => {
        res.statusCode = 201
        res.send("utilisateur créé")
    })
app.post('/users/connect', (req, res) => {
    res.statusCode = 204
    res.send("utilisateur connecté")
})
app.get('/groupes', (req, res) => {
    const groupes = connection.query('SELECT name FROM groupe', (error, result, fields) => {
        if (error) throw error;
        res.send(result)
        connection.end()
    })
    res.statusCode = 200;
})
app.get('/groupes/users', (req, res) => {
    const groupes = connection.query('SELECT groupe.name, user.firstName, user.lastname FROM groupe INNER JOIN user on user.groupe_id=groupe.id', (error, result, fields) => {
        if (error) throw error;
        res.send(result)
        connection.end()
    })
    res.statusCode = 200;
})
app.route('/user/id')
    .get((req, res) => {
        res.statusCode = 200;
        res.send("voilà les detail")
    })
    .patch((req, res) => {
        res.statusCode = 204;
        res.send("Modif effectués")
    })
app.patch('/user/id/groupe', (req, res) => {
    res.statusCode = 204;
    res.send("ajout de groupe")
})
app.patch('/admin/user/id', (req, res) => {
    res.statusCode = 204;
    res.send("Modif effectués")
})
app.delete('/admin/user/id', (req, res) => {
    res.statusCode = 204;
    res.send("user effacé")
})
app.post('/admin/groupe', (req, res) => {
    res.statusCode = 201
    res.send("groupe créé")
})
app.patch('/admin/groupe/id', (req, res) => {
    res.statusCode = 201
    res.send("groupe modifié")
})
app.delete('/admin/groupe/id', (req, res) => {
    res.statusCode = 201
    res.send("groupe supprimé")
})
app.patch('/admin/groupe/id/users', (req, res) => {
    res.statusCode = 201
    res.send("utilisateurs modifié")
})
app.listen(port, () => {

})