const express = require('express')
const qs = require('querystring')
var bodyParser = require('body-parser')
// const STATUS_CODE = require('./constants/httpResponseCode')
// const HTTP_MESSAGE = require('./constants/httpErrorMessage')
// const UTIL_HELPER = require('./helper/util')
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
const app = express()
document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementsByClassName('container')

    const singup = document.getElementsByClassName('singup')
    const signupInput = document.getElementById('signupInput')
    const singupEmail = document.getElementById('singupEmail')
    const singupPassword = document.getElementById('singupPassword')
    const singupButton = document.getElementById('singupButton')

    const login = document.getElementsByClassName('login')
    const loginInput = document.getElementById('loginInput')
    const loginEmail = document.getElementById('loginEmail')
    const loginPassword = document.getElementById('loginPassword')
    const loginButton = document.getElementById('loginButton')

    const list = document.getElementsByClassName('list')
    const listInput = document.getElementById('listInput')
    const listEmail = document.getElementById('listEmail')
    const listPassword = document.getElementById('listPassword')
    const listButton = document.getElementById('listButton')

    const fix = document.getElementsByClassName('fix')
    const fixEmail = document.getElementById('fixEmail')
    const fixPassword = document.getElementById('fixPassword')
    const fixButton = document.getElementById('fixButton')
})

const randomUsersInit = (number) => {
    const users = []
    for (let i = 1; i <= number; i++) {
        //todo
        users.push({
            id: new Date(),
            ['name']: `name ${i}`,
            age: i + 19,
            password: '123456',
            email: `${i}@gmail.com`,
        })
    }
    return users
}
var path = require('path')

app.get('/', function (req, res) {
    var indexPath = path.join(__dirname, 'index.html')
    res.sendFile(indexPath)
})

app.listen(3000, function () {
    console.log('Server is listening at http://localhost:3000')
})
