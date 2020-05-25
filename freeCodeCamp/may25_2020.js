// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
//
//     Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
//


function dropElements(arr, func) {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        if (func(arr[0])) {
            break;
        } else {
            arr.shift();
        }
    }
    console.log(arr);
    return arr;
}

// dropElements([1, 2, 3, 4], function(n) {return n >= 3;}); //  should return [3, 4].
// dropElements([0, 1, 0, 1], function(n) {return n === 1;}); // should return [1, 0, 1].
// dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}); // should return [7, 4].
// dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}); // should return [3, 9, 2].
dropElements([1, 2, 3, 4], function(n) {return n > 5;}); // should return [].

// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
    let flattenedArr = [];
    for (let j = 0; j < arr.length; j++) {
        if (Array.isArray(arr[j])) {
            flattenedArr = flattenedArr.concat(steamrollArray(arr[j]));
        } else {
            flattenedArr.push(arr[j]);
        }
    }
    console.log(flattenedArr);
    return flattenedArr;
}

steamrollArray([[["a"]], [["b"]]]); // should return ["a", "b"].
