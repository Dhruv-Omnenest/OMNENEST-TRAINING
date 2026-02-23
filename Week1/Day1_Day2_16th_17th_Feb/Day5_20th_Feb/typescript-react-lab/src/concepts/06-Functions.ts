 
function add(a: number, b: number): number { 
  return a + b; 
} 
add(10, 20);    
  

function formatPrice(price: number, currency: string): string { 
  return `${currency} ${price.toFixed(2)}`; 
} 
  
formatPrice(2547.5, "₹");  
  
function logTrade(symbol: string, qty: number): void { 
  console.log(`Traded ${qty} shares of ${symbol}`); 
} 
  

function greetUser(name: string, title?: string): string { 
  if (title) { 
    return `Hello, ${title} ${name}!`; 
  } 
  return `Hello, ${name}!`; 
} 
  
greetUser("Ravi");              
greetUser("Kumar", "Mr.");    
 
function calculateBrokerage( 
  tradeValue: number, 
  rate: number = 0.0003  
): number { 
  return tradeValue * rate; 
} 
  
calculateBrokerage(100000);         
calculateBrokerage(100000, 0.0005);
  
const multiply = (a: number, b: number): number => a * b;  
type MathOperation = (a: number, b: number) => number; 
const add2: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;  
function sumAll(...numbers: number[]): number { 
return numbers.reduce((total, n) => total + n, 0); 
} 
sumAll(10, 20, 30, 40);  
