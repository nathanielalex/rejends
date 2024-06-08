var name_validation = false;
var email_validation = false;
var password_validation = false;
var gender_validation = false;
var terms_validation = false;
var age_validation = false;

//name must be two words
document.getElementById("input_name").addEventListener("keyup", function(){
    var name = document.getElementById("input_name").value;
    // if(name.length < 2) {
    //     document.getElementById("name_status").innerHTML = "Invalid Length!";
    // }
    var flag = false;
    if(name.length > 2) {
        for(var i = 0; i<name.length-2; i++) {
            if(isNaN(name[i]) && name[i+1] == ' ' && isNaN(name[i+2])) {
                flag = true;
                break;
            }
        }
        if(flag == false) {
            name_validation = false
        } else {
            name_validation = true
        }
    } else {
        name_validation = false;
    }
    if(name_validation == false) {
        document.getElementById("name_status").innerHTML = "Invalid Name!";
    }
    if(name_validation == true) {
        document.getElementById("name_status").innerHTML = " ";
    }    
});

//must have @ and ends with .com
document.getElementById("input_email").addEventListener("keyup", function(){
    var email = document.getElementById("input_email").value;

    var flag1 = false;
    var flag2 = false;

    for(var i = 0; i<email.length-3; i++) {
        if(email[i] == '@') {
            flag1 = true;
            break;
        }
        // else if(email[i] == '.') {
        //     if(email[i+1] == 'c' && email[i+2] == 'o' && email[i+3] == 'm') {
        //         flag2 = true;
        //     }
        // }
    }
    
    if(email[email.length-4] == '.' && email[email.length-3] == 'c' && 
    email[email.length-2] == 'o' && email[email.length-1] == 'm') {
        flag2 = true;
    }
    
    if(flag1 == false || flag2 == false) {
        email_validation = false;
    } else if (flag1 == true && flag2 == true){
        email_validation = true;
    }
    
    if(email_validation == false) {
        document.getElementById("email_status").innerHTML = "Invalid Emali!";
    }
    if(email_validation == true) {
        document.getElementById("email_status").innerHTML = " ";
    }    
});


// harus alphanumeric
document.getElementById("input_password").addEventListener("keyup", function(){
    var password = document.getElementById("input_password").value;
    var flag = false;
    
    for(var i = 0; i<password.length; i++) {
        if(!isNaN(password[i])) {
            flag = true;
            break;
        }
    }

    if(flag == true && password.length > 8) {
        password_validation = true;
    } else {
        password_validation = false;
    }

    if(password_validation == false) {
        document.getElementById("password_status").innerHTML = "Invalid Password!";
    }
    if(password_validation == true) {
        document.getElementById("password_status").innerHTML = " ";
    }    
});





// document.getElementById("gender1").addEventListener("click", function(){
//     radioButton1.checked == true
//     document.getElementById("gender_status").innerHTML = "a ";
//     if(radioButton1.checked == true || radioButton2.checked == true){
//         document.getElementById("gender_status").innerHTML = "a ";
//     }
// });

// document.getElementById("gender2").addEventListener("click", function(){
//     radioButton2.checked == true
    
//     if(radioButton1.checked == true || radioButton2.checked == true){
//         document.getElementById("gender_status").innerHTML = "a ";
//     }
// });



// document.getElementById("input_age").addEventListener("keyup", function() {
//     var age_txt = document.getElementById("input_age").value;
//     var flag = true;
   
//     for(var i = 0; i<age_txt.length; i++) {
//         if(isNaN(age_txt[i])) {
//             flag = false;
//             break;
//         }
//     }
//     if(flag == false) {
//         document.getElementById("age_status").innerHTML = "must be a number";
//     } else {
//         var age = parseInt(document.getElementById("input_age").value);
//         if(age < 17) {
//             document.getElementById("age_status").innerHTML = "must be 17 above";
//         } else {
//             document.getElementById("age_status").innerHTML = " ";
//             age_validation = true;
//         }

