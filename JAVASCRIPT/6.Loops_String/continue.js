console.log("=== Using CONTINUE in 3 Loops ===");

// For Loop with continue
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("⏩ Skipping:", i);
        continue;
    }
    console.log("For Loop:", i);
}

console.log("----------------");

// While Loop with continue
let j = 1;
while (j <= 5) {
    if (j === 3) {
        console.log("⏩ Skipping:", j);
        j++; // important to avoid infinite loop
        continue;
    }
    console.log("While Loop:", j);
    j++;
}

console.log("----------------");

// Do While Loop with continue
let k = 1;
do {
    if (k === 3) {
        console.log("⏩ Skipping:", k);
        k++; // important to avoid infinite loop
        continue;
    }
    console.log("Do While Loop:", k);
    k++;
} while (k <= 5);
