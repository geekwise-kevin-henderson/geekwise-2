// const GITHUB_URL = 'http://github.com/';
// console.log(GITHUB_URL);
// var btn = document.querySelector('button[type=button]');
// console.log(btn);
// btn.addEventListener('click', function(){
//   if(!'childElementCount' in window){
//     notAvailable();
//   }else{
//     available();
//   }
//   function notAvailable(){
//     alert('not available');
//   }
//   function available(){
//     alert('available');
//   }
// });


var nav = document.querySelector('nav'),
sec1 = document.querySelector('section:nth-of-type(1)'),
sec1Div = document.querySelector('section:nth-of-type(1) div'),
sec1Img = document.querySelector('section:nth-of-type(1) img'),
sec2 = document.querySelector('section:nth-of-type(2)'),
sec2Div = document.querySelector('section:nth-of-type(2) div'),
sec2Img = document.querySelector('section:nth-of-type(2) img'),
sec3 = document.querySelector('section:nth-of-type(3)'),
sec3Div = document.querySelector('section:nth-of-type(3) div'),
sec3Img = document.querySelector('section:nth-of-type(3) img'),
sec4 = document.querySelector('section:nth-of-type(4)'),
sec4Div = document.querySelector('section:nth-of-type(4) div'),
sec4Img = document.querySelector('section:nth-of-type(4) img');

var dist = 0,
navHeight = 0,
sec1Height = 0,
sec2Height = 0,
sec3Height = 0,
sec4Height = 0;

window.addEventListener('scroll', function(evt){
  navHeight = nav.clientHeight;
  sec1Height = sec1.clientHeight;
  sec2Height = sec2.clientHeight;
  sec3Height = sec3.clientHeight;
  sec4Height = sec4.clientHeight;
  dist = window.scrollY;
  console.log(dist);

  if(dist > navHeight){
    nav.classList.add('fixed');
  }else{
    nav.classList.remove('fixed');
  }
  if(dist > (navHeight + sec1Height)){
    sec1Div.classList.add('slide');
    sec1Img.classList.add('slide');
  }else{
    sec1Div.classList.remove('slide');
    sec1Img.classList.remove('slide');
  }
  if(dist > (navHeight + sec1Height + sec2Height)){
    sec2Div.classList.add('slide');
    sec2Img.classList.add('slide');
  }else{
    sec2Div.classList.remove('slide');
    sec2Img.classList.remove('slide');
  }
  if(dist > (navHeight + sec1Height + sec2Height + sec3Height)){
    sec3Img.classList.add('slide');
    sec3Div.classList.add('slide');
  }else{
    sec3Img.classList.remove('slide');
    sec3Div.classList.remove('slide');
  }
  if(dist > (navHeight + sec1Height + sec2Height + sec3Height + sec4Height)){
    sec4Div.classList.add('slide');
    sec4Img.classList.add('slide');
  }else{
    sec4Div.classList.remove('slide');
    sec4Img.classList.remove('slide');
  }
})
