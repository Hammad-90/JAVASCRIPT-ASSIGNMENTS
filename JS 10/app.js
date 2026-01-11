//****************************(CHAPTER-38-TO-42)*****************************************

//******************************(QUESTION-01)***************************************

// function power(a,b)
// {
//     return Math.pow(a,b)
// }
// let num1 = 2;
// let num2 = 2;
// console.log(num1 + " upon " + num2 + " Equals : " +power(num1,num2)  )
// console.log()

//******************************(QUESTION-02)***************************************

// function checkLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return "Leap Year";
//     } else {
//         return "Not a Leap Year";
//     }
// }

// var year = parseInt(prompt("Enter any year:"));

// var result = checkLeapYear(year);
// alert(year + " is " + result);

//******************************(QUESTION-03)***************************************

// function calculateS(a, b, c) {
//     return (a + b + c) / 2;
// }

// function calculateArea(a, b, c) {
//     var S = calculateS(a, b, c);
//     var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//     return area;
// } 

// var a = 2;
// var b = 3;
// var c = 4;

// var result = calculateArea(a, b, c);
// console.log("Area of Triangle is: " + result);

//******************************(QUESTION-04)***************************************

// function averageFunction(m1, m2, m3) {
//     return (m1 + m2 + m3) / 3;
// }

// function percentageFunction(m1, m2, m3) {
//     var totalMarks = 300; 
//     var obtainedMarks = m1 + m2 + m3;
//     return (obtainedMarks / totalMarks) * 100;
// }

// function mainFunction() {
//     var marks1 = 95;
//     var marks2 = 75;
//     var marks3 = 80;

//     var avg = averageFunction(marks1, marks2, marks3);
//     var per = percentageFunction(marks1, marks2, marks3);

//     console.log("Average Marks: " + avg);
//     console.log("Percentage: " + per + "%");
// }

// mainFunction();

//******************************(QUESTION-05)***************************************

// function myIndexOf(str, char) {
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i; 
//         }
//     }
//     return -1; 
// }

// var text = "hammad";
// var result = myIndexOf(text, "d");

// console.log(result);

//******************************(QUESTION-06)***************************************

// function deleteVowels(sentence) {
//     var result = "";

//     for (var i = 0; i < sentence.length; i++) {
//         var ch = sentence[i].toLowerCase();

//         if (
//             ch !== "a" &&
//             ch !== "e" &&
//             ch !== "i" &&
//             ch !== "o" &&
//             ch !== "u"
//         ) {
//             result += sentence[i];
//         }
//     }

//     return result;
// }

// var text = "Hello..! How are you";
// var output = deleteVowels(text);

// console.log(output);

//******************************(QUESTION-07)***************************************

// function countSuccessiveVowels(text) {
//     var count = 0;

//     for (var i = 0; i < text.length - 1; i++) {
//         var ch1 = text[i].toLowerCase();
//         var ch2 = text[i + 1].toLowerCase();

//         switch (ch1) {
//             case "a":
//             case "e":
//             case "i":
//             case "o":
//             case "u":
//                 switch (ch2) {
//                     case "a":
//                     case "e":
//                     case "i":
//                     case "o":
//                     case "u":
//                         count++;
//                         break;
//                 }
//                 break;
//         }
//     }

//     return count;
// }

// var sentence = "Read this application.";
// var result = countSuccessiveVowels(sentence);

// console.log("Number of successive vowels: " + result);

//******************************(QUESTION-08)***************************************

// function toMeters(km) {
//     console.log("Distance in meters: " + (km * 1000));
// }

// function toFeet(km) {
//     console.log("Distance in feet: " + (km * 3280.84));
// }

// function toInches(km) {
//     console.log("Distance in inches: " + (km * 39370.1));
// }

// function toCentimeters(km) {
//     console.log("Distance in centimeters: " + (km * 100000));
// }

// var distance = parseFloat(prompt("Enter distance between two cities (in km):"));

// toMeters(distance);
// toFeet(distance);
// toInches(distance);
// toCentimeters(distance);

//******************************(QUESTION-09)***************************************

// function calculateOvertime(hoursWorked) {
//     var overtimePay = 0;

//     if (hoursWorked > 40) {
//         var overtimeHours = hoursWorked - 40;
//         overtimePay = overtimeHours * 12;
//     }

//     return overtimePay;
// }

// var hours = parseInt(prompt("Enter total hours worked:"));

// var pay = calculateOvertime(hours);

// console.log("Overtime Pay: Rs. " + pay);

//******************************(QUESTION-10)***************************************

var amount = parseInt(prompt("Enter amount to withdraw (in hundreds):")) * 100;

var notes100 = 0;
var notes50 = 0;
var notes10 = 0;

notes100 = Math.floor(amount / 100);
amount = amount % 100;

notes50 = Math.floor(amount / 50);
amount = amount % 50;

notes10 = Math.floor(amount / 10);

console.log("100 Rupee Notes: " + notes100);
console.log("50 Rupee Notes: " + notes50);
console.log("10 Rupee Notes: " + notes10);




