/**
 * Created by Vairoa on 9/21/2015.
 */
function getClasses(elem){

    var x = document.getElementById(elem).className;
    var y = x.split(/\s+/);
    alert("This method returns an array of the classes");
    return y;
}

function displayArray(elem){
    var x = document.getElementById(elem).className;
    var y = x.split(/\s+/);
    var z = y.length;
    var inc = 0;
    while(inc < z){
        alert(y[inc])
        inc++;
    }

}

function addClass(elem, className){

   document.getElementById(elem).className +=className;

}

function validateForm(){

    var user = document.myForm.name.value;
    var email = document.myForm.email.value;
    var pw = document.myForm.password.value;
    var confirm = document.myForm.confirm.value;

    if (user.length == 0){
        document.getElementById('errortext5').innerHTML = "Your username is empty.";
        document.getElementById('username').style.backgroundColor = 'red';
        alert("username empty");
    }
    if (email.length == 0){
        document.getElementById('errortext4').innerHTML = "Your email is empty.";
        document.getElementById('email').style.backgroundColor = 'red';
        alert("email empty");
    }
    if (pw.length == 0){
        document.getElementById('errortext3').innerHTML = "Your password is empty.";
        document.getElementById('password').style.backgroundColor = 'red';
        alert("password empty");
    }
    if (confirm.length == 0){
        document.getElementById('errortext2').innerHTML = "Your confirmation password is empty.";
        document.getElementById('confirm').style.backgroundColor = 'red';
        alert("confirm empty");
    }

    if(pw != confirm){

        document.getElementById('errortext1').innerHTML = "Your password & confirm don't match.";
        document.getElementById('confirm').style.backgroundColor = 'red';
        alert("confirmation password doesn't match password");
    }



}



