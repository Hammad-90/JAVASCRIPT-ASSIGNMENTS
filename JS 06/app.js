// ------------------------CHAPTER-21-TO-25---------------------------

// --------------------------QUESTION-01---------------------------

// var First_name = prompt("Enter Your First Name:")

// var Last_name = prompt("Enter Your Last Name:")

// console.log(First_name + " " + Last_name);

// --------------------------QUESTION-02---------------------------

// var user_input = prompt("Enter your favorite mobile model:")

// var user_input_lenght = user_input.length;

// console.log(user_input);
// console.log("lenght of your string : " + user_input_lenght);

// --------------------------QUESTION-03---------------------------

// var country = "Pakistani";

// var country_one = country.indexOf('n');

// console.log(country);

// console.log("Index of 'n' : " + country_one);

// --------------------------QUESTION-04---------------------------

// var last = "Hello World";

// var last_word = last.lastIndexOf('l');

// console.log(last);

// console.log("last index of 'l':" + last_word);

// --------------------------QUESTION-05---------------------------

// var country_name = "pakistani";

// console.log("String : "+country_name);

// var index = country_name.charAt(3);

// console.log("Character at index 3 : "+index)

// --------------------------QUESTION-06---------------------------

// var first_name = prompt("Enter Your First Name:")

// var last_name = prompt("Enter Your Last Name:")

// var full_name = first_name.concat("",last_name)

//  console.log(full_name);

// --------------------------QUESTION-07---------------------------

// var city = "Hyderabad";

// console.log("City : " + city);

// var rep_city = city.replace("Hyder","Islam")

// console.log("After replacement : " + rep_city);

// --------------------------QUESTION-08---------------------------

// var message = "Ali and Sami are best friends. They play cricket and football together.";

// var rep_message = message.replace(/and/g ,"&")

// console.log(rep_message);

// --------------------------QUESTION-09---------------------------

// var num = "472";

// console.log("Value : "+num);

// console.log("Type : "+ typeof num);

// var num  = Number(num);

// console.log("Value : "+num)

// console.log("Type : " + typeof num)

// --------------------------QUESTION-10---------------------------

// var user_input = prompt("Enter your favorite dry fruit : ")

// user_input = user_input.toUpperCase();

// console.log(user_input);

// --------------------------QUESTION-11---------------------------

// var userInput = prompt("Enter Any Word ...!")

//  console.log("User-Input : " + userInput)

//  var first_letter = userInput.slice(0,1);

//  var or_letter = userInput.slice(1)

//  var first_capital = first_letter.toUpperCase();

//  var or_lower = or_letter.toLowerCase();

//  var title_case = first_capital + or_lower;

//  console.log("Output : "+title_case);

// --------------------------QUESTION-12---------------------------

// var Number = 35.36 ;

// console.log("Number : " + Number);

// var result = (Number.toString().replace('.',''));

// console.log("Result : " + result);

// --------------------------QUESTION-13---------------------------

// var user_name = prompt("Enter your name");
// var isValid =true;
// for(var i= 0; i<user_name.length;i++ )
// {
//     var code = user_name.charCodeAt(i);
//     if(code === 33 || code === 44 || code === 46 || code === 64)
//     {
//        isValid=false;
//     }
// }

// if(isValid)
// {
//     console.log("your word is valid ")
// }
// else 
// {
//     console.log("your word is not valid ")
// }

// --------------------------QUESTION-14---------------------------

// var Bakery_items = ["cake","apple pie","cookie","chips","patties"];

// console.log("Bakery Item : " + Bakery_items );

// var user_item = prompt("Avaiable items : (cake , apple pie ,cookie , chips , patties)\n Enter to search from above or else");
// var user_item= user_item.toLowerCase();
// var user_item_index = Bakery_items.indexOf(user_item)
// if (user_item_index !== -1)
// {
//      console.log("Your item is found in the list ")
//      console.log("At Index : " + user_item_index)
// }
// else
// {
//      console.log("Your item is not found in the list. ")

// }

// --------------------------QUESTION-15---------------------------

// var password =  prompt("Enter a strong password");

// var isValid = true;

// if (password.length < 6) {
//   console.log("Password must be at least 6 characters long");
//   isValid = false;
// }

// var first = password.charCodeAt(0);
// if (first >= 48 && first <= 57) {
//   console.log("Password should not start with a number");
//   isValid = false;
// }

// var hasLetter = false;
// var hasNumber = false;

// for (var i = 0; i < password.length; i++) {
//   var c = password.charCodeAt(i);

//   if (c >= 48 && c <= 57) {
//     hasNumber = true;
//   } 
//   else if ((c >= 65 && c <= 90) || (c >= 97 && c <= 122)) {
//     hasLetter = true;
//   } 
//   else {
//     console.log("Invalid character found");
//     isValid = false;
//     break;
//   }
// }

// if (isValid) {
//   if (hasLetter && hasNumber) {
//     console.log("Password is valid!");
//   } else {
//     console.log("Password must contain both letters AND numbers");
//   }
// }

// --------------------------QUESTION-16---------------------------

// var university = "University of the karachi"

// var uni_name = university.split("");

// for(var i = 0; i <= uni_name.length; i++){
//     console.log(uni_name [i]);
// }

// --------------------------QUESTION-17---------------------------

// var user_input = "pakistan"

// console.log("User Input : " + user_input);

// var last_Char = user_input.charAt(user_input.length-1);

// console.log("Last charracter of the input : " + last_Char)

// --------------------------QUESTION-18---------------------------


var str = "The quick brown fox jumps over the lazy dog.";

str = str.toLowerCase();

var a_str = str.split(" ");

var count = 0;

for (var i = 0; i < a_str.length; i++) {
    if (a_str[i] === "the") {
        count++;
    }
}

console.log("Text is: " + str);
console.log("There are " + count + " occurrence(s) of the word 'the'.");








