import React, { useEffect, useState } from 'react'
import Leaderboards from './Leaderboards'
import './levelComplete.css'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, getDocs } from "firebase/firestore";


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

function LevelComplete(props) {
  const [submitted, setSubmitted] = useState(null)

  const [name, setName] = useState('')

  useEffect(() => {
    window.document.body.style.zoom = 1;
  },[])

  async function submitScore() {
    console.log(name)
    await setDoc(doc(db, `level${props.level}highscores`, name), {
      score: props.timeScore
    })
    setSubmitted(true)
  }
  return (
    <>
    {!submitted ? <div className='mainBody'>
        <h2>Level {props.level} Complete!</h2>
        <h3>You finished in {props.timeScore} seconds!</h3>
        <input className ='nameInput'style={{width: '200px', height: '25px'}}type='text' placeholder='ENTER NAME' onChange={(e) => setName(e.target.value)}></input>
        <button className = 'submitScoreButton' onClick={() => submitScore()}style={{width: '150px', height: '25px'}}>Submit Score</button>
    </div> : <Leaderboards level={props.level}/>}
    
    </>
  )
}

export default LevelComplete