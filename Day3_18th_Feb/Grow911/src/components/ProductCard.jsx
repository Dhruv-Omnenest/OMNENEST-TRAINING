
function ProductCard({ product, onViewDetails, isFavorite, onToggleWishlist,inWishList=false }) {
  return (
    <div 
      style={{
        position: "relative",
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '15px',
        background: 'white',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s'
      }}
    
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
      onClick={() => onViewDetails(product.id)}
    >
      { !inWishList && <   button
        onClick={(e) => {
          e.stopPropagation();        
          onToggleWishlist(product.id); 
        }}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'white',
          border: '1px solid #eee',
          borderRadius: '50%',
          width: '32px',
          height: '32px',
          cursor: 'pointer',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          // UI dynamically changes based on isFavorite prop
          color: isFavorite ? '#ff4757' : '#ccc', 
          transition: 'transform 0.2s'
        }}
      >
        {isFavorite ? '♥' : '♡'}
      </button>
}

      <img
        src={product.image}
        alt={product.title}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'contain',
          marginBottom: '10px'
        }}
      />
      
      <h3 style={{
        fontSize: '14px',
        margin: '0 0 10px 0',
        height: '40px',
        overflow: 'hidden'
      }}>
        {product.title}
      </h3>
      
      <div style={{ marginBottom: '10px' }}>
        <span style={{ color: '#ff9900' }}>
          {'★'.repeat(Math.floor(product.rating.rate))}
        </span>
        <span style={{ marginLeft: '5px', fontSize: '12px', color: '#666' }}>
          ({product.rating.count})
        </span>
      </div>
      
      <p style={{
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#0066cc',
        margin: 0
      }}>
        ${product.price}
      </p>
    </div>
  );
}

export default ProductCard;