function Search({value,onChange}) {
  const containerStyle = {
    display: 'flex',
    padding:"10px",
    width: '100%'
  };

  const inputStyle = {
    width: '100%',
    maxWidth: '400px',
    padding: '12px 24px',
    fontSize: '16px',
    color: '#333',
    backgroundColor: '#fff',
    border: '2px solid #ddd',
    borderRadius: '30px',
    outline: 'none',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease-in-out',
  };

  return (
    <div style={containerStyle}>
      <input 
        type="text" 
        placeholder="Search Product..."
        style={inputStyle}
        onFocus={(e) => {
          e.target.style.borderColor = '#007bff';
          e.target.style.boxShadow = '0 6px 12px rgba(0, 123, 255, 0.15)';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = '#ddd';
          e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Search;