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
  console.log("---------------", index);
  console.log(prevValue);
  console.log(currentValue);
  return prevValue + currentValue.price;
});
console.log("total", total);

// const stringText = courses.reduce((prevValue, currentValue, index) => {
//   return (
//     prevValue + "K18 học" + currentValue.name + " gia " + currentValue.price
//   );
// }, "");
// console.log(stringText);
