import axios from 'axios';
import CatLogo from './assets/cat.svg'
import './CatFacts.css';
import React, {useState} from 'react';
// Zewen Li

function CatFacts() {
    const [catFact, setCatFact] = useState("Loading....")
    // you may need to add other code elsewhere!

    function generateCatFact() {
        axios.get('https://catfact.ninja/fact')
            .then(response => {
                setCatFact(response.data.fact);
            })
            .catch(error =>{
                console.error("Error Fetch data:" , error)
                setCatFact("Failed to load cat fact.")
            })
    }



  return (
    <div className="App">
        <div className='catFactsText'>
            {catFact} 
           
        </div>
        <div>
            <button onClick={generateCatFact} className="catFactBtn">
                Click me for a cat fact!
            </button>
        </div>
        <div>
            <img src={CatLogo} className="catFactImg" />
        </div>
    </div>
  )
}

export default CatFacts
