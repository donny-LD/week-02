const person = {
  myName: "mukhtar",
  lovesCars: true,
  favCar: "merc",
  sayHi: function () {
    return "Hello my name is " + this.myName;
  },
};

console.log(person.sayHi()); // Output: Hello my name is mukhtar
console.log(person.favCar); // Output: merc
console.log(person.lovesCars);
