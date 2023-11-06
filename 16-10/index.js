const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const port = 3000

app.use(bodyParser.json())

const users = []

app.post('/register', (req, res) => {
    // Xử lý việc đăng ký người dùng ở đây
    // ...

    res.json({ message: 'Người dùng đã được đăng ký thành công' })
})

app.post('/login', (req, res) => {
    // Xử lý việc đăng nhập ở đây
    // ...

    res.json({ message: 'Đăng nhập thành công' })
})

// Đường dẫn cho trang đăng nhập
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

// Đường dẫn cho trang đăng ký
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'))
})

app.listen(port, () => {
    console.log(`Server đang lắng nghe trên cổng ${port}`)
})
