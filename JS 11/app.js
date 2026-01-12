//*****************************CHAPTER-43-TO-48*****************************************

//********************************QUESTION-01******************************************

// document.getElementById("myLink").onclick = function() {
//     alert("Hello! How are you...!");
// };

//********************************QUESTION-02******************************************

// function showMe(mobileName) {
//     alert("You clicked on " + mobileName);
// }

//********************************QUESTION-03******************************************

// function deleteRow(btn) {
//     btn.parentNode.parentNode.remove();
// }

//********************************QUESTION-04******************************************

// function changeImage() {
//     document.getElementById("myImg").src =
//     "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-free-image.jpeg?w=600&quality=80";
// }

// function resetImage() {
//     document.getElementById("myImg").src =
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTIIwmpZbtND-CZjit0Nyajpz5cK9mITajmw&s";
// }

//********************************QUESTION-05******************************************

var count = 0;

function increase() {
    count++;
    document.getElementById("counter").innerHTML = count;
}

function decrease() {
    count--;
    document.getElementById("counter").innerHTML = count;
}

