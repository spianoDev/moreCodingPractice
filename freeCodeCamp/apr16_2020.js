// You are given two arrays and an index.
//
//     Use the array methods slice and splice to copy each element of the first array into the second array, in order.
//
//     Begin inserting elements at index n of the second array.
//
//     Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
    let specialArr = [];
    for (let item of arr2){
        specialArr.push(item);
    }
    for (let i = 0; i < arr1.length; i++) {
        specialArr.splice(n + i, 0, arr1[i]);
    }
    console.log(specialArr);
    console.log(arr1, arr2);

    return specialArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Remove all falsy values from an array.
//
//     Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
//
//     Hint: Try converting each value to a Boolean.

function bouncer(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!!arr[i] === true) {
            console.log(arr[i]);
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
    return newArr;
}

bouncer([7, "ate", null, false, 9]);




