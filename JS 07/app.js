// ------------------------CHAPTER-26-TO-30-------------------------------------

// ---------------------------QUESTION-01-------------------------------

// var user_input = prompt("Enter positive integer : ")

// var user_input = 3.45214 ;
// console.log("Number : "+user_input);

// var round_input = Math.round(user_input)
// console.log("Round off value is : "+round_input);

// var floor_input = Math.floor(user_input)
// console.log("Floor value : "+floor_input);

// var ceil_input = Math.ceil(user_input)
// console.log("Ceil value : "+ceil_input);

// ---------------------------QUESTION-02-------------------------------

// var user_input = prompt("Enter negative integer : ")

// var user_input = -2.673;
// console.log("Number : "+user_input);

// var round_input = Math.round(user_input)
// console.log("Round off value is : "+round_input);

// var floor_input = Math.floor(user_input)
// console.log("Floor value : "+floor_input);

// var ceil_input = Math.ceil(user_input)
// console.log("Ceil value : "+ceil_input);

// ---------------------------QUESTION-03-------------------------------

// var number = prompt("Enter a Nagative Value to convert in positive value")
// console.log("User_Input : "+number);

// var conv_num = Math.abs(number);
// console.log("The absolute value is : "+conv_num)

// ---------------------------QUESTION-04-------------------------------

// var user_value = 6;

// var ran_dec = Math.random();

// var first_value = (ran_dec*user_value) + 1;
// console.log(first_value);

// var floor_value = Math.floor(first_value)
// console.log("Output are : "+floor_value);

// ----------------------------METHOD-02--------------------------------

// var value = Math.floor(Math.random() * 6) + 1;

// console.log("The value is : "+ value);

// ---------------------------QUESTION-05-------------------------------

// var coin = 2;

// var ran_coin = Math.floor(Math.random()*coin)+1;

// console.log(ran_coin === 1 ? "Head" : "Tale")

// ---------------------------QUESTION-06-------------------------------

// var ran_num =  Math.floor(Math.random()*100)+1;

// console.log("Here are the Random numbers under 100 : "+ran_num);

// ---------------------------QUESTION-07-------------------------------

// var user_input = prompt("Enter your body weight : ")

// var weight = parseFloat(user_input);

// console.log("Your weight is : " + weight + "kilograms");

// ---------------------------QUESTION-08-------------------------------

var secret_number = 7;

var sec_num = Math.floor(Math.random()*10)+1;

var user_input = prompt("Enter the secret number between 1 to 10");

if(user_input === sec_num){
    alert("Congratulations...! you guessed the correct number");
} else {
    alert("Sorry...! The secret number was " + secret_number);
}

console.log("Your Random  Number is : "+user_input)









