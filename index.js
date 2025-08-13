const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('./keys')
const app = express()
const PORT = 3000
const { mongoUrl } = require('./keys')

mongoose.connect(mongoUrl)

mongoose.connection.on('connected', () =>{
    console.log("connected to mongo")})

mongoose.connection.on('error', (err) =>{
    console.log("This is error", err)})

app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log(req.body)
    res.send('Hello')
})

app.listen(PORT, () => {
    console.log("Server Running" + PORT)
})