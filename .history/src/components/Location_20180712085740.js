import React from 'react';

const Location = ({city})=>{ //destructuring  
    console.log({city});
    return (
        <div>
            <h1>{city}</h1>
        </div>
    );
}

export default Location;