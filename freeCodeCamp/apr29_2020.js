// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
// //
// // For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
    let sum = 0;
    let num = arr[0];
    let end = arr[1];
    if (num > end) {
        num = arr[1];
        end = arr[0];
    } while (num <= end) {
        sum += num;
        num += 1;
    }
    console.log(sum);
    return sum;
}

sumAll([1, 4]); // should return 10.
// sumAll([4, 1]); //  should return 10.

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
    let combo = arr1.concat(arr2);
    // console.log(combo);
    let valueSet = {};
    for (let char of combo) {
        valueSet[char] = (valueSet[char] || 0) + 1;
    }
    console.log(valueSet);
    let answer = [];
    for (let [ key, value ] of Object.entries(valueSet)) {
        console.log(key, value);
        if (value === 1) {
            if (Number.isInteger(parseInt(key))) {
                console.log(key + ' is a number');
                answer.push(parseInt(key));
            } else {
                answer.push(key);
            }
        }
    }
console.log(answer);
    return answer;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]); // should return ["piglet", 4].
