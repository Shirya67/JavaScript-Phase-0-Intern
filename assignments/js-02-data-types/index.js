// JS-02 — Data Types & Type Conversion
// Goal: identify primitive values and convert input deliberately.
//
// Requirements:
// - Create examples of string, number, boolean, undefined, and null.
// - Inspect their types with typeof.
// - Treat price and quantity as strings initially.
// - Convert them before calculating the total.
// - Explain your observations in the assignment README.
//
// Important:
// Do not remove the original string inputs just because you created converted values.

// Primitive data type examples
const greeting = "Hello, JavaScript!"; // string
const score = 42; // number
const isActive = true; // boolean
let noValue; // undefined
const emptyValue = null; // null

console.log("String:", greeting, typeof greeting);
console.log("Number:", score, typeof score);
console.log("Boolean:", isActive, typeof isActive);
console.log("Undefined:", noValue, typeof noValue);
console.log("Null:", emptyValue, typeof emptyValue);

// Provided inputs are strings at first
const price = "250";
const quantity = "3";

console.log("Original price:", price, typeof price);
console.log("Original quantity:", quantity, typeof quantity);

// Convert strings to numbers before calculating the total
const convertedPrice = Number(price);
const convertedQuantity = Number(quantity);
const total = convertedPrice * convertedQuantity;

console.log("Converted price:", convertedPrice, typeof convertedPrice);
console.log("Converted quantity:", convertedQuantity, typeof convertedQuantity);
console.log("Total:", total);

