const TAX_RATE = 0.09;

const PHONE_PRICE = 179.99;
const PHONE_ACCESSORY = 14.99;

var BANK_BALANCE = 9924.89;
const SPENDING_THRESHOLD = 200;
const DISCOUNT_COUPON = -0.15;

var amount = 0;

function calculateTax (amount) {
    return amount * TAX_RATE;
}

//2 digits after decimal
function formatAmount (amount) {
    return "$" + amount.toFixed( 2 );
}

//15%OFF
function discountCoupon (amount) {
    return amount * DISCOUNT_COUPON;
}

while (amount <= BANK_BALANCE) {
    //Buy a new phone
    amount = amount + PHONE_PRICE;

    //Buy accessory
    if (amount <= SPENDING_THRESHOLD){
        amount = amount + PHONE_ACCESSORY;
    }
}

//Before TAX
console.log("Price before TAX:" + ' ' + formatAmount(amount));


//After TAX
amount = amount + calculateTax(amount);
console.log("Price after TAX:" + ' ' + formatAmount(amount));

//After TAX + discount
console.log ("Price after TAX + 15% OFF:" + ' ' + formatAmount(amount + discountCoupon(amount)));

//Summary
//--------
//Can you afford this purchase?

if (discountCoupon(amount) <= BANK_BALANCE) {
    console.log ("Thank you, here is your receipt, Sir.");
} else {
    console.log ("Sorry, you have insufficient funds, Sir.")
}

