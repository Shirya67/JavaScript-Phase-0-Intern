// JS-03 — Operators
// Goal: use arithmetic, comparison, and logical operators.
//
// Requirements:
// - Calculate subtotal.
// - Apply the discount.
// - Calculate final amount.
// - Determine eligibility from age, payment, and banned status.
//
// Important:
// The final amount and eligibility must be calculated, not hardcoded.
//
// Input values for the ticket booking
const customerName = "Yash";
const age = 20;
const ticketPrice = 500;
const quantity = 2;
const discount = 100;
const hasPaid = true;
const isBanned = false;


// Calculate the ticket cost
const subtotal = ticketPrice * quantity;
const finalAmount = subtotal - discount;


// A customer must be an adult, have paid, and not be banned
const isEligible = age >= 18 && hasPaid && !isBanned;

console.log("Ticket Booking");
console.log("Customer:", customerName);
console.log("Age:", age);
console.log("Ticket price:", ticketPrice);
console.log("Quantity:", quantity);
console.log("Subtotal:", subtotal);
console.log("Discount:", discount);
console.log("Final amount:", finalAmount);
console.log("Eligible for entry:", isEligible);
