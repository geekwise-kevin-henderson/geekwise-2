var jeep = document.querySelector('header'),
    colorPicker = document.querySelector('input[type="color"]'),
    jeepRot = document.querySelector('input[type="number"]'),
    btn = document.querySelector('input[type="submit"]'),
    navLi = document.querySelectorAll('nav > ul > li');

navLi.forEach(function(e, i){
  e.addEventListener('mouseover', function(){
    this.classList.add('hovering');
  });
  e.addEventListener('mouseout', function(){
    this.classList.remove('hovering');
  });
});

btn.addEventListener('click', function(evt){
  evt.preventDefault();
  jeep.style.backgroundColor = colorPicker.value;
  jeep.style.transform = "rotate(" + jeepRot.value + "deg)";
})
