var signUpName =document.getElementById('signName');
var signUpEmail =document.getElementById('signEmail');
var signUpPassword =document.getElementById('signPassword');
var user =[];


if (localStorage.getItem('user')!= null){
    user=JSON.parse(localStorage.getItem('user'))
}else{
    user =[];
}
function add() {
    if (signUpName.value == '' || signUpEmail.value == '' || signUpPassword.value == ''){
        document.getElementById('msg').innerHTML = `<p class =' text-center fs-5'>All inputs is requried </p>`
    } else{
        var obj = {
            name:signUpName.value,
            email:signUpEmail.value,
            password:signUpPassword.value
        }
        user.push(obj);
       window.location.href='../index.html';
        localStorage.setItem('user',JSON.stringify(user));
    }
}