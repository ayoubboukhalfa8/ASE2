import React, { useState } from 'react';
import axios from 'axios';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/token/', {
            username,
            password,
        })
            .then(response => {
                alert('Login successful!');
                localStorage.setItem('access', response.data.access);
                localStorage.setItem('refresh', response.data.refresh);
            })
            .catch(error => {
                console.error('Error logging in:', error);
                alert('Login failed!');
            });
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
