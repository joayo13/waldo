import {React, useEffect, useState} from 'react'
import './Level.css'
import LevelComplete from './LevelComplete'
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


const levelPicture = require('./level1.jpg')

const waldo = require('./waldo.jpg')

const wizard = require('./wizard.png')

let startTime = null

let finalTime = null

let coords = []

function Level1(props) {

    const [popUp, setPopUp] = useState()

    const [waldoSelected, setWaldoSelected] = useState(false)

    const [wizardSelected, setWizardSelected] = useState(false)

    const [levelComplete, setLevelComplete] = useState(false)

    useEffect(() => {
      if (waldoSelected && wizardSelected) {
        let endTime = Math.round(new Date() / 1000, 2)
        finalTime = endTime - startTime
        setLevelComplete(true)
      }
    })

     async function isCoordCorrect(character) {
      if(character === 'waldo') {
        const querySnapshot = await getDocs(collection(db, 'level1'))
        if(querySnapshot) {
          let waldoCoords = []
          querySnapshot.forEach((doc) => doc.id === 'waldo' ? waldoCoords = [doc.data().x, doc.data().y] : null)
          if(coords[0] < waldoCoords[0] + 2 && coords[0] > waldoCoords[0] - 2 && coords[1] < waldoCoords[1] + 2 && coords[1] > waldoCoords[1] - 2) {
            setWaldoSelected(true)
            setPopUp(null)
          } else {
            setPopUp(null)
          }
        }
      }
      if(character === 'wizard') {
        
      }
     }

    const coordHandler = (e) => {
        let xCoords = Math.round((e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100)
        let yCoords = Math.round((e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100)
        coords = [xCoords, yCoords]
    }

    const popUpHandler = (e) => {
      if(coords[0] <= 50) {
        setPopUp(
          <div className='popUpContainer'>
            <div className='popUpCircle' style={{top: `${(e.nativeEvent.offsetY - 12.5)}px`, left: `${e.nativeEvent.x - 12.5}px`}}></div>
            <div className='popUpCharacterSelectorContainer' style={{top: `${(e.nativeEvent.offsetY - 12.5)}px`, left: `${e.nativeEvent.x + 25}px`}}>
              <button className='popUpCharacterSelectorButton' onClick={() => isCoordCorrect('waldo')} style={{backgroundColor: 'white', color: 'black'}}>Waldo<img className='charactersIconSelector' src={waldo}></img></button>
              <button className='popUpCharacterSelectorButton' onClick={() => isCoordCorrect('wizard')} style={{backgroundColor: '#68b3dd', color: 'black'}}>Wizard<img className='charactersIconSelector' src={wizard}></img></button>
            </div>
          </div>)
      }
      if(coords[0] > 50) {
        setPopUp(
          <div className='popUpContainer'>
            <div className='popUpCircle' style={{top: `${(e.nativeEvent.offsetY - 12.5)}px`, left: `${e.nativeEvent.x - 12.5}px`}}></div>
            <div className='popUpCharacterSelectorContainer' style={{top: `${(e.nativeEvent.offsetY - 12.5)}px`, left: `${e.nativeEvent.x - 120}px`}}>
              <button className='popUpCharacterSelectorButton' onClick={() => isCoordCorrect('waldo')}style={{backgroundColor: 'white', color: 'black'}}>Waldo<img className='charactersIconSelector' src={waldo}></img></button>
              <button className='popUpCharacterSelectorButton' onClick={() => isCoordCorrect('wizard')} style={{backgroundColor: '#68b3dd', color: 'black'}}>Wizard<img className='charactersIconSelector' src={wizard}></img></button>
            </div>
          </div>)
      }
     
    }

  return (
    <>
    {!levelComplete ? 
    <div className='levelBackground'>
      <div className='charactersHeader'>
      <button className='backButton' onClick={() => props.setLevel(undefined)}>EXIT</button>
        <div className='charactersIconWaldo' style={ waldoSelected ? {backgroundColor: 'rgba(0, 0, 0, 0.500)'} : null}></div>
        <div className='charactersIconWizard' style={ wizardSelected ? {backgroundColor: 'rgba(0, 0, 0, 0.500)'} : null}></div>
      </div>
      {popUp}
        <img className='levelImage' src={levelPicture} onLoad={() => startTime = Math.round(new Date() / 1000, 2)} onClick={(e) => {coordHandler(e); popUpHandler(e)}}></img>
    </div> : <LevelComplete level={1} timeScore={finalTime}/>}
    </>
  )
}

export default Level1