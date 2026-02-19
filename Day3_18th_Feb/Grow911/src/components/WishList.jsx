import { useState, useEffect } from 'react';
import { useWishlist } from '../hook/useWishList';
import ProductCard from './ProductCard';

function WishList({ onClose, onViewDetails }) {
    const { wishlist } = useWishlist();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!wishlist || wishlist.length === 0) {
            setProducts([]);
            setLoading(false);
            return;
        }

        const fetchWishlistItems = async () => {
            setLoading(true);
            try {
                const promises = wishlist.map(id =>
                    fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json())
                );

                const results = await Promise.all(promises);
                setProducts(results);
            } catch (error) {
                console.error("Error fetching wishlist items:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchWishlistItems();
    }, [wishlist]);

    if (loading) return <div style={{ textAlign: 'center', padding: '50px' }}>Loading your favorites...</div>;

    return (
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
                <h2>My Wishlist ({products.length})</h2>
                <button onClick={onClose} style={backBtnStyle}>
                    ← Back to Shopping
                </button>
            </header>

            {products.length === 0 ? (
                <div style={{ textAlign: 'center', color: '#666' }}>
                    <p>Your wishlist is currently empty.</p>
                </div>
            ) : (
                <div style={gridStyle}>
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onViewDetails={() => onViewDetails(product.id)}
                            inWishList={true}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '25px'
};

const backBtnStyle = {
    padding: '10px 20px',
    background: '#f0f0f0',
    border: '1px solid #ddd',
    borderRadius: '4px',
    cursor: 'pointer'
};

export default WishList;