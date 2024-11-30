import React from 'react';

function HomePage() {
    return (
        <div style={styles.container}>
            <h1>Welcome to Setram platform</h1>
            <p>Explore and purchase subscriptions for Setram.</p>
        </div>
    );
}

const styles = {
    container: {
        marginLeft: '220px', // Offset for the left-aligned navbar
        padding: '20px', // Spacing for the content
    },
};

export default HomePage;
