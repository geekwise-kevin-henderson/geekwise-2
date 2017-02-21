// var clickMe = document.getElementById('clickMe');
// var div = document.getElementsByTagName('div');
// var classes = document.getElementsByClassName('l1');
// var stuff = document.querySelectorAll('li:nth-of-type(odd)');
//
// for(var a = 0; a < stuff.length; a++){
//   stuff[a].style.backgroundColor = 'pink';
// }
// for(var i = 0; i < div.length; i++){
//   div[i].addEventListener('mouseover', function(){
//     alert('hovering the div');
//   });
// }
// for(var j = 0; j < classes.length; j++){
//   div[j].addEventListener('mouseover', function(){
//     alert('hovering the class');
//   });
// }
// function ask(){
//   var userName = prompt('What is your username').trim();
//   if(userName.length < 5){
//     ask();
//   }else if(userName === ''){
//     ask();
//   }else if(userName === null){
//     ask();
//   }else{
//     alert(userName);
//   };
// };
// clickMe.addEventListener('click', function(){
//   ask();
// });
var input = document.getElementById('input');
var submit = document.getElementById('submit');

submit.addEventListener('click', function(e){
  e.preventDefault();
  console.log(e);
  console.log('clicked the submit');
  var userName = input.value;
  console.log(userName);
});
