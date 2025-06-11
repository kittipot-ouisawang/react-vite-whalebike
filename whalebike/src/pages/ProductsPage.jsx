import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products'); // Proxy to backend /products
        setProducts(response.data);
      } catch (err) {
        setError('Failed to fetch products. Please try again later.');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            {product.image_url && <img src={product.image_url} alt={product.name} />}
            <p>{product.description}</p>
            <p><strong>Price: ${product.price.toFixed(2)}</strong></p>
            {/* Add a "View Details" button later */}
          </div>
        ))}
      </div>
      {products.length === 0 && <p>No products available yet. Check back soon!</p>}
    </div>
  );
}

export default ProductsPage;