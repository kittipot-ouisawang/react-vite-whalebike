import React from 'react';

function ShopLocationPage() {
  return (
    <div>
      <h2>Our Location</h2>
      <p>Visit us at:</p>
      <address>
        The Bike Hub <br />
        123 Cycling Lane <br />
        Nai Mueang, Roi Et <br />
        Thailand, 45000
      </address>

      <p>We're open:</p>
      <ul>
        <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
        <li>Saturday: 10:00 AM - 4:00 PM</li>
        <li>Sunday: Closed</li>
      </ul>

      <h3>Find us on the map:</h3>
      {/* You can embed a Google Map here. Replace with your actual location. */}
      <div style={{ width: '100%', height: '400px', backgroundColor: '#eee', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p>Map Placeholder (Embed Google Maps iframe here)</p>
        {/* Example: <iframe src="YOUR_Maps_EMBED_URL" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
      </div>
    </div>
  );
}

export default ShopLocationPage;