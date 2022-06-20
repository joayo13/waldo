
import { useState } from 'react';

import './App.css';
import Leaderboards from './Leaderboards';
import Level1 from './Level1';
import Level2 from './Level2';
import Level3 from './Level3';



function App() {

  const [level, setLevel] = useState()
  const [showHighscores, setShowHighscores] = useState(null)
  return (
    <>
    {showHighscores ? <Leaderboards/> : 
    <>
    {!level ? 
    <div className="App">
      <div className='mainHeader'>
        <h1>Where's Waldo?</h1>
        
        <p style={{marginTop: '20px'}} className='mainHeaderSubtext'>
        Find Waldo and his friends to win. You'll be timed once you start a level. <span style={{color: '#77b255'}}>Good luck ☘️</span>
        </p>
      </div>
      <button className='highscoresButton' onClick={() => {setShowHighscores(true)}}>Highscores</button>
      <div className='waldoBackground'>
        <div className='levelsContainer'>
          <button className='level1' onClick={() => setLevel(<Level1 setLevel={setLevel}/>)}>Level 1: Space</button>
          <button className='level2' onClick={() => setLevel(<Level2 setLevel={setLevel}/>)}>Level 2: Beach</button>
          <button className='level3' onClick={() => setLevel(<Level3 setLevel={setLevel}/>)}>Level 3: Carnival</button>
        </div>
        
      </div>
    </div> : level}
    </>}
    </>
  );
}

export default App;
