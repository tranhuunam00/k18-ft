/** @format */

const express = require('express');
const qs = require('querystring');
const multer = require('multer');
const bodyParser = require('body-parser');
const STATUS_CODE = require('./constants/httpResponseCode');
const HTTP_MESSAGE = require('./constants/httpErrorMessage');
const UTIL_HELPER = require('./helper/util');
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var cors = require('cors');
const logMiddleWare = require('./middleware/log');
const checkAuthMiddleware = require('./middleware/checkAuth');
const connectMongo = require('./models/connect');

app.use(cors());
app.use(express.static('public'));

connectMongo();

const randomUsersInit = (number) => {
   const users = [];
   for (let i = 1; i <= number; i++) {
      //todo
      users.push({
         id: new Date(),
         ['name']: `name ${i}`,
         age: i + 19,
         password: '123456',
         email: `${i}@gmail.com`,
      });
   }
   return users;
};
let users = randomUsersInit(10);
const wallets = [
   {
      userId: '2023-10-23T15:23:56.208Z',
      value: 1000,
   },
   {
      userId: 2,
      value: 2000,
   },
];
app.get('/users', (req, res) => {
   console.log('---get-users---STARTING');
   console.log(qs.stringify({keyword: ' 1 '}));

   console.log('req.query', req.query);
   // query truyền sau dấu ?
   // tất cả query đều là string
   // nếu định lấy nhiều dữ liệu thì xấu nhất cũng trả về 1 mảng rỗng
   //
   const {age_gt, id_sort, keyword, ids} = req.query;
   console.log(req.query);
   let newUsers = [...users];
   // lọc trước khi sắp xếp
   if (age_gt) {
      newUsers = newUsers.filter((user) => user.age > +age_gt);
   }
   if (keyword) {
      newUsers = newUsers.filter((user) => user.name.includes(keyword));
   }
   if (ids) {
      newUsers = newUsers.filter((user) => ids.includes(user.id + ''));
   }
   if (id_sort) {
      newUsers = newUsers.sort((a, b) => (a.id - b.id) * -id_sort);
   }

   console.log('---get-users---END');
   //http://localhost:3000/users?age_gt=25&id_sort=-1&ids=1&ids=9
   return res.json(newUsers);
});
app.post('/signup', logMiddleWare, async (req, res) => {
   console.log('-----get---signup----START---');
   console.log(req.body);
   // login
   const {email, password, name, age} = req.body;
   //1. check type và dữ liệu
   if (!email || !password || !name || !age) {
      return res.status(STATUS_CODE.badRequest).json({
         error: true,
         message: HTTP_MESSAGE.dataNotVerify,
         data: null,
      });
   }
   //2. check định dạng email
   if (!UTIL_HELPER.validateEmail(email)) {
      return res.status(STATUS_CODE.badRequest).json({
         error: true,
         message: HTTP_MESSAGE.emailNotVerify,
         data: null,
      });
   }

   // 3. password dài hơn 6 kí tự
   // hoặc n điều kiện cho pw
   if (!UTIL_HELPER.validatePassword(password)) {
      return res.status(STATUS_CODE.badRequest).json({
         error: true,
         message: HTTP_MESSAGE.passwordNotVerify,
         data: null,
      });
   }

   // 4. check email tồn tại
   const exitedUser = users.find((user) => user.email === email);
   if (exitedUser) {
      return res.status(STATUS_CODE.badRequest).json({
         error: true,
         message: HTTP_MESSAGE.existedUser,
         data: null,
      });
   }

   // 5. hash pw
   const hashPw = await UTIL_HELPER.hashPassword(password);
   // lưu vào db
   const newUser = {
      id: new Date(),
      email,
      password: hashPw,
      name,
      age,
   };
   users.push(newUser);
   console.log('-----get---signup----END---');
   return res.status(STATUS_CODE.created).json({
      error: false,
      message: HTTP_MESSAGE.success,
      data: newUser,
   });
});

app.post('/login', async (req, res) => {
   console.log('-----post---signup----START---');
   const {email, password} = req.body;
   // 1. check body
   if (!email && !password) {
      return res.status(STATUS_CODE.badRequest).json({
         error: true,
         message: HTTP_MESSAGE.dataNotVerify,
         data: null,
      });
   }
   // 2. tìm user có email
   const existedUser = users.find((user) => user.email === email);
   if (!existedUser) {
      return res.status(STATUS_CODE.notFounded).json({
         error: true,
         message: HTTP_MESSAGE.notExistedUser,
         data: null,
      });
   }
   // 2. check pw
   if (!(await UTIL_HELPER.comparePassword(password, existedUser.password))) {
      return res.status(STATUS_CODE.badRequest).json({
         error: true,
         message: HTTP_MESSAGE.passwordNotMatch,
         data: null,
      });
   }

   const token = UTIL_HELPER.generateToken(existedUser.id, 200000000);
   const dataUser = {...existedUser};
   delete dataUser.password;
   console.log('-----post---signup----END---');
   return res.status(STATUS_CODE.success).json({
      error: false,
      message: HTTP_MESSAGE.success,
      data: {
         user: dataUser,
         token,
      },
   });
});
app.get(
   '/wallet',
   checkAuthMiddleware,
   (req, res, next) => {
      console.log('50000');
      console.log(req.userId);
      const w = wallets.find((w) => w.userId === req.userId);
      req.w = w;
      next();
   },
   (req, res) => {
      return res.status(STATUS_CODE.success).json({
         error: false,
         message: HTTP_MESSAGE.success,
         data: req.w,
      });
   },
);
// Configure Multer
const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, 'public/'); // Uploads will be stored in the 'uploads/' directory
   },
   filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname); // Use a unique filename
   },
});
const upload = multer({storage: storage});

// // Serve your HTML form for file uploads
// app.get('/', (req, res) => {
//    res.sendFile(__dirname + '/index.html');
// });

// Handle file upload when the form is submitted
app.post('/upload', upload.single('file'), (req, res) => {
   if (!req.file) {
      return res.status(400).send('No file was uploaded.');
   }

   res.send('File uploaded successfully.');
});
app.listen(3000, function () {
   console.log('Server is listening at 3000');
});
