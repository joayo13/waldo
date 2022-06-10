
import { useState } from 'react';

import './App.css';
import Level1 from './Level1';



function App() {

  const [level, setLevel] = useState()

  return (
    <>
    {!level ? 
    <div className="App">
      <div className='mainHeader'>
        <h1>Where's Waldo?</h1>
        <p style={{marginTop: '20px'}} className='mainHeaderSubtext'>
        Find Waldo and his friends to win. You'll be timed once you start a level. <span style={{color: '#77b255'}}>Good luck ☘️</span>
        </p>
      </div>
      <div className='waldoBackground'>
        <div className='levelsContainer'>
          <button className='level1' onClick={() => setLevel(<Level1/>)}>Level 1: Space</button>
          <button className='level2'>Level 2: Beach</button>
          <button className='level3'>Level 3: Street</button>
        </div>
        
      </div>
    </div> : level}
    </>
  );
}

export default App;
