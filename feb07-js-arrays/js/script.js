var students = ['matthew','david','haley','marissa','micaela','osvaldo','rosamaria','alfredo','rigoberto','leonardo','gustavo','eric','kevin','montgomery','cobi','joshua'];

function randomStudent(){
  var numStudents = students.length;
  var randStudent = Math.ceil(Math.random() * numStudents) - 1;
  console.log(randStudent);
  alert(students[randStudent]);
};
randomStudent();
