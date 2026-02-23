function FilterByCategory({ selectedCategory, setSelectedCategory, categories }) {
    return (
           <div style={{
        marginTop: '20px',
        marginBottom: '20px',
        padding: '15px',
        background: '#f5f5f5',
        borderRadius: '4px'
      }}>
        <label style={{ 
          display: 'block',
          marginBottom: '10px',
          fontWeight: 'bold' 
        }}>
          Filter by Category:
        </label>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                 {
                  console.log(category);
                  setSelectedCategory(category)
                 }

              }
              
              style={{
                padding: '8px 16px',
                border: '2px solid #0066cc',
                borderRadius: '20px',
                background: selectedCategory === category 
                  ? '#0066cc' 
                  : 'white',
                color: selectedCategory === category 
                  ? 'white' 
                  : '#0066cc',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
    )
}

export default FilterByCategory;