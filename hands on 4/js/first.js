function validate() {
    var name = document.student_form.name;
    var mobile = document.student_form.mobile;
    var email = document.student_form.email;
    var gender = document.student_form.Gender;
    var course = document.student_form.course;
    var batch = document.student_form.batch;
    // console.log(document.student_form.email.value)
    // console.log(batch.length);
    if(name.value.length <= 0){
        alert("Please fill the name field");
        // name.focus();
        return false;
    }
    if(mobile.value.length <= 0){
        alert("Please fill the mobile field");
        // mobile.focus();
        return false;
    }
    if(email.value.length <= 0){
        alert("Please fill the email field");
        email.focus();
        return false;
    }
    if(gender.value.length <= 0){
        alert("Please choose the gender field");
        gender.focus();
        return false;
    }
    if(course.value =="select course"){
        alert("course is required");
        course.focus(); 
        return false;
    }

    var check = false;
    for(var i = batch.length-1; i>=0; i--){
        if(batch[i].checked){
            check = true;
        }
    }
    if(check = false){
        alert("Batch is required");
        return false;
    }
    return false;
}

function validateString(id) {
    var element = document.getElementById(id);
    var regExp = /^[a-zA-Z ]+$/;
    if(!regExp.test(element.value)) {
        alert("Enter valid string name");
        //if error then makes box red
        element.style.border = "2px solid red";
        return false;
    }
    //if no error makes it green
    element.style.border = "2px solid green";
}

function validateNumber(id) {
    var element = document.getElementById(id);
    var regExp = /^[0-9]{10}$/;
    if(!regExp.test(element.value)) {
        // alert("Please provide correct number");
        element.style.border = "2px solid red";
        return false;
    }
    element.style.border = "2px solid green";

}
function validateEmail(id) {
    var element = document.getElementById(id);
    var regExp = /^[a-zA-Z0-9._]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,4}$/;
    if(!regExp.test(element.value)){
        alert("Enter valid email id");
        element.style.border="2px solid red";
        return false;
    }
    element.style.border = "2px solid green";
}