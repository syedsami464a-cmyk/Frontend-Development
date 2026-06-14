console.log(true&&true&&true)

console.log(true && false && true)

console.log(true || true || true)

console.log(true || false || true)

console.log(!(true))
console.log(!(false))


// Working with non-booleans ---> depends on falsey and truthy

// falsey -> [ undefined,null,NaN,0,false,'' ]
// Truthy -> [ if not falsey then it is truthy ]

console.log(false && 'Sami')
console.log(false || 'Sami')
console.log(true && 'Sami')
console.log(true && 'Sami')

// short-circuiting 

console.log(true || false || false ) // it returns true when it sees true in the firstone only(|| rule)

console.log(false && true && false ) // it returns false when it sees false in the firstone only(&& rule)
