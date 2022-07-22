// ES6 Refresher

// let, var, const
// var -> function
// let -> block
// const -> block
function sayHello() {
  //   for (var i = 0; i < 5; i++) {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  //   console.log(i);
}

sayHello();

// ====================================

//OBJECT

// const person = {
//   name: "Rian",
//   walk: function () {},
//   talk() {},
// };

// person.talk();
// person.name = "";

// const targetMember = "name";
// person[targetMember.value] = "rnt";

// ===============================

// The THIS Keyword

// const person = {
//   name: "Rian",
//   walk: function () {
//     console.log(this);
//   },
// };

// person.walk();

// const walk = person.walk;
// console.log(walk);

// =================================

// Binding THIS
// const person = {
//   name: "Rian",
//   walk: function () {
//     console.log(this);
//   },
// };

// person.walk();

// const walk = person.walk.bind(person);
// walk();

// ============================

// Arrow Fuctions
//old
// const square = function (number) {
//   return number * number;
// };

// new
const square = (number) => number * number;
console.log(square(5));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

jobs.filter(function (job) {
  return job.isActive;
});

jobs.filter((job) => job.isActive);

// =====================================

// ARROW FUNCTIONS AND THIS

// const person = {
//   talk() {
//     var self = this;
//     setTimeout(() => {
//       console.log("this ===>>", this);
//     }, 1000);
//   },
// };

// person.talk();

// =============================

// array.map METHOD

const colors = ["red", "green", "blue"];
const items = colors.map((color) => `<li>${color}</li>`);
console.log(items);

// ======================================

// Object Destructuring
const address = {
  street: "",
  city: "",
  country: "",
};

const { street, city, country } = address;
const { street: st } = address;

// =================================

// Spread Operator

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = first.concat(second);
// const combined = [...first, "a", ...second, "b"];
// const clone = [...first];
// console.log(first);
// console.log(clone);

const first = { name: "rian" };
const second = { jobs: "software engineer" };

// const combined = { ...first, ...second, location: "Indonesia" };
// console.log(combined);
const combined = { ...first };
console.log(combined);

// CLASSES

// const person1 = {
//   name: "rian",
// };

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   walk() {
//     console.log("walk");
//   }
// }

// const person = new Person('Rian')
// person.

// const person2 = {
//   name: "rian",
//   walk() {
//     console.log("walk");
//   },
// };

// =================================

// INHERITANCE
class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("walk");
  }
}

class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("teach");
  }
}

const teacher = new Teacher("Rian", "S.Kom or BSc");
console.log(teacher);

// ==========================================

// MODULES

