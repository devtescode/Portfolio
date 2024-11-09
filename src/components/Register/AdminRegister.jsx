import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminRegister = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);

    // Check if admin is already registered
    useEffect(() => {
        axios.get('http://localhost:4000/portfolio/check')
            .then(response => {
                setIsRegistered(response.data.isAdminRegistered);
            })
            .catch(error => {
                console.error('Error checking admin registration:', error);
            });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/portfolio/register', { email, password });
            alert(response.data.message);
            setIsRegistered(true);
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    return (
        <div>
            <h2>Admin Registration</h2>
            {isRegistered ? (
                <p>Admin already registered. Please log in instead.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Register</button>
                </form>
            )}
        </div>
    );
};

export default AdminRegister;
