import { useState, useEffect, useRef } from 'react';

export const useProductSearch = (products, searchQuery) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredProducts(products);
      setIsSearching(false);
      return;
    }
    setIsSearching(true);
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      const query = searchQuery.toLowerCase();

      const results = products.filter((product) => {
        return (
          product.title.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) || 
          product.category.toLowerCase().includes(query)     
        );
      });
      setFilteredProducts(results);
      setIsSearching(false); 
    }, 500);

    return () => clearTimeout(timer.current);
  }, [searchQuery, products]);

  return { filteredProducts, isSearching };
};