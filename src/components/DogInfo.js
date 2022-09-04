import React from 'react';

function DogInfo({oneDog}) {
    return (
        <div>
            <img src={oneDog.image} alt="dog" />
            <h2>{oneDog.name}</h2>
            <button>Good Dog!</button>
        </div>
    );
}

export default DogInfo;