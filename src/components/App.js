import React, {useState, useEffect}  from "react";
import DogBar from "./DogBar";
import DogInfo from "./DogInfo";

function App() {
const [dogs, setDogs] = useState([])
const [oneDog, setOneDog] = useState(null)
const [isFiltering, setIsFiltering] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then(res => res.json())
      .then(data => setDogs(data.map((dog) => dog)))
  }, [])

  function handleNameClick(dog){
    setOneDog(dog)
  }

  function handleFilter(){
    setIsFiltering(!isFiltering)
  }

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter" onClick={handleFilter}>Filter good dogs: {isFiltering ? "ON" : "OFF"}</button>
      </div>
      <div id="dog-bar">
        <DogBar dogs={dogs} handleNameClick={handleNameClick} isFiltering={isFiltering}/>
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          {oneDog ? <DogInfo oneDog={oneDog}/> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
