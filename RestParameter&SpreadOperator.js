// Rest Operator (...):
// The rest operator is used to represent an indefinite number of arguments as an array.
// It is typically used in function definitions to capture a variable number of arguments into a single parameter.
// When used in a function parameter list, it collects all remaining arguments into an array.

// rest...:)
function restFunc(...el) {
    let newArr = [];
   for (const sum of el) {
    newArr.push(3 * sum);
   }
   return newArr;
}
console.log(restFunc(2,3,4,5));

// =========??

// Spread Operator (...):
// The spread operator is used to expand an iterable (like an array) into individual elements.
// It can be used in array literals, function calls, or to spread the elements of an array as function arguments.
let arr = [1,2,3];
let arr2 = [1,2,3];
console.log([...arr, ...arr2]);

function mult(a,b,c,d) {
    return a*b*c*d;    
}
const numbers = [1,2,3,4];
console.log(mult(...numbers));




