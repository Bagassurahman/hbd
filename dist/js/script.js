// Login
function em(){
    var a = document.getElementById("email").value;
    var b = document.getElementById("pass").value;
    var c = location.href;

    if(a == "nadiapputriirah@gmail.com" && b == "09112020"){
        alert("Welcome!");
        window.open('dist/hbd/index.html');
    }
    if(a == "" || b == ""){
        alert("Isi dong");
    }
    else{
        alert("Masukkin yang bener woy");
    }
}
// Hbd
