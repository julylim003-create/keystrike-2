import React from 'react';
import './pianoman.css';
import Keyboard from './Keyboard.js'

function PianoMan({ onNavigate }) {
  return <main>
    
  <div className="pianoman-page">
    <div className="healthbar"></div>
    <div className="container">
      <div className="cnote"></div>
      <div className="dnote"></div>
      <div className="enote"></div>
      <div className="fnote"></div>
      <div className="gnote"></div>
      <div className="anote"></div>
      <div className="bnote"></div>

      <img src="/assets/pmannotes.png" alt="notes" className="staff"></img>
      <div className = "line"></div>
    </div>
    <div className="containerlogo">
      <img src="/assets/logo.png" alt="logo" className="logo"></img>
      </div>
    
    <div className="containernotes">
      <Keyboard ilawNote="C" Press={(n) => console.log(n)} />
    </div>
    </div></main>




}



export default PianoMan;