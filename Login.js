function func(){

    var email = document.getElementById("username").value;
    var pass = document.getElementById("Password").value;
    if (email == 'tushargoyal334@gmail.com' && pass == 'Tushar@123') {
        alert("Sucsses  full");
        window.location.assign("Home.html");
    }
    else{
        alert("wrong Input");
    }
}


