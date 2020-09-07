import React from "react";

const Rank = ({ name, entries }) => {
    return (
        <div>
            <div className='f3 white'>
                {`${name} , your current rank is...`}
            </div>
            <div className='white f1 '>
                {entries}
            </div>
        </div>
    )
}



export default Rank;