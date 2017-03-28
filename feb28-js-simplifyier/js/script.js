// document.querySelector('button').addEventListener('click',function(){
//   console.log(firstName() + ' ' + lastName());
// });
// function firstName(){
//   return 'Kevin';
// };
// function lastName(){
//   return 'Henderson';
// };
// var invoke = function(){
//   var total = 0;
//   for(var i = 0; i < arguments.length; i++){
//     if(typeof arguments[i] == 'number'){
//       total = arguments[i] + total;
//     }
//   }
//   return total;
// };
var form = document.querySelector('form');
document.querySelector('input[type="submit"]').addEventListener('click',function(a){
  getInfo();
  a.preventDefault();
});
function getInfo(){
  console.log('Welcome ' + getName(form) + ' to your site. Your email is ' + getEmail(form) + '. You have signed up or the following subscriptions ' + getChecks(form))
};

function getChecks(arr){
  var checks ='';
  for (var i = 0; i < arr.elements.length-1; i++) {
    if(arr.elements[i].type === 'checkbox' && arr.elements[i].checked ){
      checks += arr.elements[i].value + ' ';
    }
  }
  return checks;
}
var names ='';
function getName(arr){
  for (var i = 0; i < arr.elements.length-1; i++) {
    if(arr.elements[i].type === 'text' ){
      names += arr.elements[i].value + ' ';
    }
  }
  return names;
}
var emails ='';
function getEmail(arr){
  for (var i = 0; i < arr.length-1; i++) {
    if(arr.elements[i].type === 'email' ){
      emails += emails + arr.elements[i].value + ' ';
    }
  }
  return emails;
}
