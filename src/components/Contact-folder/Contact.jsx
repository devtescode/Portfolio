import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Narbar from '../Navbar-folder/Narbar';
import { API_URLS } from '../../../utils/apiConfig';
import { BiCheckCircle, BiErrorCircle } from 'react-icons/bi';

// Validation schema using Yup
const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string()
        .matches(/^[0-9]+$/, 'Phone number should only contain numbers')
        .min(10, 'Phone number should be at least 10 digits')
        .required('Phone number is required'),
    message: Yup.string().required('Message is required')
});

const Contact = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (values, { resetForm }) => {
        setLoading(true);

        try {
            const response = await fetch(API_URLS.contact, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });

            if (response.ok) {
                alert('Message sent successfully!');
                resetForm();
            } else {
                alert('Failed to send message.');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while sending the message.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <main className="flex-shrink-0">
                <div>
                    <Narbar />
                </div>
                <section className="py-5">
                    <div className="container mt-4">
                        <div className="bg-light rounded-4 py-5 px-md-5">
                            <div className="text-center mb-5">
                                <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
                                    <i className="bi bi-envelope" />
                                </div>
                                <h1 className="fw-bolder">Get in touch</h1>
                                <p className="lead fw-normal text-muted mb-0">Let's work together!</p>
                            </div>
                            <div className="row gx-5 justify-content-center">
                                <div className="col-lg-8 col-xl-6">
                                    <Formik
                                        initialValues={{
                                            name: '',
                                            email: '',
                                            phone: '',
                                            message: ''
                                        }}
                                        validationSchema={validationSchema}
                                        onSubmit={handleSubmit}
                                    >
                                        {({ errors, touched }) => (
                                            <Form>
                                                {['name', 'email', 'phone', 'message'].map((field, index) => (
                                                    <div className="form-floating mb-3" key={index}>
                                                        <Field
                                                            className={`form-control ${
                                                                errors[field] && touched[field] ? 'is-invalid' : ''
                                                            } ${!errors[field] && touched[field] ? 'is-valid' : ''}`}
                                                            id={field}
                                                            name={field}
                                                            placeholder={`Enter your ${field}...`}
                                                            as={field === 'message' ? 'textarea' : 'input'}
                                                            style={field === 'message' ? { height: '10rem' } : {}}
                                                        />
                                                        <label htmlFor={field} className="form-label">
                                                            {field.charAt(0).toUpperCase() + field.slice(1)}
                                                        </label>
                                                        <ErrorMessage
                                                            name={field}
                                                            component="div"
                                                            className="text-danger mt-1"
                                                        />
                                                        {touched[field] && (
                                                            errors[field] ? (
                                                                <BiErrorCircle
                                                                    className="text-danger position-absolute end-0 me-3 mt-3"
                                                                />
                                                            ) : (
                                                                <BiCheckCircle
                                                                    className="text-success position-absolute end-0 me-3 mt-3"
                                                                />
                                                            )
                                                        )}
                                                    </div>
                                                ))}
                                                <div className="d-grid">
                                                    <button className="btn btn-primary btn-lg" type="submit" disabled={loading}>
                                                        {loading ? 'Processing...' : 'Submit'}
                                                    </button>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Contact;
