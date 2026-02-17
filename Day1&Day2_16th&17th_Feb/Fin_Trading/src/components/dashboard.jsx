import { useState } from "react";
import Footer from "./footer";
import ProductCard from "./productcard";
import { products } from "./data";
import { getSortedProducts } from "./utils/sortutils"; 
import SortAndFilter from "./sortandfilter/sortandfilter";

function Dashboard() {
    const [sortBy, setSortBy] = useState('default');
    const displayProducts = getSortedProducts(products, sortBy);

    return (
        <>
            <div style={{ padding: '0 20px' }}>
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
            <Footer />
        </>
    );
}

export default Dashboard;