const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

const singupButton = document.getElementById('singupButton')
const loginButton = document.getElementById('singupButton')
const singupEmail = document.getElementById('singupEmail').value
const singupPassword = document.getElementById('singupPassword').value

app.get('/', function (req, res) {
    var indexPath = path.join(__dirname, 'index.html')
    res.sendFile(indexPath)
    singupButton.addEventListener('click', function () {})
    if(!singupEmail||!singupPassword){
        return res.json{

        }
    }
})

app.listen(3000, function () {
    console.log('Server is listening at http://localhost:3000')
})
