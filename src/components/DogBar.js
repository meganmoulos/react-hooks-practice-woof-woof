import React from 'react';

function DogBar({dogs, handleNameClick, isFiltering }) {

    return (
        <div id='dog-bar'>
            {dogs.map((dog) => !isFiltering || dog.isGoodDog === true ? <span key={dog.name} onClick={() => handleNameClick(dog)} value={dog}>{dog.name}</span> : null)}
        </div>
    );
}

export default DogBar;