//     }

// });

document.getElementById("input_dob").addEventListener("keyup", function() {
    var dob_txt = document.getElementById("input_dob").value;
    
    
    // var flag = true;
    // dd-mm-yyyy
    if(dob_txt.length != 10) {
        document.getElementById("dob_status").innerHTML = "Invalid Format!";
    } else {
        var dobArray = dob_txt.split('-');
        if(dobArray.length != 3) {
            document.getElementById("dob_status").innerHTML = "Invalid Format!";
        } else {
            var number = 0;

            for(var i = 0; i<3; i++) {
                if(isNaN(dobArray[i]) == false) {
                    number++;
                }
            }
            if(number == 3) {
                var date = parseInt(dobArray[0]);
                var month = parseInt(dobArray[1]);
                var year = parseInt(dobArray[2]);
                const d = new Date();
                var age = d.getFullYear() - year - 1;
                if(d.getMonth() + 1 > month) {
                    age += 1;
                }
                else if(d.getMonth() + 1 == month) {
                    if(d.getDate() >= date) {
                        age += 1;
                    }
                }

                if(age < 17) {
                    document.getElementById("dob_status").innerHTML = "must be 17 above";
                } else {
                    document.getElementById("dob_status").innerHTML = " ";
                    age_validation = true;
                }

            } else {
                document.getElementById("dob_status").innerHTML = "must be a number";
            }
        }
    }
   
    // for(var i = 0; i<age_txt.length; i++) {
    //     if(isNaN(age_txt[i])) {
    //         flag = false;
    //         break;
    //     }
    // }
    // if(flag == false) {
    //     document.getElementById("age_status").innerHTML = "must be a number";
    // } else {
    //     var age = parseInt(document.getElementById("input_age").value);
    //     if(age < 17) {
    //         document.getElementById("age_status").innerHTML = "must be 17 above";
    //     } else {
    //         document.getElementById("age_status").innerHTML = " ";
    //         age_validation = true;
    //     }

    // }

});


var radioButton1 = document.getElementById("gender1");
var radioButton2 = document.getElementById("gender2");

function gender_validate() {
    if(radioButton1.checked == true || radioButton2.checked == true){
        document.getElementById("gender_status").innerHTML = " ";
        gender_validation = true;
    }
}

var checkbox = document.getElementById("checkbox-element");



function terms_validate() {
    if(checkbox.checked == true){
        document.getElementById("terms_status").innerHTML = " ";
        terms_validation = true;
    }
}



function validateAll() {
    //klo invalid juga gabisa submit; prompt retry
    var password = document.getElementById("input_password").value;
    var age = document.getElementById("input_dob").value;
    var email = document.getElementById("input_email").value;
    var name = document.getElementById("input_name").value;

    if (password === null || password.trim() === "") {
        document.getElementById("password_status").innerHTML = "Cannot be empty";
    } 
    if (name === null || name.trim() === "") {
        document.getElementById("name_status").innerHTML = "Cannot be empty";
    } 
    if (age === null || age.trim() === "") {
        document.getElementById("dob_status").innerHTML = "Cannot be empty";
    } 
    if (email === null || email.trim() === "") {
        document.getElementById("email_status").innerHTML = "Cannot be empty";
    } 

    if(radioButton1.checked == false && radioButton2.checked == false) {
        document.getElementById("gender_status").innerHTML = "Must choose 1";
    } 

    if(checkbox.checked == false) {
        document.getElementById("terms_status").innerHTML = "Must agree";
    } 
    // if(terms_validation && gender_validation && name_validation && age_validation &&
    //     password_validation && email_validation) {

    // }

    if(name_validation == true && email_validation == true && password_validation == true &&
        age_validation == true && gender_validation == true && terms_validation == true
    ) {
        alert("registration successfull");
        window.location.href = "HomePage.html";
    }
}