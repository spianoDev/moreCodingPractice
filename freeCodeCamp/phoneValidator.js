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
    if (str.length < 10 || str.length > 16) {
        console.log('not a valid US phone number');
        return false;
    } for (let char of str) {
        if (!char.search(/[^0-9-\s\(\)]/)) {
            console.log('not a real number');
            return false;
    } else {
            if (str[1] === ' ' || str[1] === '(' && str[0] !== "1") {
                console.log('not the right country code');
                return false;
            } else if (char.search(/[^0-9]/)) {
                numCount += 1;
                console.log(numCount);
                if (numCount === 10 || numCount === 11 && str[0] === "1") {
                    console.log('its valid');
                }


            }
        }
    }

}

// telephoneCheck("555-555-5555"); // should return true
telephoneCheck("1 555-555-5555"); // should return true.
// telephoneCheck("1(555)555-5555"); // should return true.
// telephoneCheck("10 (757) 622-7382"); // should return false.
// telephoneCheck("123**&!!asdf#"); // should return false.
// telephoneCheck("-1 (757) 622-7382"); // should return false
// telephoneCheck("1 (555) 555-5555");// should return true.
// telephoneCheck("2 (757) 622-7382"); // should return false.
// telephoneCheck("2 (757) 622-7382"); // should return false.
