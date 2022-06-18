import React, { useEffect, useState } from 'react'
import App from './App'
import './leaderboards.css'

function Leaderboards(props) {
    const [level, setLevel] = useState(null)
    const [highscorePopUp, setHighscorePopUp] = useState(null)
    const [backToHome, setBackToHome] = useState(null)
    useEffect(() => {
        if(props.level) {
            setLevel(props.level)
        }
    },[])

    useEffect(() => {
        if(level === 1) {
            setHighscorePopUp(<div className='mainBodyLeaderboards'>
                <h1>Level 1</h1>
            </div>)
        }
        if(level === 2) {
            setHighscorePopUp(<div className='mainBodyLeaderboards'>
                <h1>Level 2</h1>
            </div>)
        }
        if(level === 3) {
            setHighscorePopUp(<div className='mainBodyLeaderboards'>
                <h1>Level 3</h1>
            </div>)
        }
    },[level])
  return (
    <>
    {!backToHome ? <>
    {!level ? <div className='mainBodyLeaderboards'>
    <h1>Highscores</h1>
    <button className='backToHome' onClick={() => setBackToHome(true)}>EXIT</button>
    <button className='leaderboardsLevel1Button' onClick={() => setLevel(1)}>Level 1</button>
    <button className='leaderboardsLevel2Button' onClick={() => setLevel(2)}>Level 2</button>
    <button className='leaderboardsLevel3Button' onClick={() => setLevel(3)}>Level 3</button>
    </div> : highscorePopUp}
    
    </> : <App/>}
    
    </>
  )
}

export default Leaderboards