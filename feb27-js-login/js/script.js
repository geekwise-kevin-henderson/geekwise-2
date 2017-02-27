var login = document.getElementById('login'),
loginForm =
'<form>' +
  '<h1>PLZ Login</h1>' +
  '<label>' +
    '<span>username</span>' +
    '<input type="text" placeholder="username">' +
  '</label>' +
  '<label>' +
    '<span>password</span>' +
    '<input type="password" placeholder="password">' +
  '</label>' +
  '<label>' +
    '<span></span>' +
    '<input type="submit" placeholder="GO">' +
  '</label>' +
'</form>';
login.innerHTML = loginForm;
document.querySelector('input[type="submit"]').addEventListener('click', function(e){
  e.preventDefault();
  getInputs();
});
var form = document.querySelector('#login form')
function getInputs(){
  var formInputs = []
  for (var i = 0; i < form.length-1; i++) {
    formInputs.push(form.elements[i].value);
  }
  console.log(dropCapInputs(formInputs));
}
function dropCapInputs(arr){
  if(Array.isArray(arr)){
    arr.forEach(function(e, i){
      arr[i] = arr[i].toLowerCase();
      arr[i] = arr.unshift(arr[i].value);
      return arr;
    });
  }
}
