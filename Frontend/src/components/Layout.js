import React from 'react';
import Navbar from './Navbar';

function Layout({ children }) {
    return (
        <div style={styles.layout}>
            <Navbar />
            <main style={styles.main}>
                {children}
            </main>
        </div>
    );
}

const styles = {
    layout: {
        display: 'flex',
    },
    main: {
        flex: 1,
        marginLeft: '220px', // Matches the width of the navbar
        padding: '20px',
    },
};

export default Layout;
