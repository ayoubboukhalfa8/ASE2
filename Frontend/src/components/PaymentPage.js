import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function PaymentPage() {
    const location = useLocation();
    const { offer } = location.state || {}; // Get the offer details

    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [message, setMessage] = useState('');

    const handlePayment = (e) => {
        e.preventDefault();
        setMessage('');

        if (!cardNumber || !expirationDate || !cvv) {
            setMessage('Please fill out all fields correctly.');
            return;
        }

        // Call your backend payment API
        axios.post('http://127.0.0.1:8000/api/payment/', {
            card_number: cardNumber,
            expiration_date: expirationDate,
            cvv: cvv,
            amount: offer.price, // Use the offer price
        })
        .then(response => {
            setMessage('Payment successful!');
        })
        .catch(error => {
            console.error('Payment error:', error);
            setMessage('Payment failed. Please try again.');
        });
    };

    if (!offer) {
        return <p>No offer selected for payment.</p>;
    }

    return (
        <div style={styles.container}>
            <h1>Payment Gateway</h1>
            <h2>{offer.name}</h2>
            <p>{offer.description}</p>
            <p>Amount to Pay: {offer.price} DZD</p>
            <form onSubmit={handlePayment} style={styles.form}>
                <div style={styles.field}>
                    <label>Card Number:</label>
                    <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <div style={styles.field}>
                    <label>Expiration Date:</label>
                    <input
                        type="text"
                        placeholder="MM/YY"
                        value={expirationDate}
                        onChange={(e) => setExpirationDate(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <div style={styles.field}>
                    <label>CVV:</label>
                    <input
                        type="text"
                        placeholder="123"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <button type="submit" style={styles.button}>Pay</button>
                {message && <p style={styles.message}>{message}</p>}
            </form>
        </div>
    );
}

const styles = {
    container: {
        margin: '50px auto',
        width: '400px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    field: {
        marginBottom: '15px',
    },
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ddd',
    },
    button: {
        padding: '10px 15px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    message: {
        marginTop: '15px',
        color: '#333',
        fontWeight: 'bold',
    },
};

export default PaymentPage;
