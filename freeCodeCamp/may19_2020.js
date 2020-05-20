// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
//
// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
function primeFinder(number) {
    let primes = [];
    let allNums = [];
    for (let i = 2; i <= number; i++) {
        if (!allNums[i]) {
            primes.push(i);
            for (let j = i << 1; j <= number; j += i)
            {
                allNums[j] = true;
            }
        }
    }
console.log(primes);
    return primes;
}
// primeFinder(10);

function sumPrimes(num) {
    let sum = 0;
    for (let number of primeFinder(num)) {
        sum += number;
    }
    console.log(sum);
}

sumPrimes(10); // should return 17.
