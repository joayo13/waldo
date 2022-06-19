import React, { useEffect, useState } from 'react'
import App from './App'
import './leaderboards.css'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";


const firebaseConfig = {

  apiKey: "AIzaSyC9HyiBkghaSfj9AgjtLI0JmmtK39MikT8",

  authDomain: "waldo-4ca82.firebaseapp.com",

  projectId: "waldo-4ca82",

  storageBucket: "waldo-4ca82.appspot.com",

  messagingSenderId: "526810001943",

  appId: "1:526810001943:web:e23c54af8eccc767cd2252"

};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

let highScores = []

function Leaderboards(props) {
    const [level, setLevel] = useState(null)
    const [highscorePopUp, setHighscorePopUp] = useState(null)
    const [backToHome, setBackToHome] = useState(null)
    const [scoresLoaded, setScoresLoaded] = useState(null)
    useEffect(() => {
        if(props.level) {
            setLevel(props.level)
        }
    },[])

    

    async function getScores() {
        
        const querySnapshot = await getDocs(collection(db, `level${props.level}highscores`))
        querySnapshot.forEach((doc) => {
            if(highScores.length < 10) {
                highScores.push({name: doc.id, score: doc.data().score})
            }
        }) 
        console.log(highScores)
        highScores.sort((a, b) => a.score - b.score);
        setScoresLoaded(true)
    } 
    useEffect(() => {
        getScores()
    },[])

    useEffect(() => {
        if(level === 1) {
            
            setHighscorePopUp(<div className='mainBodyLeaderboards'>
                <h1>Level 1</h1>
                <button className='backToHome' onClick={() => setBackToHome(true)}>EXIT</button>
                {highScores.map((obj) => <div style={{width: '250px'}}>{`${highScores.indexOf(obj) + 1}. ${obj.name}: ${obj.score} seconds`}</div>)}
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
    },[level, scoresLoaded])
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