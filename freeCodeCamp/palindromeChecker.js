// Project 1

// Return true if the given string is a palindrome. Otherwise, return false.
//
//     A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
//
// Note
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
//
// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
//
// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
function palindrome(str) {
    // check for alpha/numeric characters and push all letters/numbers into an array
    let letters = [];
    for (let char of str) {
        // console.log(char);
        if (char.search(/[^A-Za-z1-9]/)) {
            console.log(char);
            letters.push(char.toLowerCase());
        }
        console.log('invalid');
    }
    // compare the joined array (word) with the reverse. If the same return true
    console.log(letters);
    console.log(letters.reverse());
    if (letters.join('') === letters.reverse().join('')){
        console.log('yep');
        return true;
    }
    console.log('nope');
    return false;
}

// palindrome("_eyeb"); // should return true.
// palindrome("race car"); // should return true.
// palindrome("nope"); // should return false.
// palindrome("My age is 0, 0 si ega ym."); // should return true.
palindrome("1 eye for of 1 eye."); // should return false.
