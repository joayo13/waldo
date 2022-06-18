import React, { useState } from 'react'
import Leaderboards from './Leaderboards'
import './levelComplete.css'

function LevelComplete(props) {
  const [submitted, setSubmitted] = useState(null)
  return (
    <>
    {!submitted ? <div className='mainBody'>
        <h2>Level {props.level} Complete!</h2>
        <h3>You finished in {props.timeScore} seconds!</h3>
        <input className ='nameInput'style={{width: '200px', height: '25px'}}type='text' placeholder='ENTER NAME'></input>
        <button className = 'submitScoreButton' onClick={() => {setSubmitted(true)}}style={{width: '150px', height: '25px'}}>Submit Score</button>
    </div> : <Leaderboards level={props.level}/>}
    
    </>
  )
}

export default LevelComplete