const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const port = 3000

app.use(bodyParser.json())

const users = []
// Đường dẫn cho trang đăng nhập
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
app.listen(port, () => {
    console.log(`Server đang lắng nghe trên cổng ${port}`)
})
