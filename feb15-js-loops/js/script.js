var plusButton = document.getElementById('plus');
var minusButton = document.getElementById('minus');
var colorArray = ['red'];

plusButton.addEventListener('click', function(){
  addColor();
  alert(colorArray);
});
minusButton.addEventListener('click', function(){
  removeColor();
  alert(colorArray);
  // var re = /ab+c/;
  // console.log(re);
  //
  // var myRe = /d(b+)d/g;
  // console.log(myArray);
});

function addColor(){
  var newColor = prompt('add a color');
  if(!== null && userColor.trim() !== ''){
    var colorCheck = newColor.toLowerCase().trim();
    if( !isNaN(parseInt(colorCheck))){
      addColor();
    }else{
      colorArray.push(colorCheck);
      return colorArray;
    };
  };
};

function removeColor(){
  colorArray.pop();
};
