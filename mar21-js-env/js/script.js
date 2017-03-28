(function(){
  getReq('/env.json', 'init');
}());

function getReq(url, cb){
  var req = new XMLHttpRequest();
  req.open('GET', 'url');
  req.onload = function(){
    if(req.readyState === 4 && req.status === 200){
      cb(JSON.parse(req.responseText));
    }else{
      console.log('error', req.statusText);
    }
  }
  req.send(null);
}
function init(data){
  const ROOT_URL = 'https://api.github.com/';
  const CLIENT_ID = data.github.CLIENT_ID;
  const CLIENT_SECRET = data.github.CLIENT_SECRET;

  req.send(null);
  getReq("ROOT_URL + 'users/geekwise-kevin-henderson?client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET", "githubObj");
}
function githubObj(data) {
  var main = document.querySelector('main'),
  img = document.createElement('img'),
  h1 = document.createElement('h1');

  img.src = data.avatar_url;
  h1.textContent = data.name;

  main.append(h1, img);
}
