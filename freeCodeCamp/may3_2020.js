// Pig Latin is a way of altering English Words. The rules are as follows:
//
// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
//
// - If a word begins with a vowel, just add "way" at the end.
//
function translatePigLatin(str) {
    let answer = [];
    let consonants = [];
    let theRest = [];
    console.log(str);
    let indices = {
        'a': str.toLowerCase().indexOf('a', 0 ),
        'e': str.toLowerCase().indexOf('e', 0 ),
        'i': str.toLowerCase().indexOf('i', 0 ),
        'o': str.toLowerCase().indexOf('o', 0 ),
        'u': str.toLowerCase().indexOf('u', 0 )
    };
    let vowelIndex = [];
    let vowel;
    console.log(indices);
    console.log(Object.values(indices));
    if (str[0].search(/[^AaEeIiOoUu]/)) {
            answer.push(str);
            answer.push('way');
            console.log(answer.join(''));
            return answer.join('');
    } if (indices['a'] === -1 && indices['e'] === -1 && indices['i'] === -1 && indices['o'] === -1 && indices['u'] === -1) {
        answer.push(str);
        answer.push('ay');
        console.log(answer.join(''));
        return answer.join('');
    } else {
        for (let index of Object.values(indices).sort()) {
            if (index > -1) {
                vowelIndex.push(index);
            }
        }
        for (const [key, value] of Object.entries(indices)) {
            if (value === vowelIndex[0]) {
                vowel = key;
            }
        }
        console.log(vowel);
        for (let i = 0; i < indices[vowel]; i++) {
            if (!str[i].search(/[^AaEeIiOoUu]/)) {
                consonants.push(str[i]);
                console.log(str[i]);
            }
        }
        theRest.push(str.slice(indices[vowel]));
        answer.push(theRest.join(''));
        answer.push(consonants.join(''));
        answer.push('ay');
        console.log(answer.join(''));
        return answer.join('');
    }
}

// translatePigLatin("algorithm"); // should return "algorithmway".
// translatePigLatin("california"); // should return "aliforniacay".
// translatePigLatin("schwartz"); // should return "artzschway".
// translatePigLatin("rhythm"); // should return "rhythmay".
translatePigLatin("glove"); // should return "oveglay".
