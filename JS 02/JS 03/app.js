//  ------------------------------------------------------------
// ----------------CHAPTER 9-TO-11------------------------------
//  ------------------------------------------------------------

// -------------------QUESTION-01------------------------

// var cityName =prompt("Enter your city name?");
//  if(cityName === "karachi")
//  {
//      console.log("Welcome to Karachi the city of light")
//  }

// -------------------QUESTION-02-------------------------

// var gender =prompt("Enter your gender?");
// if(gender === "male")
// {
//     console.log("Good Morning Sir");    
// }
// if(gender === "female")
// {
//     console.log("Good Morning Ma'am");
// }

// ---------------------QUESTION-03-------------------------

// var Red ="Must Stop";
// var Yellow ="Ready To Move";
// var Green ="Move Now";

// var user_input = prompt("Enter The Signal Color")

// if(user_input === "Red")
// {
//     console.log("Must Stop");
// }
// if(user_input === "Yellow")
// {
//     console.log("Ready To Move");
// }
// if(user_input === "Green")
// {
//     console.log ("Move Now");
// }

// ---------------------QUESTION-04----------------------

// var fuel_In_litre;

// fuel_In_litre = prompt("Enter Your Fuel Reading..!")

// if(fuel_In_litre<=0.25)
// {
//     console.log("Please refill the fuel in your car...");
// }

// --------------------QUESTION-05----------------------
    
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// if("car" < "cat"){
// alert("car is smaller than cat");
// }

// ---------------------QUESTION-06----------------------

// var total_mark = 300;

// var subject01_obtain =Number(prompt("enter marks of first Subject!"))
// var subject02_obtain =Number(prompt("enter marks of Second Subject!"))
// var subject03_obtain =Number(prompt("enter marks of Third Subject!"))

// var obtain_marks_total = (subject01_obtain + subject02_obtain + subject03_obtain)
// var percentage = (obtain_marks_total/total_mark)*100;

// console.log(percentage)
// if(percentage >= 80)
// {
//    console.log("Total marks : " + total_mark)
//    console.log("Marks obtained : " + obtain_marks_total)
//    console.log("Grade : A+ " )
//    console.log("Remarks : Excellent")
// }
// if(percentage >= 70)
// {
//    console.log("Total marks : " + total_mark)
//    console.log("Marks obtained : " + obtain_marks_total)
//    console.log("Grade : A ")
//    console.log("Remarks : Good")
// }
// if(percentage >= 60)
// {
//    console.log("Total marks : " + total_mark)
//    console.log("Marks obtained : " + obtain_marks_total)
//    console.log("Grade : B ")
//    console.log("Remarks : You need to improve")
// }

// if(percentage <= 60)
// {
//    console.log("Total marks : " + total_mark)
//    console.log("Marks obtained : " + obtain_marks_total)
//    console.log("Grade :  Fail")
//    console.log("Remarks : Sorry")
// }

// ----------------------QUESTION-07---------------------

// var secretNumber = 5;
// var userNumber = Number(prompt("Enter Number Between 1 and 10!"))
// if( userNumber === secretNumber)
// {
//     console.log("Bingo! Correct Answer");
// }
// if(userNumber+1 === secretNumber)
// {
//     console.log("Close enough to the correct answer")
// }
// else
// {
//     console.log("Try again!")
// }

// ---------------------QUESTION-08---------------------

// var userNumber = Number(prompt("Enter your Number to check it can be divide by 3 or not"));

// if((userNumber/3)=== 0)
// {
//     console.log("Your Number can be divided by 3")
// }
// else
// {
//     console.log("Your Number can not be divided by 3")
// }

// ----------------------QUESTION-09--------------------

// var userNumber = Number(prompt("Enter your Number to check its 'Even' or 'Odd' "));

// if((userNumber % 2)=== 0)
// {
//     console.log("Your Number is Even ")
// }
// else
// {
//     console.log("Your Number is Odd ")
// }

// --------------------QUESTION-10---------------------

// var Temp = Number(prompt("Enter the Tempreture Please!"))
// if(Temp >= 40)
// {
//     console.log("It is too hot outside.");
// }
// if(Temp >= 30)
// {
//     console.log("The Weather today is Normal.");
// }
// if(Temp >= 20)
// {
//     console.log("Today's Weather is cool.");
// }
// if(Temp >= 10)
// {
//     console.log("OMG! Today's weather is so Cool.");
// }

// --------------------QUESTION-11------------------------

// var user_Number01 = Number(prompt("Enter your first Number to Calculation"));
// var user_Number02 = Number(prompt("Enter your Second Number to Calculation"));
// var user_Operator = prompt("Enter desire Symbole for Calculation");

