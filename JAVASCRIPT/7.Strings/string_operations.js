// 🔹 String Operations in One Program

let str = "   Hello JavaScript World   ";

// 1. Basic Properties
console.log("Length:", str.length);
console.log("First char:", str[0]);
console.log("Last char:", str[str.length - 1]);

console.log("-----------------------------------")
console.log("-----------------------------------")

// 2. Changing Case
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());

console.log("-----------------------------------")
console.log("-----------------------------------")

// 3. Extracting Parts
console.log("Slice(3, 8):", str.slice(3, 8));
console.log("Substring(6, 16):", str.substring(6, 16));

console.log("-----------------------------------")
console.log("-----------------------------------")

// 4. Searching
console.log("IndexOf 'JavaScript':", str.indexOf("JavaScript"));
console.log("Includes 'World':", str.includes("World"));
console.log("StartsWith '   Hello':", str.startsWith("   Hello"));
console.log("EndsWith 'World   ':", str.endsWith("World   "));

console.log("-----------------------------------")
console.log("-----------------------------------")

// 5. Replacing
console.log("Replace 'JavaScript' → 'JS':", str.replace("JavaScript", "JS"));

console.log("-----------------------------------")
console.log("-----------------------------------")

// 6. Trimming
console.log("Trim:", str.trim());
console.log("TrimStart:", str.trimStart());
console.log("TrimEnd:", str.trimEnd());

console.log("-----------------------------------")
console.log("-----------------------------------")

// 7. Splitting & Joining

let csv = "red,green,blue";
let arr = csv.split(",");
console.log("Split:", arr);
console.log("Join:", arr.join(" | "));

console.log("-----------------------------------")
console.log("-----------------------------------")

// 8. Concatenation
let first = "Hello";
let second = "World";
console.log("Concat:", first + " " + second);

console.log("-----------------------------------")
console.log("-----------------------------------")

// 9. Repeat
console.log("Repeat 'ha' 3 times:", "ha".repeat(3));

console.log("-----------------------------------")
console.log("-----------------------------------")

// 10. Template Literals
let name1 = "Sami";
let age = 20;
console.log(`My name is ${name1} and I am ${age} years old.`);
