// var students = ['matthew','david','haley','marissa','micaela','osvaldo','rosamaria','alfredo','rigoberto','leonardo','gustavo','eric','kevin','montgomery','cobi','joshua'];
// var fruits =
// ['banana','apple','dragon fruit','kiwi','pineapple']
function randomStudent(){
  var numStudents = students.length;
  var randStudent = Math.ceil(Math.random() * numStudents) - 1;
  console.log(randStudent);
  alert(students[randStudent]);
};
// // randomStudent();
// // console.log(fruits);
// // //push - adds to end of array
// // fruits.push('cherry');
// // console.log(fruits);
// // //unshift - adds to the front of array
// // fruits.unshift('mango');
// // console.log(fruits);
// // //pop - removes from the end of array
// // var lastFruit = fruits.pop();
// // console.log(lastFruit, fruits);
// // //shift - removes from the front of array
// // var firstFruit = fruits.shift();
// // console.log(firstFruit, fruits);
// // //indexOf - finds the index of an item in an array
// // var posFruit = fruits.indexOf('pineapple');
// // console.log(posFruit);
// // //splice - remove an item by index number
// // var remFruit = fruits.splice(1,1);
// // console.log(fruits);
// //Slice - copies array
// var copyFruit = fruits.slice(1,3);
// console.log(copyFruit);
// console.log(fruits);
var subject = ['English'];
subject.unshift('Civics/Econ','Ag Mechanics');
subject.push('Prob/Stats','Geekwise');
console.log(subject);
var moddedSubject = subject.slice(2,3);
console.log(moddedSubject);
subject.sort();
console.log(subject);
subject.reverse();
console.log(subject);
