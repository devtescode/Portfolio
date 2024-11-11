import React from 'react'
import NarbarTop from '../Narbardesign/NarbarTop'
import Narbarheader from '../Narbar-Header-folder/Narbarheader'

const Uploadpage = () => {
    return (
        <>
          <div>
                <NarbarTop/>
            </div>
            <div>
                <Narbarheader/>
            </div>
            <div className='col-md-6 col-sm-12 mx-auto text-center bg-white p-3 mt-1'>
                <b>Upload Project</b>
                <input type="text" className='form-control my-2' placeholder='Project Name' />
                <input type="text" className='form-control my-2' placeholder='Deploy link' />
                <input type="text" className='form-control my-2' placeholder='Upload' />
                <button className='btn btn-success'>Upload</button>
            </div>
        </>
    )
}

export default Uploadpage