console.log("=== Using BREAK in 3 Loops ===");

// For Loop with break
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("🚫 Break at:", i);
        break;
    }
    console.log("For Loop:", i);
}

console.log("----------------");

// While Loop with break
let j = 1;
while (j <= 5) {
    if (j === 3) {
        console.log("🚫 Break at:", j);
        break;
    }
    console.log("While Loop:", j);
    j++;
}

console.log("----------------");

// Do While Loop with break
let k = 1;
do {
    if (k === 3) {
        console.log("🚫 Break at:", k);
        break;
    }
    console.log("Do While Loop:", k);
    k++;
} while (k <= 5);
