import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AdminRegister = () => {
    const [isAdminRegistered, setIsAdminRegistered] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Check if admin is already registered
        axios.get('/admin/check')
            .then(response => {
                setIsAdminRegistered(response.data.isAdminRegistered);
            })
            .catch(error => {
                console.error("Error checking admin registration:", error);
            });
    }, []);

    // Registration handler
    const handleRegister = (e) => {
        e.preventDefault();
        axios.post('/admin/register', { email, password })
            .then(response => {
                Swal.fire("Success", response.data.message, "success");
                setIsAdminRegistered(true); // Admin registered, switch to login
            })
            .catch(error => {
                Swal.fire("Error", error.response.data.message, "error");
            });
    };

    // Login handler
    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('/admin/login', { email: loginEmail, password: loginPassword })
            .then(response => {
                if (response.data.status) {
                    Swal.fire("Success", response.data.message, "success");
                    localStorage.setItem("token", response.data.token); // Save the token
                    navigate('/dashboard'); // Redirect to dashboard
                } else {
                    Swal.fire("Error", "Invalid login credentials", "error");
                }
            })
            .catch(error => {
                Swal.fire("Error", "Login failed. Please try again.", "error");
            });
    };

    return (
        <div>
            {!isAdminRegistered ? (
                <form onSubmit={handleRegister}>
                    <h2>Admin Registration</h2>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <button type="submit">Register as Admin</button>
                </form>
            ) : (
                <form onSubmit={handleLogin}>
                    <h2>Admin Login</h2>
                    <input
                        type="email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <button type="submit">Login</button>
                </form>
            )}
        </div>
    );
};

export default AdminRegister;
