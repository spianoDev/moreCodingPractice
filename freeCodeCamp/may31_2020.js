// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
//
//     For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
//
// Calling this returned function with a single argument will then return the sum:
//
//     var sumTwoAnd = addTogether(2);
//
// sumTwoAnd(3) returns 5.
//
// If either argument isn't a valid number, return undefined.
function addTogether() {
    let args = [...arguments];
    const nextArg = function(arg){
        if (typeof arg !== typeof args[0]) {
            return undefined;
        } else {
            return arg + args[0];
        }
    };
    let nums = typeof args[0] === typeof args[1];
        if (arguments.length >= 2 && nums) {
            return args[0] + args[1];
        } else if (arguments.length===1 && typeof args[0] != 'number') {
            return undefined;
        } else if(arguments.length===1) {
            return nextArg;
        } else {
            return undefined;
        }
}


console.log(addTogether(2, 3)); // should return 5.
console.log(addTogether(2)(3)); // should return 5.
console.log(addTogether("http://bit.ly/IqT6zt")); // should return undefined.
// addTogether(2, "3"); // should return undefined.
// addTogether(2)([3]); // should return undefined.
