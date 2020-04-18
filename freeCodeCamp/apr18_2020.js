// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
//
//     For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
//
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
function getIndexToIns(arr, num) {
    arr = arr.sort((a, b) => a - b);
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (num <= arr[i]) {
            console.log(i);
            return i;
        }
    }
    console.log(arr.length);
    return arr.length;
}

// getIndexToIns([10, 30, 20, 40, 50], 30); // should return 3.
// getIndexToIns([5, 3, 20, 3], 5); // should return 2.
getIndexToIns([2, 5, 10], 15); // should return 3.

// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
//
//     For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
//
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
//
//     Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
    let strObject = {};
    for (let char of arr[0]) {
        strObject[char.toLowerCase()] = (strObject[char.toLowerCase()] || 0) + 1;
    }
    console.log(strObject);
    let secondStrObj = {};
    for (let char of arr[1]) {
        secondStrObj[char.toLowerCase()] = (secondStrObj[char.toLowerCase()] || 0) + 1;
    }
    console.log(secondStrObj);
    for (let key in secondStrObj) {
        console.log(key);
        if ((key in strObject)) {
            console.log('duplicate ' + key);
        } else {
            console.log('missing ' + key);
            return false;
        }
    }
    if (Object.keys(secondStrObj).length > Object.keys(strObject).length) {
        console.log('something is missing...');
        return false;
    }
    console.log('they are all there!');
    return true;
}

// mutation(["Hello", "help"]); // should return false.
// mutation(["ate", "date"]); //  should return false.
mutation(["floor", "for"]); // should return true.
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); // should return true.
