function Person() {}
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

function Teacher() {}
Teacher.prototype.teach = function (subject) {
  console.log(this.name + " teaches " + subject);
};

Object.setPrototypeOf(Teacher.prototype, Person.prototype);
// Teacher.prototype.__proto__ = Person.prototype; // Alternate way to set prototype

var teacher1 = new Teacher();
teacher1.initialize("John", 30);
teacher1.teach("Math");
