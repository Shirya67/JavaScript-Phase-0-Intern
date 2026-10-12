// JS-04 — Phase 0 Checkpoint
// Goal: independently combine everything learned in Phase 0.
//
// This is intentionally less guided than the previous assignments.
// Read the requirements first, then decide how to structure your code.
//
// Requirements:
// - Display customer name and age.
// - Calculate subtotal.
// - Apply discount.
// - Calculate final amount.
// - Display payment status.
// - Calculate eligibility.
// - Do not hardcode calculated outputs.
// - Do not install external packages.
//
// Test your program with more than one set of values before submitting.


// Booking details
const customerName = "Yash";
const age = 20;
const ticketPrice = 500;
const quantity = 2;
const discount = 100;
const hasPaid = true;
const isBanned = false;


// Calculate the ticket cost and subtract the discount
const subtotal = ticketPrice * quantity;
let finalAmount = subtotal - discount;

// The final amount should not be less than zero
if (finalAmount < 0) {
  finalAmount = 0;
}

// The customer must be an adult, have paid, and not be banned
const isAdult = age >= 18;
const isEligible = isAdult && hasPaid && !isBanned;

// Print the booking details
console.log("VR Darshan Ticket Booking");
console.log("Customer:", customerName);
console.log("Age:", age);
console.log("Ticket price:", ticketPrice);
console.log("Quantity:", quantity);
console.log("Subtotal:", subtotal);
console.log("Discount:", discount);
console.log("Final amount:", finalAmount);

if (hasPaid) {
  console.log("Payment status: Paid");
} else {
  console.log("Payment status: Not paid");
}

if (isEligible) {
  console.log("Eligible for entry: Yes");
} else {
  console.log("Eligible for entry: No");
}
