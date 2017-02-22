var inputs = document.querySelectorAll('input:not([type="submit"])');
var submit = document.querySelector('input[type="submit"]');
var form = document.querySelector('form')
var user = [];

submit.addEventListener('click', function(x){
  x.preventDefault();
  // inputs.forEach(function(e, i){
  //   user.push(inputs[i].value);
  // });
  // alert(user);
  // form.reset();
  // user = [];
  // console.log(user);
  //---------------------------------or---------------------------------
  var formInputs = document.querySelector('form').elements;
  for(var i = 0; i < formInputs.length - 1; i++){
    if(formInputs[i].type === 'radio' && formInputs[i].checked || formInputs[i].type !== 'radio' && formInputs[i].checked  && formInputs.value){
      user.push(formInputs[i].value);
    }
    if(formInputs[i].type === 'checkbox' && formInputs[i].checked){
      user.push(true);
    }
    console.log(user);
  }
  user = [];
});
