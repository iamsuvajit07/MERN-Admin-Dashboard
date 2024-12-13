import React, { useState, useEffect } from 'react';
import ProductTable from '../components/ProductTable';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=5');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      {loading ? <p>Loading...</p> : <ProductTable products={products} />}
    </div>
  );
};

export default Products;
