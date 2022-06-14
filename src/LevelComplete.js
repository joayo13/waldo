import React from 'react'
import './levelComplete.css'
function LevelComplete(props) {
  return (
    <div className='mainBody'>
        <h2>Level {props.level} Complete!</h2>
        <h3>You finished in {props.timeScore} seconds!</h3>
        <input className ='nameInput'style={{width: '200px', height: '25px'}}type='text' placeholder='ENTER NAME'></input>
        <button className = 'submitScoreButton'style={{width: '150px', height: '25px'}}>Submit Score</button>
    </div>
  )
}

export default LevelComplete