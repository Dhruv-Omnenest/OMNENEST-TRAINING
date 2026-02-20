
// src/concepts/01-primitives.ts
// ─────────────────────────────────────────────
// PRIMITIVE TYPES IN TYPESCRIPT
// ─────────────────────────────────────────────
// 1. NUMBER — integers, decimals, negative numbers
const stockPrice: number = 2547.35;
const quantity: number = 100;
const loss: number = -500;
 
// 2. STRING — text values
const companyName: string = "Infosys Ltd";
const tickerSymbol: string = "INFY";
 
// 3. BOOLEAN — true or false only
const isMarketOpen: boolean = true;
const isSuspended: boolean = false;
 
// 4. UNDEFINED — variable declared but not assigned
let lastTradeTime: undefined = undefined;
 
// 5. NULL — intentional absence of a value
let currentUser: null = null;
 
// ─── TYPE INFERENCE ───────────────────────────────────────
// TypeScript can GUESS the type from the value (you don't always need annotation)
 
const pi = 3.14159;       // TypeScript infers: number
const greeting = "Hello"; // TypeScript infers: string
const isOpen = true;      // TypeScript infers: boolean
 
// But explicit annotations are better for documentation:
const maxOrderSize: number = 10000;  // ← clear intent




// // ─── WHAT HAPPENS WITH WRONG TYPES ────────────────────────
 
// const price: number = "expensive"; // 🔴 ERROR: Type 'string' is not assignable to type 'number'
// const name: string = 42;           // 🔴 ERROR: Type 'number' is not assignable to type 'string'
// const flag: boolean = 1;           // 🔴 ERROR: Type 'number' is not assignable to type 'boolean'
