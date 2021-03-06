(function(){

}());
search = document.querySelector("input[type='text']");
submit = document.querySelector("input[type='submit']")
submit.addEventListener('click', function(v){
  v.preventDefault();
  query = search.value;
  getReq('env.json', setEnv);
})
function getReq(url, cb){
  main = document.querySelector('main');
  main.innerHTML = ' ';
  var req = new XMLHttpRequest();
  req.open('GET', url);
  req.onload = function(){
    if(req.readyState === 4 && req.status === 200){
      cb(JSON.parse(req.responseText), query);
    }else{
      console.log('error', req.statusText);
    }
  }
  req.send(null);
}

function setEnv(envs, query){
  myVars = envVars();
  myVars.set_root_url(envs.root_url);
  myVars.set_img_url(envs.img_url);
  myVars.set_api_key(envs.api_key);
  myVars.set_read_access(envs.read_access);
  var adult = false;
  var page = 1;
  var url = myVars.get_root_url()+'search/movie?include_adult='+adult+'&page='+page+'&language=en-US&api_key='+myVars.get_api_key()+'&language=en-US&page=1&query='+query;
  getReq(url , getMovies)
}

function getMovies(movies){
  var main = document.querySelector('main'),
  section = document.createElement('section'),
  ul = document.createElement('ul'),
  h1 = document.createElement('h1'),
  li,
  poster_path;
  h1.textContent = 'Trending Movies';
  section.append(h1, ul);
  main.append(section);
  movies.results.forEach(function(e){
    if(e.poster_path === null || e.title === null || e.title === "" || e.overview === null || e.overview === ""){
      console.log('error');
    }else{
      li = document.createElement('li'),
      div = document.createElement('div'),
      title = document.createElement('h2'),
      overview = document.createElement('p'),
      release_date = document.createElement('p'),
      poster_path = document.createElement('img'),
      star_span = document.createElement('span'),
      stars = Math.round( parseInt(e.vote_average) / 2 );
      for (var i = 0; i < stars; i++){
        var vote_average = document.createElement('i');
        vote_average.classList.add("fa", "fa-star");
        vote_average.ariaHidden = "true";
        star_span.append(vote_average);
      }
      if(stars === 4){
        for (var i = 0; i < 1; i++) {
          var vote_average = document.createElement('i');
          vote_average.classList.add("fa", "fa-star-o");
          vote_average.ariaHidden = "true";
          star_span.append(vote_average);
        }
      }else if(stars === 3){
        for (var i = 0; i < 2; i++) {
          var vote_average = document.createElement('i');
          vote_average.classList.add("fa", "fa-star-o");
          vote_average.ariaHidden = "true";
          star_span.append(vote_average);
        }
      }else if(stars === 2){
        for (var i = 0; i < 3; i++) {
          var vote_average = document.createElement('i');
          vote_average.classList.add("fa", "fa-star-o");
          vote_average.ariaHidden = "true";
          star_span.append(vote_average);
        }
      }else if(stars === 1){
        for (var i = 0; i < 4; i++) {
          var vote_average = document.createElement('i');
          vote_average.classList.add("fa", "fa-star-o");
          vote_average.ariaHidden = "true";
          star_span.append(vote_average);
        }
      }else if(stars === 0){
        for (var i = 0; i < 5; i++) {
          var vote_average = document.createElement('i');
          vote_average.classList.add("fa", "fa-star-o");
          vote_average.ariaHidden = "true";
          star_span.append(vote_average);
        }
      }
      release_date.textContent = e.release_date.split("-").splice(0,1);
      title.textContent = e.title;
      overview.textContent = e.overview.split(".").splice(0, 1)+'.';
      poster_path.src = myVars.get_img_url()+'w500'+e.poster_path;
      div.append(title, star_span, release_date, overview);
      li.append(poster_path, div);
      ul.append(li);
      console.log(e);
    }
  })
}
var myVars;

function envVars(){
  var root_url, img_url, api_key, read_access;
  return {
    set_root_url: function(data){
      root_url = data;
    },
    set_img_url: function(data){
      img_url = data;
    },
    set_api_key: function(data){
      api_key = data;
    },
    set_read_access: function(data){
      read_access = data;
    },
    get_root_url: function(){
      return root_url;
    },
    get_img_url: function(){
      return img_url;
    },
    get_api_key: function(){
      return api_key;
    },
    get_read_access: function(){
      return read_access;
    }
  }
}