// if(user_Operator === "+")
// {
//     console.log("Addition : "+ (user_Number01+user_Number02));
// }
// if(user_Operator === "-" )
// {
//     console.log("Subtraction : "+(user_Number01-user_Number02));
// }
// if(user_Operator === "*" )
// {
//     console.log("Muiltiplication : "+(user_Number01*user_Number02));
// }
// if(user_Operator === "/" )
// {
//     console.log("Divide : "+(user_Number01/user_Number02));
// }
// if(user_Operator === "%" )
// {
//     console.log("Remainder : "+(user_Number01%user_Number02));
// }



// ------------------------------------------------------------
// ---------------------CHAPTER 12-to-13-----------------------
// ------------------------------------------------------------

//----------------------QUESTION-01---------------------------

// var userInput = prompt("Enter any Character or Number to check");

// var c = userInput.charAt(0)
// var ascii = c.charCodeAt(0);
// if(!userInput)
// {
//     console.log("Please enter a valid character")
// }
// else if(ascii >=48 && ascii <=57 )
// {
//     console.log("you entered a Number");
// }
// else if(ascii >=97 && ascii <=122)
// {
//     console.log("you entered a lower-case character")
// }
// else if(ascii >=65 && ascii <=90)
// {
//     console.log("you entered a upper-case character")
// }
// else
// {
//  console.log("you enter a symbol ");
// }


//----------------------QUESTION-02-------------------------

// var user_Number_01 = Number(prompt("Enter the first Number to compare :"))
// var user_Number_02 = Number(prompt("Enter the second Number to compare :"))

// if(!user_Number_01 || !user_Number_02  )
// {
//   console.log("Number are Missing! \nPlease enter valid number")
// }
// else if(user_Number_01 > user_Number_02)
// {
//     console.log(user_Number_01 +" is greater than " + user_Number_02);
// }
// else if(user_Number_02 > user_Number_01)
// {
//     console.log(user_Number_02 +" is greater than " + user_Number_01);
    
// }
// else if(user_Number_01 === user_Number_02)
// {
//     console.log(user_Number_02 +" is greater than " + user_Number_02);
    
// }

//----------------------QUESTION-03-----------------------

// var user_input = Number(prompt("Enter a Number to Check its Positive or Nagative Number"));

// if(user_input > 0)
// {
//     console.log("Your Number is a Positive Number")
// }
// else if(user_input < 0)
// {
//     console.log("Your Number is a Negative Number")
// }
// else if(user_input === 0)
// {
//     console.log("Your Number is a  is Zero")
// }
// else {
//     console.log("Not a Number")
// }

//----------------------QUESTION-04-----------------------

// var user_input = prompt("Enter Character to See its Vowel or Consonant") ;

// var ch = user_input.charAt(0);
// var ch_loc = ch.toLowerCase();
// if(!user_input)
// {
//     console.log("Enter a valid character")
// }
// else if(ch_loc === "a" || ch_loc === "i"  || ch_loc === "e"  || ch_loc === "o"  || ch_loc === "u"  )
// {
//     console.log("Your Character is Vowel");
// }
// else if(ch.charCodeAt(0) >=48 || ch.charCodeAt(0) <=57)
// {
//     console.log("Your Entered A Number Please Enter A Character!")
// }
// else 
// {
//     console.log("Your Character is Consonant");
// }

//---------------------QUESTION-05--------------------------

// var Ac_Password = "112233";
// var userPassword = prompt("Please enter your password");

// if(userPassword === "")
// {
//     console.log("Please enter your password!")
// }
// else if(userPassword === Ac_Password)
// {
//  console.log("Correct! The Password you Entered matches the original password" )
// }
// else {
//     console.log("Incorrect password")
// }

//----------------------QUESTION-06-------------------------

/// Fixing the if and else statement

//    Before =>

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

//   After =>

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// console.log(greeting);
// }
// else
// {
// greeting = "Good evening";
// console.log(greeting);
// }

//-----------------------QUESTION-07-----------------------

// var userTime = prompt("Enter a time in 24 format Example 13 = 1pm");

// if(!userTime || userTime.length <=3 )
// {
//     console.log("Please Entern valid 4 digit Number Example 1200 or 2300")
// }
// else if (userTime >= 0 && userTime < 1200)
// {
//  console.log("Good morning!");
// }
// else if (userTime >= 1200 && userTime < 1700)
// {
//  console.log("Good afternoon");
// }
// else if(userTime >=1700 && userTime < 2100)
// {
//     console.log("Good evening!")
// }
// else if(userTime>=2100 && userTime <=2359)
//     console.log("Good night!")
// else {
//     console.log("entered  invalid time")
// }

// -------------------------------------------------------------------------------------------------
// ---------------------------END-------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------