import React from 'react'
import NarbarTop from '../Narbardesign/NarbarTop'

const Admindashboard = () => {
    return (
        <div>
            <NarbarTop />
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Tescode</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Upload</a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link" href="#">Settings</a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className='col-md-6 col-sm-12 mx-auto text-center bg-white p-3 mt-5'>
                <b>Upload Project</b>
                <input type="text" className='form-control my-2' placeholder='Project Name' />
                <input type="text" className='form-control my-2' placeholder='Deploy link' />
                <input type="text" className='form-control my-2' placeholder='Upload' />
                <button className='btn btn-success'>Upload</button>
            </div>
        </div>

    )
}

export default Admindashboard