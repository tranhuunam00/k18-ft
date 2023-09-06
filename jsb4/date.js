const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
console.log(year, month, date, hours, minutes);

const myDate = new Date("2023-12-01");
console.log("date2");
console.log(myDate);
console.log(myDate.getMonth());

myDate.setDate(myDate.getDate() + 7);
console.log(myDate);
console.log("0-------------------");
const startDate = new Date("1970-01-01");
console.log(startDate.getTime());
console.log(now.getTime());

const nowTimeStamp = now.getTime();
const stampBefore7Day = nowTimeStamp + 30 * 24 * 60 * 60 * 1000;
console.log("before");
console.log(new Date(stampBefore7Day));
console.log(new Date(-1));
