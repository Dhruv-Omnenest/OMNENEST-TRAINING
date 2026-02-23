  import { useState } from 'react';
  import { useCart } from './context/CardContext';
  import Navbar from './components/Navbar';
  import ProductList from './components/ProductList';
  import ProductDetail from './components/ProductDetail';
  import Cart from './components/Cart';
  import User from './components/Users';
  import WishList from './components/wishList';
import BackToTop from './components/BackToTop';

  function App() {
    const [currentView, setCurrentView] = useState('products');
    const [selectedProductId, setSelectedProductId] = useState(null);
    const { addToCart } = useCart();

    const handleViewDetails = (productId) => {
      setSelectedProductId(productId);
      setCurrentView('detail');
    };

    const handleBackToProducts = () => {
      setCurrentView('products');
      setSelectedProductId(null);
    };

    const handleViewCart = () => {
      setCurrentView('cart');
    };


    const handleViewUser=()=>{
      setCurrentView('users');
    }

    const handleAddToCart = (product) => {
      addToCart(product);
      alert(`${product.title} added to cart!`);
    };


    const handleViewWishList = ()=>{
      setCurrentView('wishlist');
    }

    return (
      <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
        <Navbar onViewCart={handleViewCart} onViewUser={handleViewUser}  onViewWishList={handleViewWishList}/>
        
        {currentView === 'products' && (
          <ProductList onViewDetails={handleViewDetails} />
        )}
        
        {currentView === 'detail' && (
          <ProductDetail
            productId={selectedProductId}
            onBack={handleBackToProducts}
            onAddToCart={handleAddToCart}
          />
        )}
        
        {currentView === 'cart' && (
          <Cart onClose={handleBackToProducts} />
        )}


        {
          currentView==='users' && (
            <User onClose={handleBackToProducts} />
          )
        }
        {
          currentView === 'wishlist' && 
          <WishList onClose={handleBackToProducts} onViewDetails={handleViewDetails}/>
        }


        <BackToTop />
      </div>
    );
  }

  export default App;
