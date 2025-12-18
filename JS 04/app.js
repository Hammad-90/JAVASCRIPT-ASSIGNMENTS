 //                 Chapter 14-to-16

//  -------------------Question-01-----------------------

// var students = [ ];

//  -------------------Question-02-----------------------

// var students = { };

//  -------------------Question-03-----------------------

// var str_string = ["Hammad","Ali","Hamza"]

//  -------------------Question-04-----------------------

// var str_numbers = [10, 20, 25, 15,]

//  -------------------Question-05-----------------------

// var str_boolean = [ true , false]

//  -------------------Question-06-----------------------

// var str_mixarray = ["Hammad" , true , 50 , "Hi"]

//  -------------------Question-07-----------------------

// var Qualifications = ["SSC","HSC","BCS","BS","BCOM","MS","PHD","MS"];

//  -------------------Question-08-----------------------

// var students_name = ["Hamid" , "Ali" ,"Salman"]

// var students_percentage = [64,46,96]

// console.log("Score of " + students_name[0] + " 320 " + "." + " Percentage : "+ students_percentage[0]+ "%")
// console.log("Score of " + students_name[1] +" 230 " +  "." + " Percentage : "+ students_percentage[1]+ "%")
// console.log("Score of " + students_name[2] +" 480 " +  "." + " Percentage : "+ students_percentage[2]+ "%")

//  -------------------Question-09-----------------------

// var colors = ["black" , "white" , "pink"]
// console.log("Array Before :")
// console.log("colors")

//  -------------------A-----------------------

// var user_color = prompt("Enter your color!...")
//  colors.unshift(user_Color);
// console.log("Your color has been Added at start of Array ")

//  -------------------B-----------------------

// var user_Color = prompt("Enter your color !...")
// colors.push(user_Color);
// console.log("Your color has been Added at end of Array ")

//  -------------------c-----------------------

// var colors = ["Red" , "Yellow"]
// colors.unshift("user_color")
// console.log("two more colors have been Added at start of Array")

//  -------------------d-----------------------

// colors.shift(0)
// console.log("first color is been deleted from array");
// console.log(colors)

//  -------------------e-----------------------

// colors.pop(0)
// console.log("last color is been deleted from array");
// console.log(colors)

//  -------------------f-----------------------

// var user_index = prompt("Enter index Number to added!...")
// var user_Color = prompt("Enter your color !...")
// colors[user_index] = user_Color;
// console.log("Your color has been added at Index " + user_index +" and color name : " +
// user_Color)
// console.log(colors);

// --------------------g-----------------------

// var user_index = prompt("Enter the index Number to deleted!...")
// var user_count = prompt("Enter the Numeber of item to deleted!...")

// colors.splice(user_index,user_count)
// console.log(colors)


//  -------------------Question-10-----------------------

// var student_score = [320,230,480,120]
// console.log(student_score)
// var sort_student_score = student_score.sort();
// console.log( sort_student_score)

// ---------------------QUESTION (11)---------------------------------------

// var cites  = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// var selected_cites = cites.slice(2,4)
// console.log("Selected cites list:")
// console.log(selected_cites)

// ---------------------QUESTION (12)---------------------------------------

// var arr = ["This ", " is ", " my ", " cat"];
// console.log(arr);
// var joined_arr = arr.join(' ');
// console.log(joined_arr);

// ---------------------QUESTION (13)---------------------------------------

// var colors = [];
// colors.push("red");
// console.log("These color are added : "+colors)
// colors.push("green");
// console.log("These color are added : "+colors)
// colors.push("blue");
// console.log("These color are added : "+colors)


// console.log("out : "+colors.shift())
// console.log("out : "+colors.shift())
// console.log("out : "+colors.shift())



// ---------------------QUESTION (14)---------------------------------------
 
// var colors = [];
// colors.push("red");
// console.log("These color are added : "+colors)
// colors.push("green");
// console.log("These color are added : "+colors)
// colors.push("blue");
// console.log("These color are added : "+colors)


// console.log("out : "+colors.pop())
// console.log("out : "+colors.pop())
// console.log("out : "+colors.pop())


// ---------------------QUESTION (15)---------------------------------------

var phone_manufacturers = ["apple","samsung","motorola","nokia","sony","haier"]
// document.write("<select>")
// document.write("<option>" + phone_manufacturers[0] + "</option>")
// document.write("<option>" + phone_manufacturers[1] + "</option>")
// document.write("<option>" + phone_manufacturers[2] + "</option>")
// document.write("<option>" + phone_manufacturers[3] + "</option>")
// document.write("<option>" + phone_manufacturers[4] + "</option>")
// document.write("<option>" + phone_manufacturers[5] + "</option>")
// document.write("</select>")