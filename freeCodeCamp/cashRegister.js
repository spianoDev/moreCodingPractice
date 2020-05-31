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

function checkCashRegister(price, cash, cid) {
    // determine breakdown of cash inside register
    let coins = {};
    for (let item of cid) {
        if (item[0] === 'PENNY') {
            coins.pennies = item[1]*100;
        } else if (item[0] === 'NICKEL') {
            coins.nickels = item[1] * 20;
        } else if (item[0] === 'DIME') {
            coins.dimes = item[1] * 10;
        } else if (item[0] === 'QUARTER') {
            coins.quarters = item[1] * 4;
        } else if (item[0] === 'ONE') {
            coins.ones = item[1];
        } else if (item[0] === 'FIVE') {
            coins.fives = item[1] / 5;
        } else if (item[0] === 'TEN') {
            coins.tens = item[1] / 10;
        } else if (item[0] === 'TWENTY') {
            coins.twenties = item[1] / 20;
        } else if (item[0] === 'ONE HUNDRED') {
            coins.hundreds = item[1] / 100;
        }
    }
console.log(coins);
    // determine total amount of cash inside register
    let cashInDrawer = 0;
    for (let money of cid) {
        cashInDrawer += money[1];
    }
    console.log('Register amount: $' + Math.round(100 * cashInDrawer)/100);
    // determine change due
    let changeDue = cash - price;
    console.log('Here is your change : $' + Math.round(100 * changeDue)/100);
    let changeFromDrawer = cashInDrawer - changeDue;
    console.log(changeFromDrawer);
    for (let change of cid) {
        if (change[1] > 0) {
            console.log(change);
        }
    }
    // determine status/change
    let response = {};
    if (changeFromDrawer < 0) {
        response.status = 'INSUFFICIENT_FUNDS';
        response.change = [];
    }
    console.log(response);
}

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
//should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
// //should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
// //should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
// //should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
//should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
