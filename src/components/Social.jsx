import React from "react";

function Social(){


    return (
        <div className='text-body mx-0 mx-md-4 mb-4 mb-md-0'>
            <a className="text-decoration-none text-reset"
               target="_blank" rel="noopener noreferrer"
               href='https://github.com/dmydna'>
            <div className='island border px-3 py-1 mt-2'>
                    <i className="bi bi-github fs-4 me-2"></i>
                    <small className='text-muted'>Github</small>
            </div>
            </a>
            <a  className="text-decoration-none text-reset"  href='#'>
                <div className='island border px-3 py-1 mt-2'>
                    <i className="bi bi-linkedin fs-4 me-2"></i>
                    <small className='text-muted'>Linkedin</small>
                </div>
            </a>

        </div>
    )
}

export default Social