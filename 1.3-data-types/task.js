"use strict"
function calculateTotalMortgage(percent, contribution, amount, date) {
    if(typeof(percent) == "string" || typeof(contribution) == "string" || typeof(amount) == "string" || typeof(date) == "string"){
        percent = Number.parseInt(percent);
        contribution = Number.parseInt(contribution);
        amount = Number.parseInt(amount);
        date = Number.parseInt(date);
    }
    let S = amount - contribution;
    let P = (percent/100/12);
    date = (date.getFullYear() - new Date().getFullYear()) * 12 + ((date.getMonth() + 1)  - (new Date().getMonth() + 1));
    let monthPayment = S * (P + P / (((1 + P)**date) - 1));
    let totalAmount = parseFloat((monthPayment * date).toFixed(2));
    return totalAmount;
}

function getGreeting(name) {
   if(typeof(name) !== "string"){
       name = "Аноним";
   } 
   let greeting = `Привет, мир! Меня зовут ${name}.`
   return greeting;
}