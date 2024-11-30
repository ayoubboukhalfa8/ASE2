import React, { useEffect, useState } from 'react';
import axios from 'axios';

function OffersPage() {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/offers/')
            .then(response => setOffers(response.data))
            .catch(error => console.error('Error fetching offers:', error));
    }, []);

    const handlePurchase = (offerId) => {
        axios.post('http://127.0.0.1:8000/api/subscriptions/', {
            offer: offerId,
        })
            .then(() => {
                alert('Offer purchased successfully!');
            })
            .catch(error => {
                console.error('Error purchasing offer:', error);
            });
    };

    return (
        <div style={styles.container}>
            <h1>Available Offers</h1>
            {offers.length > 0 ? (
                <ul>
                    {offers.map(offer => (
                        <li key={offer.id} style={styles.offerItem}>
                            <strong>{offer.title}</strong> - {offer.description} <br />
                            <button onClick={() => handlePurchase(offer.id)} style={styles.button}>
                                Purchase
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No offers available.</p>
            )}
        </div>
    );
}

const styles = {
    container: {
        marginLeft: '220px', // Offset for the left-aligned navbar
        padding: '20px', // Spacing for content
    },
    offerItem: {
        marginBottom: '15px', // Spacing between offers
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
    },
    button: {
        marginTop: '10px',
        padding: '8px 12px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default OffersPage;
