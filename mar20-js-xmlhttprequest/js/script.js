const ROOT_URL = 'https://api.github.com/';
const CLIENT_ID =;
const CLIENT_SECRET =;
var main = document.querySelector('main'),
    img,
    h1,
    req,
    githubObj;
function getReq(){
  req = new XMLHttpRequest();
  req.open('GET', ROOT_URL+'users/geekwise-kevin-henderson?client_id='+CLIENT_ID+'&client_secret='+CLIENT_SECRET);
  req.onload = function(){
    if(req.readyState === 4 && req.status === 200){
      console.log('success', req.statusText);
      githubObj = JSON.parse(req.responseText);
    }else{
      console.log('error', req.statusText);
    }
    // img = document.createElement('img');
    // h1 = document.createElement('h1');
    // console.log(githubObj);
    // img.src = githubObj.avatar_url;
    // h1.textContent = githubObj.login;
    // main.append(h1, img);
  }
  req.send(null);
}
(function(){
  getReq();
  console.log(githubObj);
}());
