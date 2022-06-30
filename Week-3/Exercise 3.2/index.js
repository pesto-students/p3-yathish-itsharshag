let student1 = {
  maths: 100,
  science: 100,
  totalMarks: function () {
    return this.maths + this.science;
  },
  aggregateMarks: function (mathsWeightage, scienceWeightage) {
    return this.maths * mathsWeightage + this.science * scienceWeightage;
  },
};

let student2 = {
  maths: 60,
  science: 40,
};

console.log(student1.totalMarks.call(student2)); // Returns 100 (We borrowed the function totalMarks from student1)

console.log(student1.aggregateMarks.call(student2, 0.6, 0.4)); // Returns 52 (We borrowed the function totalMarksWeighted from student1 and supplied the arguments 0.6 and 0.4)
console.log(student1.aggregateMarks.apply(student2, [0.6, 0.4])); // Returns 52 (Unlike call, apply takes the arguments in form of an array)

const aggregateMarksBound = student1.aggregateMarks.bind(student2, 0.6, 0.4);
console.log(aggregateMarksBound()); // Returns 52 (aggregateMarksBound is binded to the student2 object and uses it to find the values of this.maths and this.science)
