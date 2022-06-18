import {React, useEffect, useState} from 'react'
import './Level.css'
import LevelComplete from './LevelComplete'

const levelPicture = require('./level2.jpg')

const waldo = require('./waldo.jpg')

const wizard = require('./wizard.png')

const odlaw = require('./odlaw.jpg')

const mockWaldoCoords = [54, 49]

const mockWizardCoords = [63, 50]

const mockOdlawCoords = [25, 49]

let startTime = null

let finalTime = null

let coords = []

function Level2(props) {

    const [popUp, setPopUp] = useState()

    const [waldoSelected, setWaldoSelected] = useState(false)

    const [wizardSelected, setWizardSelected] = useState(false)

    const [odlawSelected, setOdlawSelected] = useState(false)

    const [levelComplete, setLevelComplete] = useState(false)

    useEffect(() => {
      if (waldoSelected && wizardSelected && odlawSelected) {
        let endTime = Math.round(new Date() / 1000, 2)
        console.log(startTime)
        console.log(endTime)
        finalTime = endTime - startTime
        setLevelComplete(true)
      }
    })

    const isCoordCorrect = (character) => {
      if(character === 'waldo') {
        if(coords[0] < mockWaldoCoords[0] + 3 && coords[0] > mockWaldoCoords[0] - 3 && coords[1] < mockWaldoCoords[1] + 3 && coords[1] > mockWaldoCoords[1] - 3) {
          setWaldoSelected(true)
          setPopUp(null)
        } else {
          setPopUp(null)
        }
      }
      if(character === 'wizard') {
        if(coords[0] < mockWizardCoords[0] + 3 && coords[0] > mockWizardCoords[0] - 3 && coords[1] < mockWizardCoords[1] + 3 && coords[1] > mockWizardCoords[1] - 3) {
          setWizardSelected(true)
          setPopUp(null)
        } else {
          setPopUp(null)
        }
      }
      if(character === 'odlaw') {
        if(coords[0] < mockOdlawCoords[0] + 3 && coords[0] > mockOdlawCoords[0] - 3 && coords[1] < mockOdlawCoords[1] + 2 && coords[1] > mockOdlawCoords[1] - 2) {
          setOdlawSelected(true)
          setPopUp(null)
        } else {
          setPopUp(null)
        }
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
              <button className='popUpCharacterSelectorButton' onClick={() => isCoordCorrect('odlaw')} style={{backgroundColor: 'white', color: 'black'}}>Odlaw<img className='charactersIconSelector' src={odlaw}></img></button>
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
              <button className='popUpCharacterSelectorButton' onClick={() => isCoordCorrect('odlaw')} style={{backgroundColor: 'white', color: 'black'}}>Odlaw<img className='charactersIconSelector' src={odlaw}></img></button>
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
        <div className='charactersIconOdlaw' style={ odlawSelected ? {backgroundColor: 'rgba(0, 0, 0, 0.500)'} : null}></div>
      </div>
      {popUp}
        <img className='levelImage' src={levelPicture} onLoad={() => startTime = Math.round(new Date() / 1000, 2)} onClick={(e) => {coordHandler(e); popUpHandler(e)}}></img>
    </div> : <LevelComplete level={2} timeScore={finalTime}/>}
    </>
  )
}

export default Level2