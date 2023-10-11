const users = []

const wait = async (delay = 2000) => {
    return new Promise((res) => {
        setTimeout(res, delay)
    })
}

// tham số:
// {
//   "email": "kiểu string, là email :regex",
//   "password": "kiểu string, ít nhất 6 kí tự"
// }
const saveUserToStore = async (user) => {
    await wait(2000)
    user.id = new Date()
    users.push(user)
    return true
}

const updateUserInStore = async (userUpdate) => {
    await wait(2000)
    users.map((user) => user.email === userUpdate.email || user)
    return true
}

const getUserByEmailInStore = async (email) => {
    await wait(2000)
    return users.find((user) => {
        return user.email === email
    })
}

const getTotalUserInStore = async (email) => {
    await wait(2000)
    return users.length
}

const getAllUserInStore = async (email) => {
    await wait(2000)
    return users
}

const getUserByEmailAndPassword = async (email, password) => {
    await wait(1000)
    return users.find((user) => {
        return user.email === email && user.password === password
    })
}

function validateEmail(email) {
    const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    if (email !== '' && email.match(emailFormat)) {
        return true
    }
    return false
}

function validatePassword(password) {
    return typeof password === 'string' && password.length >= 6
}

// request: là những thằng mà mọi người truyền lên
// resolve là nhưng thứ muốn trả về
const signUp = async (email, password) => {
    // check điều kiện
    // check xem email có thỏa mãn dòng 11 không?
    // check xem password có thảo mãn dòng 12 không?
    // nếu mà ok thì pass + check xem email đã tồn tại trong mảng user chưa?

    const isCheck = validateEmail(email) && validatePassword(password)

    if (!isCheck) {
        return {
            error: true,
            data: 'Bạn vui lòng nhập đúng kiểu dữ liệu',
        }
    }
    // check user tồn tại trong db chưa
    const existUser = await getUserByEmailInStore(email)
    if (existUser) {
        return {
            error: true,
            data: 'User đã tồn tại trong hệ thống',
        }
    }
    // lưu user vào database
    await saveUserToStore(email, password)
    return {
        error: false,
        data: 'Đăng kí thành công',
    }
}

// vẽ flow diagram liên quan đến đăng nhập - đăng kí
// sửa hàm đăng kí
// viết thêm hàm đăng nhập : nếu thành công thì thành công
// không làm việc trực tiếp với users /// rule

const login = async (email, password) => {
    const isCheck = validateEmail(email) && validatePassword(password)
    if (!isCheck) {
        return {
            error: true,
            data: 'Invalid input',
        }
    }
    // check user match email and password
    const loginUser = await getUserByEmailAndPassword(email, password)
    if (!loginUser) {
        return {
            error: true,
            data: 'Email or password does not match',
        }
    }
    // login for user
    return {
        error: false,
        data: 'Login Successfully',
        token: '#ey129e8bv9824ry32ir2jiro3nk',
    }
}

const changePassword = async (email, oldPassword, newPassword) => {
    const isCheck =
        validateEmail(email) &&
        validatePassword(oldPassword) &&
        validatePassword(newPassword)
    if (!isCheck) {
        return {
            error: true,
            data: 'Invalid input',
        }
    }
    // check user match email and password
    const findUser = await getUserByEmailAndPassword(email, oldPassword)
    if (!findUser) {
        return {
            error: true,
            data: 'Email or password does not match',
        }
    }
    // change password for user
    const userUpdate = { email: email, password: newPassword }
    await updateUserInStore(userUpdate)
    return {
        error: false,
        data: 'Update Successfully',
        token: '#ey129e8bv9824ry32ir2jiro3nk',
    }
}
const userService = {
  saveUserToStore,  // thêm 1 user vào mảng
  getAllUserInStore,
  getUserByEmailInStore
}

module.exports = userService