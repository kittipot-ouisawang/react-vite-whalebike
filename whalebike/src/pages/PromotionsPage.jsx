import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PromotionsPage() {
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const response = await axios.get('/api/promotions'); // Proxy to backend /promotions
        setPromotions(response.data);
      } catch (err) {
        setError('Failed to fetch promotions. Please try again later.');
        console.error('Error fetching promotions:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPromotions();
  }, []);

  if (loading) return <p>Loading promotions...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>Current Promotions</h2>
      {promotions.length > 0 ? (
        <ul>
          {promotions.map(promo => (
            <li key={promo.id}>
              <h3>{promo.title}</h3>
              <p>{promo.description}</p>
              <p>Valid until: {new Date(promo.expiry_date).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No active promotions right now. Stay tuned for exciting offers!</p>
      )}
    </div>
  );
}

export default PromotionsPage;