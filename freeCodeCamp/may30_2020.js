// Find the smallest common multiple of the provided parameters that can be evenly divided by both,
// as well as by all sequential numbers in the range between these parameters.
//
//     The range will be an array of two numbers that will not necessarily be in numerical order.
//
//     For example, if given 1 and 3, find the smallest common multiple of both 1 and 3
// that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
    let allNums = [];
    if (arr[0] < arr[1]) {
        for (let i = arr[0]; i <= arr[1]; i++) {
            allNums.push(i);
        }
    } else {
        for (let i = arr[1]; i <= arr[0]; i++) {
            allNums.push(i);
        }
    }
    // console.log(allNums);
    let numsSort = allNums.sort((a, b) =>  b - a);
    console.log(numsSort);
    let highest = numsSort[0];
    let lowest = numsSort[numsSort.length-1];
    let quotient = highest;
    for (let j = highest; j >= lowest; j--) {
        if (quotient % j !== 0) {
            quotient += highest;
            j = highest;
        }
    }
    console.log(quotient);
    return quotient;
}


// smallestCommons([1, 5]); // should return 60.
// smallestCommons([5, 1]); // should return 60.
// smallestCommons([2, 10]); // should return 2520.
// smallestCommons([1, 13]); //should return 360360.
smallestCommons([23, 18]); // should return 6056820.
