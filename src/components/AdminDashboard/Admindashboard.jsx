import React from 'react'
import NarbarTop from '../Narbardesign/NarbarTop'
import Narbarheader from '../Narbar-Header-folder/Narbarheader'

const Admindashboard = () => {
    
    return (
        <div>
            <div>
                <NarbarTop />
            </div>
            <div>
                <Narbarheader/>
            </div>
            <div class="container text-center">
                <div class="row align-items-start mt-1 gap-2">
                    <div class="col border bg-white" style={{ height: "200px" }}>
                        One of three columns
                    </div>
                    <div class="col border bg-white" style={{ height: "200px" }}>
                        One of three columns
                    </div>
                    <div class="col border bg-white" style={{ height: "200px" }}>
                        One of three columns
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Admindashboard