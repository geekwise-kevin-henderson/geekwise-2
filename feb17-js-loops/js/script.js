var btn = document.getElementById('btn');
btn.addEventListener('click', movie);
var stuff = document.getElementById('stuff');
var list = [];
function movie(){
  var response = prompt('What\'s your favorite movie?');
  list.push(response);
  stuff.innerHTML = list;
  if(list.length>=3){
    console.log(list);
  };
  if(list.length>=5){
    for (var i = 0; i < list.length; i++){
      console.log(list[i]);
    };
  };
};
