const express = require('express')
const qs = require('querystring')
var bodyParser = require('body-parser')
var path = require('path')
const app = express()
const loginButton = document.getElementById('loginButton')
app.get('/', function (req, res) {
    var indexPath = path.join(__dirname, 'index.html')
    res.sendFile(indexPath)
    document
        .getElementById('singupButton')
        .addEventListener('click', function () {
            var email = document.getElementById('singupEmail').value
            var password = document.getElementById('singupPassword').value

            if (email.length < 7) {
                alert('Email phải có ít nhất 7 ký tự!')
                return
            }

            if (password.length < 8) {
                alert('Password phải có ít nhất 8 ký tự!')
                return
            }

            // Tiến hành đăng ký nếu các điều kiện được đáp ứng
            // Gửi dữ liệu đăng ký đến máy chủ (Node.js) bằng AJAX hoặc fetch API
        })

    document
        .getElementById('loginButton')
        .addEventListener('click', function () {
            var email = document.getElementById('loginEmail').value
            var password = document.getElementById('loginPassword').value

            if (password.length < 8) {
                alert('Password phải có ít nhất 8 ký tự!')
                return
            }

            // Kiểm tra các điều kiện bổ sung như chữ cái viết hoa và số ở đây

            // Tiến hành đăng nhập nếu các điều kiện được đáp ứng
            // Gửi dữ liệu đăng nhập đến máy chủ (Node.js) bằng AJAX hoặc fetch API
        })
})
app.get('/user', function (req, res) {})
app.listen(3000, function () {
    console.log('Server is listening at http://localhost:3000')
})
