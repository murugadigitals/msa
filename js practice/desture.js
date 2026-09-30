/*const person = {              // Destructuring
  name: "Sri Hari M",
  age: 37,
  //   city: "Tirupati",
};
// console.log(person.city);       //rename during desturing
const { name: myName, age: myAge, city = "proddatur" } = person;

console.log(myName);
console.log(myAge);
console.log(city);
===================================================
const name = "Sri Hari M";          //Important part
const city = "Proddatur";

const person = {
    name: name,
    city: city,
};

const person1 = {
    city,
    name,
};

console.log(person); //  Output:object
console.log(person1);
====================================================
// ***SPREAD OPERATOR****       spread with objects
const person = {
  name: "Sri Hari M",
  city: "proddatur",
};
const result = { ...person };
console.log(result);

const result1 = {
    //updating
    ...person,
    age: 37,
};
console.log(result1);
====================================================
const person = {
    name: "Sri Hari M",
    city: "proddatur",
};
console.log(Object.keys(person)); // returns array
console.log(Object.values(person)); // returns array
console.log(Object.entries(person)); // returns array
[
    ["name", "Sri Hari M"],
    ["city", "proddatur"],
];
====================================================*/
