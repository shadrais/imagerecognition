import React from "react";
import './Imagelinkform.css';

const imagelinkform =() => {
    return (
        <div >
            <p  className='f3 center'>
                {'This Magic brain will detect faces. Give it a try!!'}
            </p>
            <div className='center'  >
                <div className='form center pa4 br3 shadow-5'>
                    <input  className='f4 pa2 w-70 center'    type= 'text' />
                    <button className='w-30 grow f link ph3 py2 dib  white bg-light-purple'>
                        Detect
                    </button>
                </div>
            </div>

        </div>
    )
}

export default imagelinkform;