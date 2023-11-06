// Lắng nghe sự kiện khi nút đăng ký được nhấn
document.getElementById('signupButton').addEventListener('click', function () {
    const email = document.getElementById('singupEmail').value
    const password = document.getElementById('singupPassword').value
    if (!email || !password) {
        res.status(400).json({
            error: 'Vui lòng cung cấp tên người dùng và mật khẩu',
        })
        return
    }
})
// Lắng nghe sự kiện khi nút đăng nhập được nhấn
document.getElementById('loginButton').addEventListener('click', function () {
    const email = document.getElementById('loginEmail').value
    const password = document.getElementById('loginPassword').value
})
