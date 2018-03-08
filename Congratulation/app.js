var express = require('express')
var path = require('path')
var app = express();

express.static('images')
express.static('styles')
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use('/styles', express.static(path.join(__dirname, 'styles')))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'))
})
app.listen(8080)