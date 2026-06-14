// 🔹 Creating Date objects

let now = new Date();  
// Current date & time (system ke hisaab se)
console.log("Now:", now);

let specific = new Date("2025-08-27"); 
// Create from string (ISO format is best)
console.log("Specific Date:", specific);

let custom = new Date(2025, 7, 27, 12, 30, 45); 
// year, month (0-based: 7 = August), day, hr, min, sec
console.log("Custom Date:", custom);

console.log("----------------------------------------------------------");

// 🔹 Getting parts of a date

console.log("Year:", now.getFullYear());       // Full year e.g. 2025
console.log("Month:", now.getMonth());         // Month index (0 = Jan)
console.log("Date:", now.getDate());           // Day of month (1–31)
console.log("Day of week:", now.getDay());     // Day of week (0=Sun, 6=Sat)
console.log("Hours:", now.getHours());         // Hours (0–23)
console.log("Minutes:", now.getMinutes());     // Minutes (0–59)
console.log("Seconds:", now.getSeconds());     // Seconds (0–59)
console.log("Milliseconds:", now.getMilliseconds()); // Milliseconds (0–999)
console.log("Timestamp (ms since 1970):", now.getTime()); 
// Epoch time (useful for comparisons & storage)

console.log("----------------------------------------------------------");

// 🔹 Setting parts of a date

now.setFullYear(2030); // Change year
now.setMonth(11);      // 11 = December
now.setDate(25);       // Day of month → 25
console.log("Modified Date:", now);

console.log("----------------------------------------------------------");

// 🔹 Useful static methods (directly from Date class)

console.log("Current timestamp:", Date.now()); 
// Returns milliseconds since Jan 1, 1970

console.log("Parse timestamp:", Date.parse("2025-08-27")); 
// Converts a date string into milliseconds

console.log("UTC Date:", Date.UTC(2025, 7, 27)); 
// Returns timestamp for given UTC date (useful for time zones)

console.log("----------------------------------------------------------");

// 🔹 Formatting to strings

let today = new Date();

console.log("toDateString:", today.toDateString());   
// Example: "Wed Aug 27 2025"

console.log("toTimeString:", today.toTimeString());   
// Example: "14:25:36 GMT+0530 (India Standard Time)"

console.log("toISOString:", today.toISOString());     
// Example: "2025-08-27T08:55:36.000Z" (always UTC)

console.log("toLocaleDateString:", today.toLocaleDateString()); 
// Localized date (e.g. "27/8/2025" in India)

console.log("toLocaleTimeString:", today.toLocaleTimeString()); 
// Localized time (e.g. "2:55:36 pm")

console.log("toLocaleString:", today.toLocaleString()); 
// Localized date + time (e.g. "27/8/2025, 2:55:36 pm")
