const express = require('express')
const app = express()
const ejs = require("ejs")

app.use(express.urlencoded({
    extended: true
}))
app.set('view engine', 'ejs')
app.use(express.static("public"))


app.get('/', function (req, res) {

  res.render('index.ejs')
})

app.post('/', function (req,res) {
  // const clothingCategory  ; 

  res.redirect('/shop/'+ clothingCategory)
})

app.get('/login', function(req,res){
  res.render('login.ejs')
})

app.get('/register', function(req,res){
  res.render('register.ejs')
})
//shop req and res
app.get('/shop/hoodies', function(req, res) {

  res.render('shop.ejs')
})

app.listen(3000)