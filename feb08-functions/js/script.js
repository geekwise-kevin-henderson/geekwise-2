(function(){

// var userBrand = prompt('Brand');
// var userModel = prompt('Model');
// var userYear = prompt('Year');
// var car = {brand:userBrand, model:userModel, year:userYear};
// function myCar(a){
//   alert(a.brand);
//   alert(a.model);
//   alert(a.year);
// }
// myCar(car);
//
// var funcEx = function(){
//   alert(arguments[0]);
// }('kevin', 7);

var firstNames = ['Montgomery', 'David', 'Cobi', 'Eric', 'Gus'];
var cereals = ['Frosted Flakes', 'Kix', 'Fruity Pebbles', 'Cinamon Toast Crunch', 'Honey Bunches of Oats'];

firstNames.sort();
cereals.sort();

var funEx = function(){
  var numNames = firstNames.length;
  var randNames = Math.ceil(Math.random() * numNames) - 1;
  var numCereals = cereals.length;
  var randCereals = Math.ceil(Math.random() * numCereals) - 1;
  alert(firstNames[randNames] + " " + cereals[randCereals]);
}(firstNames, cereals );


})();
