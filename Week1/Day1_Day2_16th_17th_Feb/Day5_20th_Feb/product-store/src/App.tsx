import { useState, useEffect } from 'react';
import type { Product } from './types/product';
import ProductCard from './components/ProductCard';

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories: string[] = [...new Set(products.map(p => p.category))];
  const filtered = selectedCategory === "all" ? products : products.filter(p => (p.category === selectedCategory));

  useEffect(
    () => {

      fetch("https://fakestoreapi.com/products").then((response) => {
        if (!response.ok) {
          throw new Error("Server returned an error: " + response.status);
        }

        return response.json();
      }).then((data: Product[]) => {
        setProducts(data);
        setIsLoading(false);

      }).catch(
        (err: Error) => {
          setError(err.message);
          setIsLoading(true);
        }
      )

    }, []
  )

  if (isLoading) {
    return (
      <div style={{ padding: "24px" }}>
        <h1>Product Store</h1>
        <div style={{
          display: "flex", flexWrap: "wrap", gap: "16px",
          marginTop: "24px"
        }}>
          {Array.from({ length:10 }).map((_, i) => (
            <div key={i} style={{
              width: "220px", height: "320px",
              backgroundColor: "#E2E8F0",
              borderRadius: "8px",
            }} />
          ))}
        </div>
      </div>
    );
  }


  if (error != null) {
    return (
      <div style={{ padding: "40px", fontFamily: "Arial", color: "red" }}>
        <p>Something went wrong: {error}</p>
        <p>Check your internet connection and refresh the page.</p>
      </div>
    );

  }
  return (
    <>
      <h1 style={{ marginBottom: "8px" }}>Product Store</h1>
      <p style={{ color: "#64748B", marginBottom: "24px" }}>
        Shwoing {filtered.length} from {products.length} products loaded from fakestoreapi.com
      </p>
      <div style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '20px',
        flexWrap: 'wrap'
      }}>
        <button
          onClick={() => setSelectedCategory('all')}
          style={{
            padding: '10px 20px',
            background: selectedCategory === 'all' ? '#0066cc' : 'white',
            color: selectedCategory === 'all' ? 'white' : '#0066cc',
            border: '2px solid #0066cc',
            borderRadius: '20px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          All Products
        </button>

        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '10px 20px',
              background: selectedCategory === cat ? '#0066cc' : 'white',
              color: selectedCategory === cat ? 'white' : '#0066cc',
              border: '2px solid #0066cc',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: 'bold',
              textTransform: 'capitalize'
            }}
          >
            {cat}
          </button>
        ))}
      </div>
      <div style={{ fontFamily: "Arial, sans-serif", padding: "24px" }}>



        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
        }}>

          {filtered.map((product: Product) => (
            <ProductCard
              key={product.id}
              product={product} />
          ))}

        </div>
      </div></>
  );
}

export default App;
