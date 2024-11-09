import React from 'react'
import Narbar from '../Navbar-folder/Narbar'
import { API_URLS } from '../../../utils/apiConfig';
import { useFormik } from 'formik';
import * as Yup from "yup"
import axios from 'axios';

const Adminlogin = () => {
    // adminlogin

    // Swal.fire({
    //     icon: "success",
    //     title: "Success",
    //     text: response.data.message,
    // });
    // localStorage.setItem("UserData", JSON.stringify(response.data.userData));
    // localStorage.token = response.data.token
    // localStorage.setItem("token", response.data.token);
    // navigate("/dashboard")
    // localStorage.setItem("useradminlogin", true)
    const formik = useFormik({
        initialValues: {
            Email: "",
            Password: "",
        },
        validationSchema: Yup.object({
            Email: Yup.string()
                .required("Email is required"),
            Password: Yup.string()
                .required("Email is required"),
        }),
        onSubmit: (values) => {
            // setLoading(true);
            console.log(values);
            
            axios.post(API_URLS.adminlogin, { Email: values.Email, Password: values.Password })
                .then((response) => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: response.data.message,
                    });
                    if (response.data.status === true) {

                    }
                })
                .catch(error => {
                    console.error('There was an error occured', error);
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: "There was an error occured",
                    });
                });
            // setTimeout(() => {
            //     setLoading(false);
            // }, 2000);
        }
    })
    return (
        <>
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

                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="form-floating mb-3">

                                            <div
                                                className="invalid-feedback"
                                                data-sb-feedback="name:required"
                                            >
                                                A name is required.
                                            </div>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input
                                                id="email"
                                                data-sb-validations="required,email"
                                                type="text"
                                                className={`form-control p-2 ${(formik.values.Email && !formik.errors.Email) ||
                                                    (formik.touched.Email && formik.values.Email && formik.errors.Email && formik.touched.Email && formik.values.Email)
                                                    ? 'is-valid'
                                                    : formik.values.Email || formik.touched.Email
                                                        ? 'is-invalid'
                                                        : ''
                                                    }`}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                name="Email"
                                                value={formik.values.Email}
                                                placeholder="Email"
                                            />
                                            <label htmlFor="email">Email address</label>

                                        </div>
                                        <div className="form-floating mb-3">
                                            <input

                                                // data-sb-validations="required"

                                                type="text"
                                                className={`form-control p-2 ${(formik.values.Password && !formik.errors.Password) ||
                                                    (formik.touched.Password && formik.values.Password && formik.errors.Password && formik.touched.Password && formik.values.Password)
                                                    ? 'is-valid'
                                                    : formik.values.Password || formik.touched.Password
                                                        ? 'is-invalid'
                                                        : ''
                                                    }`}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                name="Password"
                                                value={formik.values.Password}
                                                placeholder="Password"
                                            />
                                            <label htmlFor="phone">Password</label>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Adminlogin