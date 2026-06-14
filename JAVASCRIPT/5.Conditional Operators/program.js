let age = 20;
let marks = 72;

// --- Simple if ---
if (age >= 18) {
    console.log("✅ You are eligible to vote."); // only runs if condition true
}

// --- if-else ---
if (marks >= 40) {
    console.log("🎉 You passed the exam.");
} else {
    console.log("❌ You failed the exam.");
}

// --- if else if ---
if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 75) {
    console.log("Grade: A");
} else if (marks >= 60) {
    console.log("Grade: B");
} else if (marks >= 40) {
    console.log("Grade: C");
} else {
    console.log("Grade: F (Fail)");
}

// --- Nested if ---

let age1 = 25;
let hasID = true;

if (age1 >= 18) {
    if (hasID) {
        console.log("✅ You can enter the club.");
    } else {
        console.log("⚠️ You need an ID to enter.");
    }
} else {
    console.log("❌ You are under 18.");
}
