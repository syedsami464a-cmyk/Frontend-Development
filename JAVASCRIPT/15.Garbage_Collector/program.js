// program-1:

// function simpleGC() {
//     let obj = { name: "sami" };
//     console.log("Object created:", obj); // Object created: { name: 'sami' }

//     obj = null; // now the object has no reference
//     // GC will clean it automatically when needed
//     console.log("Object created:", obj); // null
// }

// simpleGC();


// program-2:

function intermediateGC() {
    let obj1 = { name: "sami" };
    let obj2 = { name: "saif" };

    obj1.friend = obj2; // obj1 → obj2
    obj2.friend = obj1; // obj2 → obj1 (circular reference)

    console.log("Objects linked:", obj1, obj2);

    obj1 = null;
    obj2 = null;

    // Both objects are now unreachable from the root
    // GC will remove them even though they reference each other
}

intermediateGC();