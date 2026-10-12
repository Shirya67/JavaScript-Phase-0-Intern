// JS-01 — Variables & Constants
// Goal: practice storing booking information with const and let.
//
// Requirements:
// - Create the customer and booking variables described in the notes.
// - Print a readable booking summary.
// - Calculate the total from ticket price and quantity.
// - Use const unless a value genuinely needs reassignment.
//
// Tip:
// Start with the input values. Do not create a second hardcoded variable
// containing the expected total.


// Input values for the booking
const customerName = "Yash Hupare";
const bookingId = "BKG-512";
const destination = "Goa";
const ticketPrice = 800;
const quantity = 2;

// Calculate the total from the given inputs.
const total = ticketPrice * quantity;

// Print a readable booking summary.
console.log("Booking Summary");
console.log("Customer:", customerName);
console.log("Booking ID:", bookingId);
console.log("Destination:", destination);
console.log("Ticket price:", ticketPrice);
console.log("Quantity:", quantity);
console.log("Total:", total);

