"use strict";
let firstName = 'muriel!';
console.log(firstName.toUpperCase());
console.log(firstName.length);
function triple(value) {
    return value * 3;
}
function greetTripled(greeting, value) {
    console.log(`${greeting}, ${triple(value)}!`);
}
greetTripled('Hiya', 5);
