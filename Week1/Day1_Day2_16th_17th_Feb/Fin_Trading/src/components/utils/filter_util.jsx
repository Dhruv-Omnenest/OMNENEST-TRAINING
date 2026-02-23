function getFilteredProducts({ selectedCategory, products, showOnlyInStock }) {
    let result = products;

    if (selectedCategory !== 'all') {
        result = result.filter(product => product.category.trim() === selectedCategory);
    }
    if (showOnlyInStock) {
        result = result.filter(product => product.inStock === true);
    }

    return result;
}

export default getFilteredProducts;