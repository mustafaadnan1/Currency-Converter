#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, // Base Currency
    TRY: 32.58,
    SGD: 1.36,
    OMR: 0.38,
    EUR: 0.93,
    THB: 37.0,
    PKR: 278.3,
    CAD: 1.25,
    AUD: 1.3,
    CNY: 6.48,
    RUB: 77.8,
    INR: 75.1,
    AED: 3.67,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: [
            "USD",
            "TRY",
            "SGD",
            "OMR",
            "EUR",
            "THB",
            "PKR",
            "CAD",
            "AUD",
            "CNY",
            "RUB",
            "INR",
            "AED",
        ],
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: [
            "USD",
            "TRY",
            "SGD",
            "OMR",
            "EUR",
            "THB",
            "PKR",
            "CAD",
            "AUD",
            "CNY",
            "RUB",
            "INR",
            "AED",
        ],
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number",
    },
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convetedAmount = baseAmount * toAmount;
console.log(convetedAmount);
