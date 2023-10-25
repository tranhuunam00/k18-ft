const express = require('express')
const qs = require('querystring')
var bodyParser = require('body-parser')
const STATUS_CODE = require('./constants/httpResponseCode')
const HTTP_MESSAGE = require('./constants/httpErrorMessage')
const UTIL_HELPER = require('./helper/util')
var app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var cors = require('cors')
const jwt = require('jsonwebtoken')

app.use(cors())

const singupButton = document.getElementById('singupButton')
const loginButton = document.getElementById('singupButton')
const singupEmail = document.getElementById('singupEmail').value
const singupPassword = document.getElementById('singupPassword').value

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
let users = randomUsersInit(10)
app.get('/', function (req, res) {
    var indexPath = path.join(__dirname, 'index.html')
    res.sendFile(indexPath)
    singupButton.addEventListener('click', function () {})
    if (!singupEmail || !singupPassword) {
        return res.status(STATUS_CODE.badRequest).json({
            error: true,
            message: HTTP_MESSAGE.dataNotVerify,
            data: null,
        })
    }
    if (!UTIL_HELPER.validateEmail(singupEmail)) {
        return res.status(STATUS_CODE.badRequest).json({
            error: true,
            message: HTTP_MESSAGE.emailNotVerify,
            data: null,
        })
    }
    if (!UTIL_HELPER.validatePassword(singupPassword)) {
        return res.status(STATUS_CODE.badRequest).json({
            error: true,
            message: HTTP_MESSAGE.passwordNotVerify,
            data: null,
        })
    }
    // 4. check email tồn tại
    const exitedUser = users.find((user) => user.email === email)
    if (exitedUser) {
        return res.status(STATUS_CODE.badRequest).json({
            error: true,
            message: HTTP_MESSAGE.existedUser,
            data: null,
        })
    }
    const newUser = {
        id: i++,
        email,
        password: hashPw,
        name,
        age,
    }
    users.push(newUser)
    return res.status(STATUS_CODE.created).json({
        error: false,
        message: HTTP_MESSAGE.success,
        data: newUser,
    })
})

app.listen(3000, function () {
    console.log('Server is listening at 3000')
})

// app.post('/login', async (req, res) => {
//     console.log('-----post---signup----START---')
//     const { email, password } = req.body
//     // 1. check body
//     if (!email && !password) {
//         return res.status(STATUS_CODE.badRequest).json({
//             error: true,
//             message: HTTP_MESSAGE.dataNotVerify,
//             data: null,
//         })
//     }
//     // 2. tìm user có email
//     const existedUser = users.find((user) => user.email === email)
//     if (!existedUser) {
//         return res.status(STATUS_CODE.notFounded).json({
//             error: true,
//             message: HTTP_MESSAGE.notExistedUser,
//             data: null,
//         })
//     }
//     // 2. check pw
//     if (!(await UTIL_HELPER.comparePassword(password, existedUser.password))) {
//         return res.status(STATUS_CODE.badRequest).json({
//             error: true,
//             message: HTTP_MESSAGE.passwordNotMatch,
//             data: null,
//         })
//     }

//     const token = UTIL_HELPER.generateToken(existedUser.id, 200000000)
//     const dataUser = { ...existedUser }
//     delete dataUser.password
//     console.log('-----post---signup----END---')
//     return res.status(STATUS_CODE.success).json({
//         error: false,
//         message: HTTP_MESSAGE.success,
//         data: {
//             user: dataUser,
//             token,
//         },
//     })
// })
