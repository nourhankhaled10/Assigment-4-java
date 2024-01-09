var user =[];
user = JSON.parse(localStorage.getItem('user'));


var signInEmail =document.getElementById('signEmail');
var signInPassword =document.getElementById('signPassword');

function add () {
    if (signInEmail.value == '' || signInPassword.value == ''){
    document.getElementById('msg').innerHTML = `<p class =' text-center fs-5'>All inputs is requried </p>`

}else{
checkUser();

}
}

function checkUser(){
    for( i = 0 ; i< user.length ; i++) {
    if (signInEmail.value == user[i].email && signInPassword.value == user[i].password){
var data = user[i].name;
localStorage.setItem('userName',data);
window.location.href='../home/index.html';
break;
}
}
}
