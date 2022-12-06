const express = require('express');
const app = express()
const port = 3000
const helmet= require('helmet');

var userRouter=require('./router/userRouter')
var groupeRouter=require('./router/groupeRouteur')

app.use(helmet())
app.use('/users',userRouter)
app.use('/groupe',groupeRouter)

app.listen(port, () => {

})