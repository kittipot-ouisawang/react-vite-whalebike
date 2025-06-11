import React, { useState } from 'react';
import axios from 'axios';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // 'sending', 'sent', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await axios.post('/api/contact', formData); // Proxy to backend /contact
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    } catch (error) {
      setStatus('error');
      console.error('Error sending contact message:', error);
    }
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <p>Have a question or need assistance? Reach out to us!</p>

      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.2rem' }}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.2rem' }}
          />
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.2rem' }}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.2rem' }}
          ></textarea>
        </div>
        <button type="submit" disabled={status === 'sending'} style={{ padding: '0.8rem 1.5rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'sent' && <p style={{ color: 'green' }}>Your message has been sent successfully!</p>}
        {status === 'error' && <p style={{ color: 'red' }}>Failed to send message. Please try again.</p>}
      </form>

      <p>Alternatively, you can reach us at:</p>
      <p>Phone: +66 81 234 5678</p>
      <p>Email: info@thebikehub.com</p>
    </div>
  );
}

export default ContactPage;