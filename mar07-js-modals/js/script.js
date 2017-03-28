// var content = document.getElementById('content');
//
// function createPopUp(type, msg){
//   var popup = document.createElement('div');
//   var p = document.createElement('p');
//   var input = document.createElement('input');
//   input.type = 'text';
//   var confirm = document.createElement('input');
//   confirm.type = 'submit';
//   confirm.value = 'confirm';
//   var cancel = document.createElement('input');
//   cancel.type = 'button';
//   cancel.value = 'Cancel';
//
//   p.textContent = msg;
//   popup.appendChild(p);
//   if(type === 'alert'){
//
//   }else if(type === 'confirm'){
//     popup.appendChild(cancel);
//   }else if(type === 'prompt'){
//     popup.appendChild(p);
//   }else{
//     alert('try again');
//   }
//   popup.appendChild(confirm);
//   content.appendChild(popup);
// }
// var a = prompt('what kind of popup?')
// var b = prompt('what should it say?')
// createPopUp(a, b);


// var form = document.querySelector('form');
// console.log('childElementCount' in form);
// if( !('childElementCount' in form)){
//   alert('Update yo damn browser');
//   for(var i = 0; i < form.children.length; i++){
//     console.log(form.children[i]);
//   }
// }else{
//   alert("It's working!");
//   for(var i = 0; i < form.childElementCount; i++){
//     console.log(form.children[i]);
//   }
// }
var form = document.querySelector('form');
var formArr = [];
formArr.push(form.firstChild, form.clientWidth, form.firstElementChild, form.length, form.parentElement);
console.log(formArr);
