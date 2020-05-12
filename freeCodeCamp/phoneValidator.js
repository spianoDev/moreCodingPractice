// Project 4

// Return true if the passed string looks like a valid US phone number.
//
//     The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):
//
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
//
function telephoneCheck(str) {
    let numCount = 0;
    let parenthesis = (str.indexOf(')')) - str.indexOf('(');
    console.log(parenthesis);
    if (str.length < 10 || str.length > 16) {
        console.log('not a valid US phone number');
        return false;
    }
    for (let char of str) {
        if (!char.search(/[^0-9-\s\(\)]/)) {
            console.log('not a real number');
            return false;
        } else if (char.search(/[^0-9]/)) {
            numCount += 1;
            console.log(numCount);
            if (str[0] !== "1" && numCount === 11) {
                console.log('its not valid');
                return false;
            }
        }
    }
    if (str.indexOf(')') === -1 && str.indexOf('(') === -1) {
        if (numCount === 10) {
            console.log('yep, it is valid!');
            return true;
        }
    } else if (parenthesis !== 4 && str.indexOf('(') === -1) {
        console.log('not grouped correctly');
        return false;
    } else if (str[0] !== "1" && str[1] === ' ' || str[0] !== "1" && str[1] === '(') {
        console.log('not the right country code');
        return false;
    } else if (parenthesis === 4 && str.indexOf('(') === -1) {
        console.log('so close...');
        return false;
    } else if (parenthesis !== 4 && str.indexOf('(') !== -1) {
        console.log('another poor grouping');
        return false;
    }
    if (str.indexOf('(') === -1 && str.indexOf(')') === -1) {
        console.log('this is the one');
        return true;
    } else if (numCount === 11 && str[0] === '1') {
        console.log('found one!');
        return true;
    }
    console.log('last true one');
    return true;
}


// telephoneCheck("555-555-5555"); // should return true
// telephoneCheck("1 555-555-5555"); // should return true.
// telephoneCheck("1(555)555-5555"); // should return true.
// telephoneCheck("10 (757) 622-7382"); // should return false.
// telephoneCheck("123**&!!asdf#"); // should return false.
// telephoneCheck("-1 (757) 622-7382"); // should return false
// telephoneCheck("1 (555) 555-5555");// should return true.
// telephoneCheck("2 (757) 622-7382"); // should return false.
// telephoneCheck("2 (757) 622-7382"); // should return false.
// telephoneCheck("(6054756961)"); // should return false
// telephoneCheck("(555-555-5555"); // should return false.
// telephoneCheck("555)-555-5555"); // should return false.
// telephoneCheck("(275)76227382"); // should return false.
telephoneCheck("(555)555-5555"); // should return true.
