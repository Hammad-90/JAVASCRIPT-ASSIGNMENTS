// ----------------CHAPTER_17-TO-20---------------------

// -------------------QUESTION-01----------------------

// var MultiArray = [[]];

// -------------------QUESTION-02----------------------

// var Matrix = [
//     [0 , 1 , 2 , 3],
//     [1 , 0 , 1 , 2],
//     [2 , 1 , 0 , 1]
// ];

// for (var i = 0; i < Matrix.length; i++) 
//     {
//     console.log(Matrix[i].join(" "));   
// }

// ---------------------QUESTION-03---------------------

// for (var i = 1; i <= 10; i++){
//     console.log(i);
// }

// ---------------------QUESTION-04---------------------

// var Tablenumber = prompt("Enter a Number To Show Its Multiplication Method")
// var Tablelenght = prompt("Enter Lenght Multiplication Method")

// for (var i = 1; i <= Tablelenght; i++){
//     console.log(Tablenumber + "x" + i + "=" + (Tablenumber * i)) ;
// }

// ---------------------QUESTION-05---------------------

// var fruits = ["apple" , "banana" , "mango" , "orange" , "strawberry"]

// for (var i = 0; i <= 4; i++){
//     console.log(i);    
// }


// ---------------------QUESTION-06---------------------

// -----------------------A----------------------------

// var Counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// for (var i = 1; i <= 15; i++){
//      Counting += i + " ";
// }

// console.log(Counting);    

// -----------------------B----------------------------

// var Reversecounting = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// for (var i = 10; i <= 1; i++){
//     Reversecounting += i + " ";
// }

// console.log(Reversecounting);

// -----------------------C----------------------------

// var Even = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// Tablenumber = [2]

//      for (var i = 0; i <= 20; i += 2){
//      Tablenumber += i + ", ";
//     }

//     console.log(Even);

// -----------------------D----------------------------

// var Odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
// Tablenumber = [2]

//      for (var i = 1; i <= 19; i += 2){
//      Tablenumber += i + ", ";
//     }

//     console.log(Odd);

// -----------------------E----------------------------

// var Series = ["2k", "4k", "6k", "8k", "10k", "12k", "14k", "16k", "18k", "20k"]
// Tablenumber = [2]

// for (var i = 2; i <= 20; i += 2){
//  Tablenumber += i + "k, ";
//  }

//  console.log(Series);

// ---------------------QUESTION-07---------------------

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Welcome to Bismillah Bakery...!  What do you want to order Sir / Ma'am...?");
// userInput = userInput.toLowerCase();

// var found = false;

// for (var i = 0; i < A.length; i++) {
//     if (A[i] === userInput) {
//         found = true;
//         alert(userInput + " is available at index " + i + " in our bakery.");
//         break;
//     }
// }

// if (found === false) {
//     alert("We are sorry. " + userInput + " is not available in our bakery.");
// }

// ---------------------QUESTION-08---------------------

// var A = ["24", "53", "78", "91", "12"]

// var largest = A[0];

// for (var i = 1; i < A.length; i++){
//     if (A[i] > largest){
//         largest = A[i];
//     }
// }
// console.log( "The Largest Number Is " , largest);

// ---------------------QUESTION-09---------------------

// var A = ["24", "53", "78", "91", "12"]

// var smallest = A[0];

// for (var i = 1; i < A.length; i++){
//     if (A[i] < smallest){
//         smallest = A[i];
//     }
// }
// console.log( "The smallest Number Is " , smallest);

// ---------------------QUESTION-10---------------------

// var Table = " ";

// for (var i = 5; i <= 100; i += 5 ){
//     Table += i + " ";
// }
// console.log(Table);


// ----------------------------------------------------------------------------
// ----------------------------------END---------------------------------------
// ----------------------------------------------------------------------------