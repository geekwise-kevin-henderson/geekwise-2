(function(){
  getReq('env.json', init);
}());

function getReq(url, callback){
  var req = new XMLHttpRequest();
  req.open('GET', url);
  req.onload = function(){
    if(req.readyState === 4 && req.status === 200){
      callback(JSON.parse(req.responseText));
    }else{
      console.log('error' + req.statusText);
    }
  };
  req.send(null);
  console.log('run after load')
}
function init(vars){
  const ROOT_URL = 'https://api.github.com/'
  const CLIENT_ID = vars.client_id;
  const CLIENT_SECRET = vars.client_secret;

  var main = document.querySelector('main'),
  searchInput = document.querySelector('form input[type="search"]'),
  searchSubmit = document.querySelector('form input[type="submit"]');

  searchSubmit.addEventListener('click', function(evt){
    main.innerHTML = '';
    evt.preventDefault();
    getReq(ROOT_URL + 'search/users?client_id=' + CLIENT_ID + ' &client_secret=' + CLIENT_SECRET + '&q=' + searchInput.value, getUser);
  });
}
function getUser(user){
  var main = document.querySelector('main'),
  ul = document.createElement('ul');
  main.append(ul);

  console.log(user);
  user.items.forEach(function(e, i){
    var img = document.createElement('img'),
    li = document.createElement('li'),
    a = document.createElement('a'),
    h1 = document.createElement('h1');

    h1.textContent = e.login;
    img.src = e.avatar_url;
    a.href = 'https://github.com/' + e.login;
    a.target = '_blank';
    a.append(h1,img);
    li.append(a);
    ul.append(li);
  })
}
