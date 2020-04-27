// Convert the given number into a roman numeral.
//
//     All roman numerals answers should be provided in upper-case.
let romanChars = {1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X',
    20: 'XX', 30: 'XXX', 40: 'XL', 50: 'L', 60: 'LX', 70: 'LXX', 80: 'LXXX', 90: 'XC', 100: 'C',
    200: 'CC', 300: 'CCC', 400: 'CD', 500: 'D', 600: 'DC', 700: 'DCC', 800: 'DCCC', 900: 'CM',
    1000: 'M', 2000: 'MM', 3000: 'MMM'};
function convertToRoman(num) {
    let thousands = Math.floor(num/1000) * 1000;
    let hundreds = Math.abs(thousands - Math.floor(num/100) * 100);
    let tens = Math.abs(thousands + hundreds - Math.floor(num/10) * 10);
    let ones = num % 10;
    let answer = [];
    console.log(thousands, hundreds, tens, ones);
    if (thousands !== 0) {
        answer.push(romanChars[thousands]);
    } if (hundreds !== 0) {
        answer.push(romanChars[hundreds]);
    } if (tens !== 0) {
        answer.push(romanChars[tens]);
    } if (ones !== 0) {
        answer.push(romanChars[ones]);
    }
    console.log(answer.join(''));
    return(answer.join(''));
}

convertToRoman(3030);
