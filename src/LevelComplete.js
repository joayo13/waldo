import React from 'react'
import './levelComplete.css'
function LevelComplete(props) {
  return (
    <div className='mainBody'>
        <h2 style={{color: 'green'}}>Level {props.level} Complete!</h2>
        <h3>You finished in 32.3 seconds!</h3>
        <input style={{width: '200px', height: '25px'}}type='text' placeholder='enter name'></input>
        <button style={{width: '200px', height: '25px'}}>Submit Score</button>
    </div>
  )
}

export default LevelComplete