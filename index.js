const express = require("express")
const path = require('path')
const app = express()
const mongoose=request('mongoose')
mongoose.connect('mongodb://localhost/nodekb')
let db = mongoose.connection
app.set("views", path.join(__dirname, 'views'));
app.set('view engine', 'pug')
app.get('/', function (req, res) {
  res.send('root')
})
app.get('/test', function (req, res) {
  res.render('index')
})
app.listen(3000, () => console.log("Server is running...."))