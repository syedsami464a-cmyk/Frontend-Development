// Math Object Examples

console.log("----- Math Properties -----");
console.log("PI:", Math.PI);
console.log("E:", Math.E);
console.log("SQRT2:", Math.SQRT2);
console.log("LN2:", Math.LN2); // Natural Logarithm

console.log("\n----- Rounding Methods -----");
console.log("Math.round(4.6):", Math.round(4.6));  // 5
console.log("Math.floor(4.9):", Math.floor(4.9));  // 4
console.log("Math.ceil(4.1):", Math.ceil(4.1));    // 5
console.log("Math.trunc(4.9):", Math.trunc(4.9));  // 4 (removes decimal)

console.log("\n----- Power / Square root -----");
console.log("Math.pow(2, 3):", Math.pow(2, 3));   // 8
console.log("Math.sqrt(25):", Math.sqrt(25));     // 5
console.log("Math.cbrt(27):", Math.cbrt(27));     // 3

console.log("\n----- Absolute Value -----");
console.log("Math.abs(-7.5):", Math.abs(-7.5));   // 7.5

console.log("\n----- Min / Max -----");
console.log("Math.min(10, 20, 5, 30):", Math.min(10, 20, 5, 30)); // 5
console.log("Math.max(10, 20, 5, 30):", Math.max(10, 20, 5, 30)); // 30

console.log("\n----- Random Number -----");
console.log("Math.random():", Math.random()); // 0 to 1
console.log("Random (0-9):", Math.floor(Math.random() * 10)); 
console.log("Random (1-100):", Math.floor(Math.random() * 100) + 1);

console.log("\n----- Logarithmic / Exponent -----");
console.log("Math.log(10):", Math.log(10));     // natural log
console.log("Math.log10(100):", Math.log10(100)); // base 10 log
console.log("Math.exp(1):", Math.exp(1));       // e^1

console.log("\n----- Trigonometry -----");
console.log("Math.sin(0):", Math.sin(0));
console.log("Math.cos(Math.PI):", Math.cos(Math.PI));
console.log("Math.tan(Math.PI/4):", Math.tan(Math.PI/4));
console.log("Math.asin(1):", Math.asin(1));
console.log("Math.acos(0):", Math.acos(0));
console.log("Math.atan(1):", Math.atan(1));
