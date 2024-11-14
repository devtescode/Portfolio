import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
import Narbar from '../Navbar-folder/Narbar';
import { API_URLS } from '../../../utils/apiConfig';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Start loading

        try {
            const response = await axios.post(API_URLS.adminlogin, { email, password });
            localStorage.setItem('token', response.data.token);
            setMessage(response.data.message);

            Swal.fire({
                icon: "success",
                title: "",
                text: response.data.message,
            });

            navigate("/admindb");
        } catch (error) {
            setMessage(error.response?.data?.message || "An error occurred");

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response?.data?.message || "Error logging in",
            });
        } finally {
            setIsLoading(false); // Stop loading after the request completes
        }
    };

    return (
        <div>
            <h2>Admin-Login</h2>
            <main className="flex-shrink-0">
                <div>
                    <Narbar />
                </div>
                <section className="py-5">
                    <div className="container px-0 px-sm-5">
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
                                        <div className="mb-3">
                                            <input
                                                className='form-control p-3'
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder='Email Address'
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                className='form-control p-3'
                                                type="password"
                                                value={password}
                                                placeholder='Password'
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <div className="text-center">
                                            <button
                                                type='submit'
                                                className="btn btn-primary btn-lg"
                                                id="submitButton"
                                                disabled={isLoading} // Disable button when loading
                                            >
                                                {isLoading ? "Processing..." : "Submit"}
                                            </button>
                                        </div>
                                    </form>
                                    {/* {message && <p>{message}</p>} */}
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
