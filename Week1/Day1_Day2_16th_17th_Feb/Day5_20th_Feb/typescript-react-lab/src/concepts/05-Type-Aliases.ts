// ───────────────────────────────────────────── 
// TYPE ALIASES IN TYPESCRIPT 
// ───────────────────────────────────────────── 
  
// type keyword creates a reusable name for any type 
  
// Simple alias for a primitive 
type Price = number; 
type StockSymbol = string; 
  
const currentPrice: Price = 2500.50;      // same as: number 
const symbol: StockSymbol = "RELIANCE";   // same as: string 
  
// ─── UNION TYPES — value can be ONE of several types ────── 
type OrderStatus = "PENDING" | "EXECUTED" | "CANCELLED" | "REJECTED"; 
type OrderType = "BUY" | "SELL"; 
type Exchange = "NSE" | "BSE"; 
  
// Now use them: 
let status: OrderStatus = "PENDING";    // ✅ 
status = "EXECUTED";                     // ✅ 
// status = "SHIPPED";                      // 🔴 ERROR: not in the union 
  
// ─── INTERSECTION TYPES — combine multiple types ─────────── 
type Timestamps = { 
  createdAt: Date; 
  updatedAt: Date; 
}; 
  
type StockInfo = { 
  symbol: string; 
  price: number; 
}; 
  
// Intersection: must have ALL properties from BOTH 
type StockRecord = StockInfo & Timestamps; 
  
const record: StockRecord = { 
  symbol: "TCS", 
  price: 3810.00, 
  createdAt: new Date(), 
  updatedAt: new Date(), 
}; 
  
// ─── TYPE vs INTERFACE — When to Use Which ───────────────── 
// Use interface for: object shapes, class contracts, extendable types 
// Use type for:      unions, intersections, primitives, complex combinations 
  
// Both work for React props — teams usually pick one and stick to it 
