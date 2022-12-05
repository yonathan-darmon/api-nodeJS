const express = require('express')
const app = express()
const port = 3000
app.route('/users/')
.get((req, res) => {
    res.statusCode = 200;
    res.send("voilà les users")
})
.post((req, res)=>{
    res.statusCode=201
    res.send("utilisateur créé")
})
app.post('/users/connect',(req,res)=>{
    res.statusCode=204
    res.send("utilisateur connecté")
})
app.get('/groupes',(req,res)=>{
    res.statusCode = 200;
    res.send("voilà les groupes")
})
app.get('/groupes/users',(req,res)=>{
    res.statusCode = 200;
    res.send("voilà le machup")
})
app.route('/user/id')
.get((req,res)=>{
    res.statusCode = 200;
    res.send("voilà les detail")
})
.patch((req,res)=>{
    res.statusCode = 204;
    res.send("Modif effectués")
})
app.patch('/user/id/groupe',(req,res)=>{
    res.statusCode = 204;
    res.send("ajout de groupe")
})
app.patch('/admin/user/id',(req,res)=>{
    res.statusCode = 204;
    res.send("Modif effectués")
})
app.delete('/admin/user/id',(req,res)=>{
    res.statusCode = 204;
    res.send("user effacé")
})
app.post('/admin/groupe',(req,res)=>{
    res.statusCode=201
    res.send("groupe créé")
})
app.patch('/admin/groupe/id',(req,res)=>{
    res.statusCode=201
    res.send("groupe modifié")
})
app.delete('/admin/groupe/id',(req,res)=>{
    res.statusCode=201
    res.send("groupe supprimé")
})
app.patch('/admin/groupe/id/users',(req,res)=>{
    res.statusCode=201
    res.send("utilisateurs modifié")
})
app.listen(port, () => {

})