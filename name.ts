let firstName = 'muriel!';

console.log(firstName.toUpperCase());

console.log(firstName.length);

function triple(value: number) {
    return value * 3;
  }
  
function greetTripled(greeting: string, value: number) {
    console.log(`${greeting}, ${triple(value)}!`);
  }
  
  greetTripled('Hiya', 5);