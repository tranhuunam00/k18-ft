var express = require('express');
var fs = require('fs')

var app = express()

const users = []

app.get('/', function (req, res) {
  res.send('Simple Example of routes!');
})

app.get('/signup', function (req, res) {
  console.log("chui vào đây");
	// this is how we will receive params from front end
  console.log(req.query);
  const { name, email, password } = req.query
  users.push({
    id: new Date(),
    name : name,
    email,
    password
  })

  console.log(name + '' + email + ' ' + password);

  /**
   * Store this in a database and perform further processing
   */
  res.json({
    data: true,
    message:"Đăng kí thành công"
  })
});


app.get('/login', function (req, res) {
  console.log('bắt đầy ');
  const {email, password } = req.query
  const user = users.find(u => u.email === email && u.password === password)
  res.json({
    data: user,
    message: "Đăng nhập thành công"
  })
});

app.listen(3000, function () {
  console.log('Server is listening at 3000')
})