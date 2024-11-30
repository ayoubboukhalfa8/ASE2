import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi'; // Logout icon

function Navbar() {
    return (
        <nav style={styles.navbar}>
            {/* User Profile Section */}
            <div style={styles.profile}>
                <img 
                    src="https://via.placeholder.com/100" 
                    alt="User Profile" 
                    style={styles.profileImage} 
                />
                <p style={styles.profileName}>Mohamed</p>
            </div>

            {/* Navigation Links */}
            <ul style={styles.navList}>
            <li style={{ ...styles.navItem, ...styles.spacer }}></li>
                <li style={styles.navItem}>
                    <Link to="/" style={styles.link}>Home</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/subscriptions" style={styles.link}>My Subscriptions</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/offersPage" style={styles.link}>Offers</Link>
                </li>
                <li style={{ ...styles.navItem, ...styles.spacer }}></li>
                <li style={{ ...styles.navItem, ...styles.spacer }}></li>
                <li style={styles.navItem}>
                    <Link to="/account" style={styles.link}>My Account</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/settings" style={styles.link}>Settings</Link>
                </li>
                <li style={{ ...styles.navItem, ...styles.spacer }}></li>
                <li style={{ ...styles.navItem, ...styles.spacer }}></li>
                <li style={{ ...styles.navItem, ...styles.spacer }}></li>
                <li style={{ ...styles.navItem, ...styles.spacer }}></li>
                <li style={{ ...styles.navItem, ...styles.spacer }}></li>
                {/* Logout Button */}
                <li style={styles.navItem}>
                    <button style={styles.logoutButton}>
                        <FiLogOut style={styles.logoutIcon} />
                        Logout
                    </button>
                </li>
            </ul>
        </nav>
    );
}

const styles = {
    navbar: {
        width: '180px',
        height: '100vh',
        background: '#333',
        color: '#fff',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '20px 10px',
    },
    profile: {
        textAlign: 'center',
        marginBottom: '0px',
    },
    profileImage: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '5px',
    },
    profileName: {
        fontSize: '14px',
        fontWeight: 'bold',
    },
    navList: {
        listStyle: 'none',
        padding: 0,
        margin: '10px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    navItem: {
        textAlign: 'center',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '14px',
    },
    spacer: {
        height: '10px', // Adds a little space between items
    },
    logoutButton: {
        background: 'transparent',
        border: 'none',
        color: '#fff',
        fontSize: '14px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
    },
    logoutIcon: {
        fontSize: '18px',
    },
};

export default Navbar;
