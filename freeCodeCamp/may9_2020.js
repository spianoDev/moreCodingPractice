
// Find the missing letter in the passed letter range and return it.
//
//     If all letters are present in the range, return undefined.

function fearNotLetter(str) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let start = alpha.indexOf(str[0]);
    console.log(start);
    let index = 0;
    while (index < str.length) {
        if (alpha[start] === str[index]) {
            index += 1;
            start += 1;
        } else {
            console.log(alpha[start]);
            return alpha[start];
        }
    }
    return undefined;
}

// fearNotLetter("abce"); // should return 'd'
// fearNotLetter("bcdf"); // should return "e".
fearNotLetter("stvwx"); // should return "u".

// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
//
//     In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
//
//     The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

function uniteUnique(arr) {
    let newArr = [];
    // console.log(arguments);
    for (let values of arguments) {
        // console.log(values);
        values.forEach(function (item) {
            newArr.push(item);
        });
    }
    // console.log(newArr);
    let answer = [...new Set(newArr)];
    console.log(answer);
    return answer;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // should return [1, 3, 2, 5, 4].

// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
    let htmlities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
    };
    let answer = str;
    let i = 0;
        while (i < str.length) {
        for (let symbol of Object.keys(htmlities)) {
            if (str[i] === symbol) {
                console.log(htmlities[symbol]);
                answer = answer.replace(str[i], htmlities[symbol]);
                i += 1;
            }
        }
            i += 1;
    }
    console.log(answer);
    return answer;
}

// convertHTML("Dolce & Gabbana"); // should return "Dolce &amp; Gabbana".
convertHTML("Hamburgers < Pizza < Tacos"); // should return "Hamburgers &lt; Pizza &lt; Tacos".
