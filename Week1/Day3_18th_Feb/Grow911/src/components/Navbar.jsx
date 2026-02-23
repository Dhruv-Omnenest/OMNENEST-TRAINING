import { useCart } from '../context/CardContext';
import { useWishlist } from '../hook/useWishList';

function Navbar({ onViewCart, onViewUser, onViewWishList }) {
  const { getCartCount } = useCart();
  const { wishlist } = useWishlist();

  const wishlistCount = wishlist?.length || 0; 
  const cartCount = getCartCount();

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <div style={styles.logo} onClick={() => window.location.reload()}>
          <span style={{ fontSize: '28px' }}>🛍️</span>
          <h2 style={styles.logoText}>ShopCentral</h2>
        </div>

        <div style={styles.buttonGroup}>
          <button onClick={onViewUser} style={styles.secondaryBtn}>
            Users
          </button>

          <button 
            onClick={onViewCart} 
            style={{ ...styles.secondaryBtn, position: 'relative' }}
          >
            <span>🛒</span>
            <span>Cart</span>
            {cartCount > 0 && (
              <span style={styles.badge}>{cartCount}</span>
            )}
          </button>
          <button 
            onClick={onViewWishList} 
            style={{ ...styles.secondaryBtn, position: 'relative' }}
          >
            <span>WishList</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    background: '#ffffff',
    color: '#333',
    padding: '0 20px',
    height: '70px',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    maxWidth: '1100px',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
  },
  logoText: {
    margin: 0,
    fontSize: '22px',
    fontWeight: '800',
    background: 'linear-gradient(45deg, #0066cc, #00d2ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '-0.5px',
  },
  buttonGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  secondaryBtn: {
    padding: '8px 16px',
    background: 'transparent',
    color: '#555',
    border: '1px solid #ddd',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '5px'
  },
  badge: {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    background: '#ff4757',
    color: 'white',
    borderRadius: '50%',
    minWidth: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '11px',
    fontWeight: 'bold',
    border: '2px solid white',
  },
};

export default Navbar;