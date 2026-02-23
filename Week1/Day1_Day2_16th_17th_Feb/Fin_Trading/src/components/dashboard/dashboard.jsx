import { useState } from "react";
import ProductCard from "../cards/productcard";
import { products } from "../../data/data";
import { getSortedProducts } from "../utils/sortutils";
import SortAndFilter from "../sortandfilter/sortandfilter";
import FilterByCategory from "../sortandfilter/filterByCategory";
import getFilteredProducts from "../utils/filter_util";
import StockFilter from "../sortandfilter/stock_filter";


function Dashboard() {
    const [sortBy, setSortBy] = useState('default');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [showOnlyInStock, setShowOnlyInStock] = useState(false);
    const uniqueCategories = ['all', ...new Set(products.map(p => p.category.trim()))];
    const filteredProducts = getFilteredProducts(
        { selectedCategory, products,showOnlyInStock }
    );
    const displayProducts = getSortedProducts(filteredProducts, sortBy);
    return (
        <>
            <div>
                <FilterByCategory
                    categories={uniqueCategories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <StockFilter 
                    showOnlyInStock={showOnlyInStock} 
                    setShowOnlyInStock={setShowOnlyInStock} 
                />
            </div>
            <div>
                <SortAndFilter sortBy={sortBy} onSortChange={setSortBy} />
            </div>
            <div style={{ padding: '20px' }}>
                <h1>E-commerce Product Catalog</h1>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                    gap: '20px',
                    marginTop: '20px'
                }}>
                    {displayProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Dashboard;