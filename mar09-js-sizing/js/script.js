(function(){
  var distance = document.querySelector('#meter li:nth-child(1) span');
  var winW = document.querySelector('#meter li:nth-child(2) span');
  var winH = document.querySelector('#meter li:nth-child(3) span');
  var heroW = document.querySelector('#meter li:nth-child(4) span');
  var heroH = document.querySelector('#meter li:nth-child(5) span');
  var hero = document.querySelector('header');
  var sec1W = document.querySelector('#meter li:nth-child(6) span');
  var sec1H = document.querySelector('#meter li:nth-child(7) span');
  var sec1 = document.querySelector('section:nth-child(1)');
  var sec2W = document.querySelector('#meter li:nth-child(8) span');
  var sec2H = document.querySelector('#meter li:nth-child(9) span');
  var sec2 = document.querySelector('section:nth-child(2)');
  var sec3W = document.querySelector('#meter li:nth-child(10) span');
  var sec3H = document.querySelector('#meter li:nth-child(11) span');
  var sec3 = document.querySelector('section:nth-child(3)');
  var footW = document.querySelector('#meter li:nth-child(12) span');
  var footH = document.querySelector('#meter li:nth-child(13) span');
  var foot = document.querySelector('footer');
  var dist = 0;

  var winWidth = window.innerWidth,
  winHeight = window.innerHeight,
  heroWidth = hero.clientWidth,
  heroHeight = hero.clientHeight,
  sec1Width = sec1.clientWidth,
  sec1Height = sec1.clientHeight,
  sec2Width = sec2.clientWidth,
  sec2Height = sec2.clientHeight,
  sec3Width = sec3.clientWidth,
  sec3Height = sec3.clientHeight,
  footWidth = foot.clientWidth,
  footHeight = foot.clientHeight;

  distance.textContent = dist;
  winW.textContent = winWidth;
  winH.textContent = winHeight;
  heroW.textContent = heroWidth;
  heroH.textContent = heroWidth;
  sec1W.textContent = sec1Width;
  sec1H.textContent = sec1Height;
  sec2W.textContent = sec2Width;
  sec2H.textContent = sec2Height;
  sec3W.textContent = sec3Width;
  sec3H.textContent = sec3Height;
  footW.textContent = footWidth;
  footH.textContent = footHeight;

  window.addEventListener('resize', function(){
    var winWidth = window.innerWidth,
    winHeight = window.innerHeight,
    heroWidth = hero.clientWidth,
    heroHeight = hero.clientHeight,
    sec1Width = sec1.clientWidth,
    sec1Height = sec1.clientHeight,
    sec2Width = sec2.clientWidth,
    sec2Height = sec2.clientHeight,
    sec3Width = sec3.clientWidth,
    sec3Height = sec3.clientHeight,
    footWidth = foot.clientWidth,
    footHeight = foot.clientHeight;

    distance.textContent = dist;
    winW.textContent = winWidth;
    winH.textContent = winHeight;
    heroW.textContent = heroWidth;
    heroH.textContent = heroWidth;
    sec1W.textContent = sec1Width;
    sec1H.textContent = sec1Height;
    sec2W.textContent = sec2Width;
    sec2H.textContent = sec2Height;
    sec3W.textContent = sec3Width;
    sec3H.textContent = sec3Height;
    footW.textContent = footWidth;
    footH.textContent = footHeight;
  });
  window.addEventListener('scroll', function(){
    dist = window.scrollY;
    distance.textContent = Math.round(dist);

    if((sec1.offsetTop - dist) - winHeight <= 0){
      sec1.classList.add('colorIn1');
    }else{
      sec1.classList.remove('colorIn1');
    }
    if((sec2.offsetTop - dist) - winHeight <= 0){
      sec2.classList.add('colorIn2');
    }else{
      sec2.classList.remove('colorIn2');
    }
    if((sec3.offsetTop - dist) - winHeight <= 0){
      sec3.classList.add('colorIn3');
    }else{
      sec3.classList.remove('colorIn3');
    }
    if((foot.offsetTop - dist) - winHeight <= 0){
      foot.classList.add('colorIn4');
    }else{
      foot.classList.remove('colorIn4');
    }
  });
}());
