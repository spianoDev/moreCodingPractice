// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    let answer = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i].search(/[^A-Z]/)) {
            answer.push('-');
            answer.push(str[i].toLowerCase());
        } else if (str[i].search(/[^a-z]/)) {
            answer.push(str[i]);
        } else if (str[i] === ' ' && !str[i + 1].search(/[^A-Z]/)) {
            answer.push('-');
        } else if (str[i] !== '_' && str[i] !== ' ') {
            answer.push(str[i]);
        } else {
            console.log(str[i]);
        }
    }
    if (answer[0] === '-') {
        answer.shift();
    }
    return answer.join('');
}

// spinalCase("This Is Spinal Tap"); // should return "this-is-spinal-tap".
// spinalCase("thisIsSpinalTap"); // should return "this-is-spinal-tap".
// spinalCase("Teletubbies say Eh-oh"); // should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things"); //  should return "all-the-small-things".
// spinalCase("The_Andy_Griffith_Show"); // should return "the-andy-griffith-show".
