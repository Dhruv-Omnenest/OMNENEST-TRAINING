import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Search from './Search';
import { useProductSearch } from '../hook/useProductSearch';
import { useWishlist } from '../hook/useWishList';
import { useWindowSize } from '../hook/useWindowSize';

function ProductList({ onViewDetails }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState("");
  const { width } = useWindowSize();

  const { filteredProducts, isSearching } = useProductSearch(products, searchQuery);
  const { toggleWishlist, isInWishlist } = useWishlist();
  const getGridColumns = () => {
  if (width < 480)  return '1fr'; 
  if (width < 768)  return 'repeat(2, 1fr)';
  if (width < 1024) return 'repeat(3, 1fr)'; 
  return 'repeat(auto-fill, minmax(220px, 1fr))'; 
};

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error('Error:', err));
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const url = selectedCategory === 'all'
      ? 'https://fakestoreapi.com/products'
      : `https://fakestoreapi.com/products/category/${selectedCategory}`;

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [selectedCategory]);

  if (loading) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Loading products...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', color: 'red' }}>
        <h2>Error: {error}</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', background: 'white' }}>
      <h1>Product Store</h1>

      <Search
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div style={{ height: '24px', margin: '10px 0' }}>
        {isSearching && (
          <span style={{ color: '#0066cc', fontStyle: 'italic', fontWeight: 'bold' }}>
            Searching...
          </span>
        )}
      </div>

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

      <div style={{
        display: 'grid',
        gridTemplateColumns: getGridColumns(),
        gap: '20px',
        opacity: isSearching ? 0.3 : 1,
        transition: 'opacity 0.2s ease'
      }}>
        {!isSearching && filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={onViewDetails}
            isFavorite={isInWishlist(product.id)}
            onToggleWishlist={toggleWishlist}
          />
        ))}

        {!isSearching && filteredProducts.length === 0 && (
          <div style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '40px' }}>
            <p style={{ fontSize: '18px', color: '#666' }}>
              No products found matching "<strong>{searchQuery}</strong>"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList;
