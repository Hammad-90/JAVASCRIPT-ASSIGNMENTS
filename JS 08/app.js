// --------------------------CHAPTER-31-TO-34----------------------------

// ----------------------------QUESTION-01-------------------------------

// var my_date = new Date ();

// console.log(my_date);

// ----------------------------QUESTION-02-------------------------------

// var recent_months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// var my_Date =  new Date();

// var Month = my_Date.getMonth();

// console.log("Current month: "+recent_months[Month]);

// ----------------------------QUESTION-03-------------------------------

// var recent_days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// var my_Date =  new Date();

// var day = my_Date.getDay();

// alert(recent_days[day]);

// console.log("Today is : "+recent_days[day]);

// ------------------------------METHOD-02-------------------------------

// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// var today = new Date();

// var dayIndex = today.getDay();

// alert(days[dayIndex]);

// ----------------------------QUESTION-04-------------------------------

// var recent_days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// var my_Date =  new Date();

// var day = my_Date.getDay();

// if(day[recent_days] === "sunday" || day[recent_days] ==="saturday" )
// {
//     console.log("It's Fun Day");
// }
// else {
//     console.log("It's Working Day")
// }

// ----------------------------QUESTION-05-------------------------------

// var today = new Date();

// var date = today.getDate();

// if (date < 15) 
//     {
//     alert("First fifteen days of the month");
// } 
// else 
//     {
//     alert("Last days of the month");
// }

// ----------------------------QUESTION-06-------------------------------

// var mydate = new Date();

// console.log("Current Date : " + mydate)

// var  Elp = mydate.getTime();

// console.log("Elapsed milliseconds since January 1, 1970 : "+Elp);

// var Elpms = Math.floor(Elp/60000)

// console.log("Elapsed minutes since January 1, 1970 : " + Elpms);

// ----------------------------QUESTION-07-------------------------------

// var my_date = new Date();

// var time = my_date.getHours();

// if (time < 12) 
//     {
//     alert("Its AM");
// } 
// else
//     {
//     alert("Its PM");
// }

// ----------------------------QUESTION-08-------------------------------

// var laterDate = new Date(2020,11,31);

// console.log("Later Date: "+laterDate);

// ----------------------------QUESTION-09-------------------------------

// var ramzan_date = new Date(2025, 2, 2); // 2 = March

// console.log("Ramzan Date: " + ramzan_date);

// var currentDate = new Date();

// console.log("Current Date: " + currentDate);

// var diff = currentDate - ramzan_date;

// var oneDay = 1000 * 60 * 60 * 24;

// var daysPassed = Math.floor(diff / oneDay);

// console.log(daysPassed + " days have passed since 1st Ramzan 2025");

// ----------------------------QUESTION-10-------------------------------

// var date = new Date("2015-12-5")

// var current_date = new Date();

// var diff = current_date - date;

// console.log("On refrence date : " + date )

// console.log(Math.floor(diff/(1000)) + " seconds had passed")

// ----------------------------QUESTION-11-------------------------------

// var cur_date = new Date();

// console.log("current date : " + cur_date)

// var hours = cur_date.getHours();

// cur_date.setHours(hours-1)

// console.log("1 hour ago, "+cur_date);

// ----------------------------QUESTION-12-------------------------------

// var date = new Date();

// console.log("Current date : "+date);

// var year = date.getFullYear();

// date.setFullYear(year-100);

// alert("100 year ago : "+date);

// ----------------------------QUESTION-13-------------------------------

// var user_input = Number(prompt("Enter your Age : "));

// var date = new Date();

// var year = date.getFullYear();

// var age = Math.floor(year-user_input);

// console.log("Your age is : "+user_input);

// console.log("Your age year is : "+age);

// alert("Your Age year is... " +age)

// ----------------------------QUESTION-14-------------------------------

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var units = 410;

var unit_fee = 16;

var late_fee = 350;

var date = new Date();

var total_char = units*unit_fee;

var gross_amount_payable = total_char+late_fee;

total_char = total_char.toFixed(2);

gross_amount_payable = gross_amount_payable.toFixed(2);

unit_fee = unit_fee.toFixed(2)

late_fee = late_fee.toFixed(2)

console.log("K-Electric Bill :")

console.log("Customer Name : ABC COUSTOMER")

console.log( "Month : " + months[date.getMonth()] )

console.log("Number of units : " + units)

console.log("Charge per unit : " + unit_fee)

console.log("-----------------------------")

console.log("Net Amount Payable(within Due Date) : " + total_char)

console.log("Late payment surcharges : " + late_fee)

console.log("Gross Amount Payable(after Due Date) : "+ gross_amount_payable)


