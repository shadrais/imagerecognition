import React from "react";

const Facerecognition = ({imageUrl}) => {
    return (
        <div className='center ma'>
            <div className='mt2 absolute'>
                <img src={imageUrl} alt="" width='500px' height='auto' />
            </div>

        </div>
    );
}

export default Facerecognition;