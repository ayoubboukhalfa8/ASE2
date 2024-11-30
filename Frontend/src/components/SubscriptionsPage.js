import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SubscriptionsPage() {
    const [subscriptions, setSubscriptions] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/subscriptions/')
            .then(response => setSubscriptions(response.data))
            .catch(error => console.error('Error fetching subscriptions:', error));
    }, []);

    return (
        <div style={styles.container}>
            <h1>My Subscriptions</h1>
            {subscriptions.length > 0 ? (
                <ul style={styles.list}>
                    {subscriptions.map(sub => (
                        <li key={sub.id} style={styles.listItem}>
                            <strong>Offer:</strong> {sub.offer} <br />
                            <strong>Start Date:</strong> {sub.start_date} <br />
                            <strong>End Date:</strong> {sub.end_date}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No subscriptions found. Purchase an offer to get started!</p>
            )}
        </div>
    );
}

const styles = {
    container: {
        marginLeft: '220px', // Offset for the left-aligned navbar
        padding: '20px', // Spacing for the content
    },
    list: {
        listStyle: 'none',
        padding: 0,
    },
    listItem: {
        marginBottom: '15px',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
    },
};

export default SubscriptionsPage;
