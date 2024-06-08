var radioButton1 = document.getElementById("option1");
var radioButton2 = document.getElementById("option2");
var radioButton3 = document.getElementById("option3");
var radioButton4 = document.getElementById("option4");
var radioButton5 = document.getElementById("option5");

var clickableElement1 = document.getElementById("option1-box");
var clickableElement2 = document.getElementById("option2-box");
var clickableElement3 = document.getElementById("option3-box");
var clickableElement4 = document.getElementById("option4-box");
var clickableElement5 = document.getElementById("option5-box");


var classD = document.getElementById("class-d");
var classC = document.getElementById("class-c");
var classB = document.getElementById("class-b");
var classA = document.getElementById("class-a");
var classS = document.getElementById("class-s");

classC.style.display = "none"
classB.style.display = "none"
classA.style.display = "none"
classS.style.display = "none"

function hideAll() {
    classD.style.display = "none";
    classC.style.display = "none";
    classB.style.display = "none";
    classA.style.display = "none";
    classS.style.display = "none";
}

clickableElement1.addEventListener("click", function () {
    radioButton1.checked = true;
    hideAll();
    classD.style.display = "block";
});

// clickableElement2.addEventListener("click", function () {
//     radioButton2.checked = true;
//     if (classC.style.display === "none") {
//         classC.style.display = "block";
//         classD.style.display = "none";
//     } 
//     else {
//         classD.style.display = "none";
//     }
// });

clickableElement2.addEventListener("click", function () {
    radioButton2.checked = true;
    hideAll();
    classC.style.display = "block";
});

clickableElement3.addEventListener("click", function () {
    radioButton3.checked = true;
    hideAll();
    classB.style.display = "block";
});

clickableElement4.addEventListener("click", function () {
    radioButton4.checked = true;
    hideAll();
    classA.style.display = "block";
});

clickableElement5.addEventListener("click", function () {
    radioButton5.checked = true;
    hideAll();
    classS.style.display = "block";
});
