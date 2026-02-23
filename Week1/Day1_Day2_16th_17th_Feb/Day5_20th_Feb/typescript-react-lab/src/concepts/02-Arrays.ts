// src/concepts/02-arrays.ts
// ─────────────────────────────────────────────
// ARRAYS IN TYPESCRIPT
// ─────────────────────────────────────────────
 
// ARRAY SYNTAX: two equivalent ways to write it
 
// Style 1: Type followed by []
const prices: number[] = [100.5, 200.75, 350.00];
const stockNames: string[] = ["RELIANCE", "TCS", "INFY"];
const marketFlags: boolean[] = [true, false, true];
 
// Style 2: Generic Array<Type> — same result, different look
const volumes: Array<number> = [5000, 12000, 8500];
 
// ─── WHAT YOU CAN DO WITH TYPED ARRAYS ────────────────────
prices.push(450.00);        // ✅ Allowed — number
// prices.push("four fifty");  // 🔴 ERROR: Argument of type 'string' not assignable to 'number'
 
const firstStock = stockNames[0]; // TypeScript knows this is a string
firstStock.toUpperCase();         // ✅ String methods available
 
// ─── TUPLES — FIXED LENGTH, FIXED TYPES ────────────────────
// A tuple is an array where each position has a specific type
 
// Example: [tickerSymbol, price, quantity]
const trade: [string, number, number] = ["RELIANCE", 2500.50, 100];
 
const symbol = trade[0];   // TypeScript knows: string
const tradePrice = trade[1]; // TypeScript knows: number
const qty = trade[2];      // TypeScript knows: number
 
// Tuple prevents wrong types at wrong positions:
// const badTrade: [string, number, number] = [2500.50, "RELIANCE", 100]; // 🔴 ERROR
 
// ─── 2D ARRAYS ────────────────────────────────────────────
// Array of arrays
const orderBook: number[][] = [
  [2500, 100],  // [price, quantity]
  [2499, 200],
  [2498, 500],
];
