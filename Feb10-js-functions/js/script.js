// var str = "KeViN";
// var modstr = str.substr(1,4);
// var userName = prompt('What Is Your Name?');
// console.log(userName);

// function a(){
//   return prompt('What Is`t Thou Name').trim();
// };
//
// var b = function(){
//   var changedName = a();
//   var firstLetter = changedName.charAt(0, 0);
//   var capFirstLetter = firstLetter.toUpperCase();
//   var rest = changedName.substr(1);
//   var lowerRest = rest.toLowerCase();
//   var finished = capFirstLetter + lowerRest;
//   c(finished);
// }();
//
// function c(d){
//   alert(d);
// };
// function changeColor(){
//   var randNuma = Math.floor(Math.random()*360 + 1);
//   var randNumb = Math.floor(Math.random()*100 + 1);
//   var randNumc = Math.floor(Math.random()*100 + 1);
//   document.body.style.backgroundColor = 'hsl('+ randNuma +', '+ randNumb +', '+ randNumc + '');
// };
var extBtn = document.getElementById('external');
var content = document.getElementById('content');
var voidBtn = document.getElementById('void');

extBtn.addEventListener('click', function(){
  var userName = prompt('Enter Your Name');
  content.textContent = userName;
})
voidBtn.addEventListener('click', function(){
  content.textContent = '';
})
