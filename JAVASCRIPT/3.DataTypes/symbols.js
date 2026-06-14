const sym1 = Symbol();
const sym2 = Symbol();
console.log(sym1 == sym2);

const sym11 = Symbol.for("id");
const sym12 = Symbol.for("id");
console.log(sym11 === sym12);