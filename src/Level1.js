import {React, useState} from 'react'
import './Level.css'

const levelPicture = require('./level1.jpg')

const waldo = require('./waldo.jpg')

const wizard = require('./wizard.png')

let coords = []

function Level1() {

    const [popUp, setPopUp] = useState()

    const coordHandler = (e) => {
        let xCoords = Math.round((e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100)
        let yCoords = Math.round((e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100)
        coords = [xCoords, yCoords]
        alert(`${xCoords}, ${yCoords}`)
    }

    const popUpHandler = (e) => {
      if(coords[0] <= 50) {
        setPopUp(
          <div className='popUpContainer'>
            <div className='popUpCircle' style={{top: `${(e.nativeEvent.offsetY - 12.5)}px`, left: `${e.nativeEvent.x - 12.5}px`}}></div>
            <div className='popUpCharacterSelectorContainer' style={{top: `${(e.nativeEvent.offsetY - 12.5)}px`, left: `${e.nativeEvent.x + 25}px`}}>
              <button className='popUpCharacterSelectorButton' style={{backgroundColor: 'white', color: 'black'}}>Waldo<img className='charactersIconSelector' src={waldo}></img></button>
              <button className='popUpCharacterSelectorButton' style={{backgroundColor: '#68b3dd'}}>Wizard<img className='charactersIconSelector' src={wizard}></img></button>
            </div>
          </div>)
      }
      if(coords[0] > 50) {
        setPopUp(
          <div className='popUpContainer'>
            <div className='popUpCircle' style={{top: `${(e.nativeEvent.offsetY - 12.5)}px`, left: `${e.nativeEvent.x - 12.5}px`}}></div>
            <div className='popUpCharacterSelectorContainer' style={{top: `${(e.nativeEvent.offsetY - 12.5)}px`, left: `${e.nativeEvent.x - 120}px`}}>
              <button className='popUpCharacterSelectorButton' style={{backgroundColor: 'white', color: 'black'}}>Waldo<img className='charactersIconSelector' src={waldo}></img></button>
              <button className='popUpCharacterSelectorButton' style={{backgroundColor: '#68b3dd'}}>Wizard<img className='charactersIconSelector' src={wizard}></img></button>
            </div>
          </div>)
      }
     
    }

  return (
    <div className='levelBackground'>
      <div className='charactersHeader'>
        <img className='charactersIcon' src={waldo}></img>
        <img className='charactersIcon' src={wizard}></img>
      </div>
      {popUp}
        <img className='levelImage' src={levelPicture} onClick={(e) => {coordHandler(e); popUpHandler(e)}}></img>
    </div>
  )
}

export default Level1