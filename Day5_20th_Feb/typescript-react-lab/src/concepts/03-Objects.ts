// src/concepts/03-objects.ts
// ─────────────────────────────────────────────
// OBJECT TYPES IN TYPESCRIPT
// ─────────────────────────────────────────────
 
// Basic object type annotation (inline)
const stock: { symbol: string; price: number; isActive: boolean } = {
  symbol: "RELIANCE",
  price: 2500.50,
  isActive: true,
};
 
// Access — TypeScript knows the type of each property
console.log(stock.symbol.toUpperCase()); // ✅ string method
console.log(stock.price.toFixed(2));     // ✅ number method
console.log(stock.isActive);             // ✅ boolean
 
// TypeScript catches wrong property access:
// console.log(stock.volume); // 🔴 ERROR: Property 'volume' does not exist
 
// ─── OPTIONAL PROPERTIES using ? ──────────────────────────
const user: {
  name: string;
  email: string;
  phone?: string;   // ← the ? makes it optional
} = {
  name: "Ravi Kumar",
  email: "ravi@example.com",
  // phone is not required — TypeScript won't complain
};
 
// ─── READONLY PROPERTIES ──────────────────────────────────
const config: {
  readonly apiUrl: string;   // ← cannot be changed after creation
  timeout: number;
} = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
};
 
config.timeout = 3000;      // ✅ Allowed
// config.apiUrl = "other.com"; // 🔴 ERROR: Cannot assign to 'apiUrl' because it is a read-only property
