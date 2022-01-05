function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

const student1 = new Student("Alex", "Male", 19);
const student2 = new Student("Kolya", "Male", 23);
const student3 = new Student("Maria", "Female", 20);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...mark) {
  let addingMarks = mark;
  if(this.marks === undefined) {
    this.marks = [];
    for (let m of addingMarks) {
      this.marks.push(m);
    }
  } else {
    for (let m of addingMarks) {
      this.marks.push(m);
    }
  }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  for (let mark of this.marks) {
    sum += mark;
  }
  return avg = sum / (this.marks.length)
}

Student.prototype.exclude = function (reason) {
  delete Student.subject;
  delete Student.marks;

  this.excluded = reason;
}