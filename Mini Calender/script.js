let date=document.getElementById("date");
let day=document.getElementById("day");
let month=document.getElementById("month");
let year=document.getElementById("year");



const today = new Date();
// console.log(today)

const weekDays=["Sunday","Monday","Tuesday","Wednesday","Thurusday","Friday","Saturday"];
const allMonths=["Januray","Febuary","March","April","May","June","July","Auguest","September","October","November","December"];



date.innerHTML=(today.getDate()<10?"0":"")+today.getDate();
day.innerHTML=weekDays[today.getDay()];
month.innerHTML=allMonths[today.getMonth()];
year.innerHTML=today.getFullYear();