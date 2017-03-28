(function(){
  getReq('https://www.udacity.com/public-api/v0/courses', init)
}());
function getReq(url, cb){
  var req = new XMLHttpRequest();
  req.open('GET', url);
  req.onload = function(){
    if(req.readyState === 4 && req.status === 200){
      cb( JSON.parse(req.responseText));
    }else{
      console.log('err ', req.statusText);
    }
  }
  req.send(null);
}
function init(data){
  console.log(data.degrees);
  var main = document.querySelector('main'),
  ul = document.createElement('ul'),
  li,
  expected_learning,
  homepage,
  image,
  required_knowledge;
  main.append(ul);
  data.degrees.forEach(function(e, i){
    li = document.createElement('li'),
    expected_learning = document.createElement('p'),
    homepage = document.createElement('a'),
    image = document.createElement('img'),
    required_knowledge = document.createElement('p');

    expected_learning.innerHTML = e.expected_learning;
    homepage.href = e.homepage;
    homepage.innerHTML = 'Learn More';
    homepage.target = '_blank';
    if(e.image){
      image.src = e.image;
    }else{
      image.src = 'http://placehold.it/1000x600';
    }

    required_knowledge.innerHTML = e.required_knowledge;

    li.append(image, required_knowledge, expected_learning, homepage);
    ul.append(li);
  });
}

// (function(){
//   getReq('https://www.udacity.com/public-api/v0/courses', 'init');
// }());
//
// function getReq(url, cb){
//   var req = new XMLHttpRequest();
//   req.open('GET', url);
//   req.onload = function(){
//     if(req.readyState === 4 && req.status === 200){
//       init(JSON.parse(req.responseText));
//       console.log(JSON.parse(req.responseText));
//     }else{
//       console.log('error', req.statusText);
//     }
//   }
//   req.send(null);
// }
// function init(data){
//   const ROOT_URL = 'https://www.udacity.com/public-api/v0/courses';
//   getReq(ROOT_URL, "scrnObj");
// }
// function scrnObj(data) {
//   var main = document.querySelector('main'),
//   img = document.createElement('img'),
//   h1 = document.createElement('h1'),
//   p = document.createElement('p');
//
//   img.src = courses.image;
//   h1.innerHTML = courses.instructors;
//   p.innerHTML = courses.short_summary;
//
//   p.addEventListener('mouse-over', function(){
//     p.innerHTML = courses.summary;
//   })
//
//   main.append(h1, img);
// }
