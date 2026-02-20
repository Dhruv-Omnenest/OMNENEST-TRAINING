// src/concepts/04-interfaces.ts
// ─────────────────────────────────────────────
// INTERFACES IN TYPESCRIPT
// ─────────────────────────────────────────────
 
// An interface defines what properties an object must have
 
interface Stock {
  symbol: string;
  companyName: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  isGainer: boolean;
}
 
// Now use the interface as a type
const reliance: Stock = {
  symbol: "RELIANCE",
  companyName: "Reliance Industries Ltd",
  price: 2547.35,
  change: 23.50,
  changePercent: 0.93,
  volume: 1250000,
  isGainer: true,
};
 
// Missing a required property → error
// const tcs: Stock = {
//   symbol: "TCS",
//   companyName: "Tata Consultancy Services",
//   price: 3810.00,
//   // 🔴 ERROR: Property 'change' is missing
//   // 🔴 ERROR: Property 'changePercent' is missing
//   // 🔴 ERROR: Property 'volume' is missing
//   // 🔴 ERROR: Property 'isGainer' is missing
// };
 
// ─── INTERFACE WITH OPTIONAL PROPERTIES ───────────────────
interface UserProfile {
  id: number;
  name: string;
  email: string;
  phone?: string;            // optional
  profilePicture?: string;   // optional
  readonly createdAt: Date;  // cannot be changed
}
 
// ─── EXTENDING INTERFACES ─────────────────────────────────
// Extend = inherit all properties + add more
 
interface BaseEntity {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
 
interface Order extends BaseEntity {
  // Gets id, createdAt, updatedAt automatically
  stockSymbol: string;
  quantity: number;
  price: number;
  type: "BUY" | "SELL";    // ← Union type (explained next)
}
 
const myOrder: Order = {
  id: 1001,
  createdAt: new Date(),
  updatedAt: new Date(),
  stockSymbol: "INFY",
  quantity: 50,
  price: 1520.00,
  type: "BUY",
};
