const courses = [
  {
    name: "js",
    price: 12,
  },
  {
    name: "php",
    price: 17,
  },
  {
    name: "java",
    price: 14,
  },
];

// const newCourses = courses.sort((coursePre, courseAfter) => {
//   return +(coursePre.price - courseAfter.price);
// });

const total = courses.reduce((prevValue, currentValue, index) => {
  console.log("-------------------------");
  console.log(prevValue);
  console.log(currentValue);
  console.log(index);

  return prevValue + currentValue.price;
}, 100);
console.log("total", total);

("k18 hoc js gia 12, k18 hoc php gia 17, k18 hoc java gia 14");
