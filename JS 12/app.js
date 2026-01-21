// ******************************************CHAPTER-49-TO-52**********************************************

// ********************************************QUESTION-01**********************************************

// function showData() {
//         var name = document.getElementById("name").value;
//         var email = document.getElementById("email").value;
//         var password = document.getElementById("password").value;

//         document.getElementById("result").innerHTML =
//             "<h3>Submitted Data</h3>" +
//             "<p><b>Name:</b> " + name + "</p>" +
//             "<p><b>Email:</b> " + email + "</p>" +
//             "<p><b>Password:</b> " + password + "</p>";
//     }

// ********************************************QUESTION-02**********************************************

//  function readMore() {
//         var dots = document.getElementById("dots");
//         var moreText = document.getElementById("moreText");
//         var btn = document.getElementById("btn");

//         if (dots.style.display === "none") {
//             dots.style.display = "inline";
//             moreText.style.display = "none";
//             btn.innerHTML = "Read more";
//         } else {
//             dots.style.display = "none";
//             moreText.style.display = "inline";
//             btn.innerHTML = "Read less";
//         }
//     }

// ********************************************QUESTION-03**********************************************

var selectedRow = null;

    function addStudent() {
        var name = document.getElementById("name").value;
        var clas = document.getElementById("class").value;
        var age = document.getElementById("age").value;

        var table = document.getElementById("studentTable");
        var row = table.insertRow(-1);

        row.insertCell(0).innerHTML = name;
        row.insertCell(1).innerHTML = clas;
        row.insertCell(2).innerHTML = age;
        row.insertCell(3).innerHTML =
            '<button onclick="editRow(this)">Edit</button> ' +
            '<button onclick="deleteRow(this)">Delete</button>';

        document.querySelector("form").reset();
    }

    function deleteRow(btn) {
        var row = btn.parentNode.parentNode;
        row.remove();
    }

    function editRow(btn) {
        selectedRow = btn.parentNode.parentNode;
        document.getElementById("editForm").style.display = "block";

        document.getElementById("editName").value = selectedRow.cells[0].innerHTML;
        document.getElementById("editClass").value = selectedRow.cells[1].innerHTML;
        document.getElementById("editAge").value = selectedRow.cells[2].innerHTML;
    }

    function updateStudent() {
        selectedRow.cells[0].innerHTML = document.getElementById("editName").value;
        selectedRow.cells[1].innerHTML = document.getElementById("editClass").value;
        selectedRow.cells[2].innerHTML = document.getElementById("editAge").value;

        document.getElementById("editForm").style.display = "none";
    }