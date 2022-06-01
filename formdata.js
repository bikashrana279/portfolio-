let send = document.getElementById("send");
send.addEventListener("click", function (e) {
    e.preventDefault();
    // for proper email
    let reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    // console.log("hii");
    let name = document.getElementById("name").value;
    // console.log(name);
    let email = document.getElementById("email").value;
    // console.log(email);
    let message = document.getElementById("message").value;
    // console.log(message);

    // checking form fields on submission
    if (name.trim() == "") {
        document.getElementById("statusmsg1").innerHTML = "<small style='color:red;font-size:1.9rem;'>Please Enter Name !</small>"; 
        $("#name").focus();
        return false;
    } else if (name.length < 3) {
        document.getElementById("statusmsg1").innerHTML = "<small style='color:red;font-size:1.9rem;'>Please enter more than 3 character !</small>"; 
        $("#name").focus();
        return false;
    } else {
        document.getElementById("statusmsg1").innerHTML = " "; 

    }
     if (email.trim() == "") {
        document.getElementById("statusmsg2").innerHTML = "<small style='color:red;font-size:1.9rem;'>Please enter email !</small>";
        $("#name").focus();
        return false;
    } else if (email.trim() != "" && !reg.test(email)) {
        document.getElementById("statusmsg2").innerHTML = "<small style='color:red;font-size:1.9rem;'>Please enter valid email e.g. example@mail.com</small>";

     } else {
        document.getElementById("statusmsg2").innerHTML = " ";

    }
     if (message.trim() == "") {
        document.getElementById("statusmsg3").innerHTML = "<small style='color:red;font-size:1.9rem;'>Please enter message !</small>"; 
        $("#name").focus();
        return false;
    } else {
        // console.log(name);
        // console.log(email);
        // console.log(message);
         window.localStorage.setItem("name", name);
         window.localStorage.setItem("email", email);
         window.localStorage.setItem("message", message);
         document.getElementById("successmsg").innerHTML = "<small style='color:red;font-size:1.9rem;'>catch you letter !</small>"; 
         setTimeout(function () {
             document.getElementById("successmsg").innerHTML = " ";
         },2000);
        clearfield();
    }
    

});

// empty all fields 
function clearfield() {
    // $("#myform").trigger("reset");
    document.getElementById("myform").reset();
    $("#statusmsg1").html(" ");
    $("#statusmsg2").html(" ");
    $("#statusmsg3").html(" ");
}