import { products } from "../../data/data";
  function getFilteredProducts({ selectedCategory })  {
    if (selectedCategory === 'all') {
      return products;
    }
    return products.filter(product => 
      product.category === selectedCategory
    );
  }; 


  export  default getFilteredProducts;