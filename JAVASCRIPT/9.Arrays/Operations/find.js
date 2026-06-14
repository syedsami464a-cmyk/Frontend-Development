let arr = [2, 7, 15, 20, 5];

let result = arr.find((num) => num > 10);

let result = arr.find((num) => {
  num > 10

});  

console.log(result);



let students = [
  { id: 1, name: "Sami" },
  { id: 2, name: "Syed" },
  { id: 3, name: "Umar" }
];

let student = students.find(s => s.id === 2);

console.log(student);
