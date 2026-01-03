// ---------------------------CHAPTER-35-TO-38----------------------------

// -----------------------------QUESTION-01----------------------------

// function nowDate()
// {
// var date = new Date();

// console.log(date);
// }

// nowDate();

// -----------------------------QUESTION-02----------------------------

// function fullName(first_name,last_name)
// {
//   console.log(first_name + " "+ last_name)
// }

// fullName("Muhammad","Hammad")

// -----------------------------QUESTION-03----------------------------

// function add(num1,num2)
// {
//   console.log("Adding " + num1 + " and " + num2)
//   console.log("Result after Adding : " + (num1+num2))
// }

// add(10,5);

// -----------------------------QUESTION-04----------------------------

// function add(a , b)
// {
//     return a + b;
// }

// function sub(a , b)
// {
//     return a - b;
// }

// function mul(a , b)
// {
//     return a * b;
// } 

// function div(a , b)
// {
//     return a / b;
// }

// var num1 = Number(prompt("Enter your first value : "))
// var operator = prompt("Enter operator like ( + , - , * , / ) :")
// var num2 = Number(prompt("Enter your Last value : "))

// var result;

// if (operator === "+"){
//     result = add(num1,num2)
// }
// else if (operator === "-"){
//     result = sub(num1,num2)
// }
// else if (operator === "*"){
//     result = mul(num1,num2)
// }
// else if (operator === "/"){
//     result = div(num1,num2)
// }
// else{
//     alert("Invalid operator")
// }

// alert("Result : "+result)

// -----------------------------QUESTION-05----------------------------

// function square(num1)
// {
//  console.log("Square of " + num1 + " is: " + (num1*num1))
// }
// square(9);

// -----------------------------QUESTION-06----------------------------

// function factorial(n) {
//     if (n < 0) {
//         return "Factorial is not defined for negative numbers";
//     }

//     var fact = 1;
//     for (var i = 1; i <= n; i++) {
//         fact = fact * i;
//     }
//     return fact;
// }

// console.log(factorial(6)); 

// -----------------------------QUESTION-07----------------------------

// function showCounting(start, end) {
//     for (var i = start; i <= end; i++) {
//         console.log(i + " ");
//     }
// }

// showCounting(1, 30);

// -----------------------------QUESTION-08----------------------------
 
// function calculateHypotenuse(base, perpendicular) {

//     function calculateSquare(num) {
//         return num * num;
//     }

//     var baseSquare = calculateSquare(base);
//     var perpendicularSquare = calculateSquare(perpendicular);

//     console.log("Inner Function Perpendicular Square are : " + perpendicularSquare);

//     return Math.sqrt(baseSquare + perpendicularSquare);
// }

// console.log("Outer Function Hypotenuse are : " + calculateHypotenuse(3, 2));

// -----------------------------QUESTION-09----------------------------

// function rectArea(width,height)
// {
//    var Area = width*height;
//    console.log("Width : " + width)
//    console.log("Height : " + height)
//    console.log("The area of Rectangle is : " + Area )
// }

// rectArea(4,7);

// -----------------------------QUESTION-10----------------------------

// var str = "madam";

// var letters = str.split("")
// console.log(letters);

// var letters = letters.reverse("")
// console.log(letters);

// var letters = letters.join("")
// console.log(letters);

// if(str === letters)
// {
//     console.log("This is pandrom Word..!");
// }
// else
// {
//     console.log("This is not pandrom Word..!"); 
// }

// -----------------------------QUESTION-11----------------------------

// console.log("Example string : the quick brown fox");

// function capitalWords(str)
// {
//     var words = str.split(" ");

//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }
//     return words.join(" ");
// }

// var example = 'the quick brown fox';
// console.log("Expected output : "+capitalWords(example));

// -----------------------------QUESTION-12----------------------------

// console.log("Example string : Web Development Tutorial");


//  function findlongWord(str)
// {
//     var words = str.split(" ");

//     var longest = "";

//     for (var i = 0; i < words.length; i++) {
//         if(words[i].length > longest.length){
//             longest = words[i];
//         }
//     }
//     return longest ;
// }

// var example = 'Web Development Tutorial';
// console.log("Expected output: " + findlongWord(example));

// -----------------------------QUESTION-13----------------------------

// function wordIndex(str, char)
// {
//      var letters = str.split("");
//      var index = -1;
//      for(var i = 0 ; i < str.length;i++)
//      {   
//       if(letters[i] === char)
//       {
//         index = i;
//         break;
        
//       }
//      }
//     console.log(char + " at index " + index)
// }
// wordIndex("hammad","m")

// -----------------------------QUESTION-14----------------------------

function circumference(radius)
{
    return  (2*Math.PI*radius).toFixed(5);
}

console.log("Circumference of circle : "+circumference(6))

function circleArea(radius)
{
    return (Math.pow(radius,2)*Math.PI).toFixed(5)
}


console.log("Area of Circle : " +circleArea(7))






