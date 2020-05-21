// PRE-CLASS DRILL
// Write a function that takes in an integer and outputs the sum of all the numbers from 1 to that integer.
//     Ex:
// Input: 2
// Output: 3 (because 1 + 2 = 3)
// Input: 4
// Output: 10  (because 1 + 2 + 3 + 4 = 10)
// Input: 10
// Output: 55

function sumInt(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    console.log(sum);
    return sum;
}

sumInt(2); // 3
sumInt(4); // 10
sumInt(10); // 55
