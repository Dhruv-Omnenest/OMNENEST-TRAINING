function StockFilter({ showOnlyInStock, setShowOnlyInStock }) {
  return (
    <div style={{
      marginTop: '20px',
      marginBottom: '20px',
      padding: '15px',
      background: '#f5f5f5',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }}>
      <span style={{ fontWeight: 'bold' }}>Availability:</span>
      <button
        onClick={() => setShowOnlyInStock(!showOnlyInStock)}
        style={{
          padding: '8px 16px',
          border: '2px solid #28a745',
          borderRadius: '20px',
          background: showOnlyInStock ? '#28a745' : 'white',
          color: showOnlyInStock ? 'white' : '#28a745',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'all 0.2s'
        }}
      >
        {showOnlyInStock ? "✓ Showing In Stock Only" : "Showing All Items"}
      </button>
    </div>
  );
}

export default StockFilter;