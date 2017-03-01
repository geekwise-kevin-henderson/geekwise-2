var ul = document.createElement('ul');
document.body.appendChild(ul);
var p = document.getElementsByTagName('p')[0];
var parentDiv = p.parentNode;
parentDiv.insertBefore(ul,p);
var ulEl = document.getElementsByTagName('ul')[0];
var userNum = '';
var limit ='';

var getNum = function(){
  if(!arguments[0].isNAN && arguments[0] > 0){
    console.log(arguments[0]);
    userLoop(arguments[0]);
  }else{
    console.log('Try Again');
    getUserNum();
  }
};

function getUserNum(){
  userNum = parseInt(prompt('Give a Number'));
  getNum(userNum);
}

function userLoop(num){
  for (var i = 1; i < num + 1; i++) {
    toDoItemGen(i);
  }
}

function toDoItemGen(i){
  var li = document.createElement('li');
  li.textContent = i;
  li.setAttribute('contenteditable');
  ulEl.appendChild(li);
}
getUserNum();
