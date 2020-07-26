import React from "react";
import './Imagelinkform.css';

const imagelinkform =({onInputChange, onButtonSubmit}) => {
    return (
        <div >
            <p  className='f3 center'>
                {'This Magic brain will detect faces. Give it a try!!'}
            </p>
            <div className='center'  >
                <div className='form center pa4 br3 shadow-5'>
                    <input  className='f4 pa2 w-70 center'
                            type= 'text'
                            onChange={onInputChange}
                    />
                    <button className='w-30 grow f link ph3 py2 dib  white bg-light-purple'
                        onClick={onButtonSubmit}
                    >
                        Detect
                    </button>
                </div>
            </div>
        </div>
    )
}

export default imagelinkform;