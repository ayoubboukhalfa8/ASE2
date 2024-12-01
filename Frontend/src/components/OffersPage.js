import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function OffersPage() {
    const [offers, setOffers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch offers from the backend API
        axios.get('http://127.0.0.1:8000/api/offers/')
            .then(response => {
                console.log('Offers fetched:', response.data); // Debug log
                setOffers(response.data);
            })
            .catch(error => {
                console.error('Error fetching offers:', error);
            });
    }, []);

    const handlePurchase = (offer) => {
        // Navigate to the payment page with the selected offer details
        navigate('/payment', { state: { offer } });
    };

    return (
        <div style={styles.container}>
            <h1>Available Offers</h1>
            {offers.length > 0 ? (
                <ul>
                    {offers.map(offer => (
                        <li key={offer.id} style={styles.offerItem}>
                            <strong>{offer.name}</strong> - {offer.description} <br />
                            Price: {offer.price} DZD for {offer.duration_days} days
                            <br />
                            <button
                                onClick={() => handlePurchase(offer)}
                                style={styles.button}
                            >
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
