// // Bài tập1. dùng sử dụng async await với fetch
const getUsers = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataJson = await data.json();
};

function getUsers2() {}

const getUser3 = function () {};
getUsers();
