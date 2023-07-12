const express = require('express')
const app = express()


app.use(express.urlencoded({
    extended: true
}))
app.use(express.static("public"))


app.get('/', function (req, res) {

  res.sendFile(__dirname+"/index.html")
})

app.post('/', function (req,res) {

  res.redirect('/shop')
})
app.get('/shop', function(req, res) {

  res.sendFile(__dirname+"shop.html")
})

app.listen(3000)