// Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
//
//     The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
//
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.


// function to find the fibonacci sequence
function fibonacci(number) {
    let sequence = [1, 1];
    for (let i = 1; i <= number; i++) {
        sequence.push(sequence[i-1] + sequence[i]);
    }
    console.log(sequence);
}

fibonacci(40);
function sumFibs(num) {
    let sum = 0;
    let sequence = [1, 1];
    for (let i = 1; i <= 40; i++) {
        sequence.push(sequence[i-1] + sequence[i]);
    }
    console.log(sequence[0]);
    for (let int of sequence) {
        if (int <= num && int % 2 === 1) {
            // console.log(int);
            sum += int;
        }
    }
console.log(sum);
    return sum;
}

// sumFibs(4); // should return 5
// sumFibs(1000); // should return 1785.
sumFibs(4000000); // should return 4613732.
