// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
    let answer = [];
    if (num <= 0) {
        return "";
    } else {
        while (num > 0) {
            answer.push(str);
            num -= 1;
        }
    }
    console.log(answer);
    return answer.join('');
}

repeatStringNumTimes("abc", 3);

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
    if (str.length <= num) {
        console.log(str);
        return str;
    } else {
        let truncatedAnswer = [];
        for (let i = 0; i < num; i++) {
            truncatedAnswer.push(str[i]);
        }
        truncatedAnswer.push('...');
        console.log(truncatedAnswer.join(''));
        return truncatedAnswer.join('');
    }
}

// truncateString("A-tisket a-tasket A green and yellow basket", 8);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)


