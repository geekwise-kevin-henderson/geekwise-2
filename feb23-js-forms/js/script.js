var login = document.querySelector('#login');
var loginBtn = document.querySelector('#login input[type="submit"]');
var lock = [];
var contact = document.querySelector('#contact');
var contactBtn = document.querySelector('#contact input[type="submit"]');
var userArr = [];
var custom = document.querySelector('.custom')
contactBtn.addEventListener('click', function(a){
  a.preventDefault()
  for(var i = 0; i < login.elements.length - 1; i++){
    if(contact.elements[i].type !== 'checkbox'){
      userArr.push(contact.elements[i].value);
    }
    if(contact.elements[i].type === 'checkbox' && contact.elements[i].checked){
      userArr.push(true);
    }
  }
});
if(localStorage.getItem('username')){
  username = localStorage.getItem('username');
  alert(username + ' please enter your password to continue');
}
else{
  alert('Please log in.')
  login();
}
function login(){
  loginBtn.addEventListener('click', function(b){
    b.preventDefault()
    for(var i = 0; i < login.elements.length - 1; i++){
      if(login.elements[i].type === 'text'){
        localStorage.setItem('username', MD5(login.elements[i].value));
      }
      if(login.elements[i].type === 'password'){
        sessionStorage.setItem('password', MD5(login.elements[i].value));
      }
      form(var i = 0; i < contactForm.length-1; i++){
        contact.elements[i].disabled = false;
      }
    }
  });
};
function password(){
  loginBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    if(MD5(login.elements[1].value) === sessionStorage.getItem('password')){
      alert('login successful');
    }else{
      alert('password does not match')
    }
  })
};
