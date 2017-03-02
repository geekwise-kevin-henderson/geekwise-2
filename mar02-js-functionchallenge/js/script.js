var content = document.getElementById('content');
var h1 = document.createElement('h1');
var p = document.createElement('p');
var a = document.createElement('a');
var ul = document.createElement('ul');
var form = document.createElement('form');
var input = document.createElement('input');
var first = document.createElement('input');
var last = document.createElement('input');
var email = document.createElement('input');
var password = document.createElement('input');
var number = document.createElement('input');
var br1 = document.createElement('br');
var br2 = document.createElement('br');
var br3 = document.createElement('br');
var br4 = document.createElement('br');
var br5 = document.createElement('br');
var br6 = document.createElement('br');
var submit = document.createElement('input')
var array = [];
content.appendChild(h1).textContent = "Hello World";
content.appendChild(p).textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
content.appendChild(a).textContent = "Anchor Tag";
content.appendChild(a).textContent = "Anchor Tag2";
a.id = 'a1';
a.href = '#';
a.className = 'a2';
a.target = '_blank';
content.insertBefore(ul , a);
content.insertBefore(form , a);
form.appendChild(input);
form.appendChild(br1);
form.appendChild(first);
form.appendChild(br2);
form.appendChild(last);
form.appendChild(br3);
form.appendChild(email);
form.appendChild(br4);
form.appendChild(password);
form.appendChild(br5);
form.appendChild(number);
form.appendChild(br6);
form.appendChild(submit);
input.type = 'text';
input.placeholder = 'input';
first.type = 'text';
first.placeholder = 'First Name';
last.type = 'text';
last.placeholder = 'Last Name';
email.type = 'email';
email.placeholder = 'Email';
password.type = 'password';
password.placeholder = 'Password';
number.type = 'number';
number.placeholder = 'Number';
number.addEventListener('change', function(a){
  a.preventDefault();
  console.log(a.target.value);
});
submit.type = 'submit';
submit.value = 'GO';
submit.addEventListener('click', function(a){
  a.preventDefault();
  array.push(number.value);
  // form.reset();
  data();
});
function data(){
  var loopNum = parseInt(number.value);
  for (var i = 1; i < loopNum + 1; i++) {
    if(loopNum > 0){
      var li = document.createElement('li');
      ul.appendChild(li).textContent = i;
    }
    if(loopNum < 0){
      document.querySelector('li:last-of-type').remove();
    }
  }
  console.log(array);
}
