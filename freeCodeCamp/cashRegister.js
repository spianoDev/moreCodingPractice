// Project 5

// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
//
//     cid is a 2D array listing available currency.
//
//     The checkCashRegister() function should always return an object with a status key and a change key.
//
//     Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
//
//     Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
//
//     Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
//
//     Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:
//
//     [
//         ["PENNY", 1.01],
//         ["NICKEL", 2.05],
//         ["DIME", 3.1],
//         ["QUARTER", 4.25],
//         ["ONE", 90],
//         ["FIVE", 55],
//         ["TEN", 20],
//         ["TWENTY", 60],
//         ["ONE HUNDRED", 100]
//     ]

// function checkCashRegister(price, cash, cid) {
//     // determine breakdown of cash inside register
//     let coins = {};
//     for (let item of cid) {
//         if (item[0] === 'PENNY') {
//             coins.pennies = item[1]*100;
//         } else if (item[0] === 'NICKEL') {
//             coins.nickels = item[1] * 20;
//         } else if (item[0] === 'DIME') {
//             coins.dimes = item[1] * 10;
//         } else if (item[0] === 'QUARTER') {
//             coins.quarters = item[1] * 4;
//         } else if (item[0] === 'ONE') {
//             coins.ones = item[1];
//         } else if (item[0] === 'FIVE') {
//             coins.fives = item[1] / 5;
//         } else if (item[0] === 'TEN') {
//             coins.tens = item[1] / 10;
//         } else if (item[0] === 'TWENTY') {
//             coins.twenties = item[1] / 20;
//         } else if (item[0] === 'ONE HUNDRED') {
//             coins.hundreds = item[1] / 100;
//         }
//     }
// console.log(coins);
//     // determine total amount of cash inside register
//     let cashInDrawer = 0;
//     for (let money of cid) {
//         cashInDrawer += money[1];
//     }
//     console.log('Register amount: $' + Math.round(100 * cashInDrawer)/100);
//     // determine change due
//     let changeDue = cash - price;
//     changeDue = Math.round(100 * changeDue)/100;
//     console.log('Here is your change : $' + changeDue);
//     // let changeFromDrawer = cashInDrawer - changeDue;
//     // console.log(Math.round(100 *changeFromDrawer)/100);
//     for (let change of cid) {
//         if (change[1] > 0) {
//             console.log('This is what is in the drawer: ' + change);
//         }
//     }
//     // determine how the change will be returned
//     let correctChange = [];
//
//     let hundreds = coins.hundreds;
//     let twenties = coins.twenties;
//     let tens = coins.tens;
//     let fives = coins.fives;
//     let ones = coins.ones;
//     let quarters; // = coins.quarters;
//     let dimes; // = coins.dimes;
//     let nickels; // = coins.nickels;
//     let pennies; // = coins.pennies;
//     // console.log(hundreds, twenties, tens, fives, ones, quarters, dimes, nickels, pennies);
//     if (changeDue > 1) {
//
//     }
//     console.log(coins.quarters);
//     if (changeDue < 1) {
//         quarters = changeDue / 25 * 100;
//         dimes = changeDue / 10 * 100;
//         nickels = changeDue / 5 * 100;
//         pennies = changeDue * 100;
//
//         if (coins.quarters < quarters) {
//             console.log('not enough quarters, try dimes');
//         }  if (coins.dimes < dimes) {
//             console.log('not enough dimes, try nickels');
//         } if (coins.nickels < nickels) {
//             console.log('not enough nickels, try pennies');
//         } if (coins.pennies < pennies){
//             console.log('not enough change');
//         } if (coins.quarters >= quarters) {
//             console.log('quarters!');
//             correctChange.push('QUARTERS', changeDue);
//         } if (coins.dimes >= dimes) {
//             correctChange.push('DIMES', changeDue);
//         } if (coins.nickels >= nickels) {
//             correctChange.push('NICKELS', changeDue);
//         } if (coins.pennies >= pennies) {
//             correctChange.push('PENNIES', changeDue);
//         }
//
//     }
//     console.log(quarters, dimes, nickels, pennies);
//     console.log(correctChange);
//         // moneyValues.push(hundreds, twenties, tens, fives, ones, quarters, dimes, nickels, pennies);
//
//     // determine status/change
//     let response = {};
//     if (changeDue < 0) {
//         response.status = 'INSUFFICIENT_FUNDS';
//         response.change = [];
//     } else if (changeDue > 1) {
//         response.status = 'OPEN';
//         response.change = correctChange;
//     }
//     console.log(response);
// }

// above wasn't working, so I decided to go in a different direction...

function checkCashRegister(price, cash, cid) {
    // variable for the final result
let answer = {};
    // convert the money to common numeric value
function convertCents(num) {
    return Math.round(num * 100);
}
    // variable holding register contents
let register = cid.map(money => {
    return [money[0], convertCents(money[1])]
}).reverse();
// console.log(register);
    // how much money is owed
let changeBack = convertCents(cash - price);
console.log(changeBack);
    // values of each currency
let currencyValues = { PENNY: 1, NICKEL: 5, DIME: 10, QUARTER: 25, ONE: 100, FIVE: 500, TEN: 1000, TWENTY: 2000, "ONE HUNDRED": 10000 };
    // total amount in register
let registerTotal = 0;
    for (let money of register) {
        // console.log(money[1]);
        // console.log(currencyValues[money[0]] * money[1]);
        registerTotal += currencyValues[money[0]] * money[1];
    }
console.log(registerTotal);

 // conditionals for answer

if (registerTotal === changeBack) {
         answer.status = "CLOSED";
         answer.change = cid;
    } else {
    let giveToCustomer = [];
    for (let note of register) {
        let value = currencyValues[note[0]];
        // console.log('value ' + value);
        if (changeBack % value !== changeBack) {
            // console.log('will not work');
            let max = changeBack - (changeBack % value);
            if (note[1] > max) {
                changeBack -= max;
                note[1] -= max;
                giveToCustomer.push([note[0], max / 100]);
            } else {
                changeBack -= note[1];
                giveToCustomer.push([note[0], (note[1]) / 100]);
                note[1] = 0;
            }
        }
    }
    console.log(changeBack, giveToCustomer);
    if (changeBack > 0) {
        answer.status = "INSUFFICIENT_FUNDS";
        answer.change = [];
    } else {
        answer.status = 'OPEN';
        answer.change = giveToCustomer;
    }
}
console.log(answer);
return answer;
}


// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
//should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
// //should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
// //should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
// //should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
//should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
// checkCashRegister(19, 200, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
