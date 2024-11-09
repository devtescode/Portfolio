import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Narbar from '../Navbar-folder/Narbar';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate()
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/portfolio/login', { email, password });
            localStorage.setItem('token', response.data.token); // Store token in localStorage
            setMessage(response.data.message);
            navigate("/admindb")
        } catch (error) {
            setMessage(error.response.data.message);
        }
    };

    return (
        <div>
            <h2>Admin Login</h2>
            {/* <form onSubmit={handleLogin}>
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
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>} */}








            <main className="flex-shrink-0">
                <div>
                    <Narbar />
                </div>
                <section className="py-5">
                    <div className="container px-5">
                        <div className="bg-light rounded-4 py-5 px-4 px-md-5">
                            <div className="text-center mb-5">
                                <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-2">
                                    <i className="bi bi-envelope" />
                                </div>
                                <p className="lead fw-normal text-muted mb-0">Admin Login</p>
                            </div>
                            <div className="row gx-5 justify-content-center">
                                <div className="col-lg-8 col-xl-6">

                                    <form onSubmit={handleLogin}>
                                       
                                        <div className=" mb-3">
                                            
                                            {/* <label>Email:</label> */}
                                            <input
                                                className='form-control p-3'
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder='Email Address'
                                            />
                                            {/* <label htmlFor="email">Email address</label> */}

                                        </div>
                                        <div className="mb-3">
                                            <input
                                                className='form-control p-3'
                                                type="password"
                                                value={password}
                                                placeholder='Password'
                                                onChange={(e) => setPassword(e.target.value)}                                                
                                            />
                                            {/* <label htmlFor="phone">Password</label> */}
                                        </div>
                                        <div className="d-grid">
                                            <button
                                                type='submit'
                                                className="btn btn-primary btn-lg "
                                                id="submitButton"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                    {message && <p>{message}</p>} 
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AdminLogin;
