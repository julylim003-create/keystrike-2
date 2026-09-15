import React from 'react';
import './pianoman.css';

function PianoMan({ onNavigate }) {
  return <main><button className="back" onClick={() => onNavigate('minigame')}><img src="/assets/back.png" alt="back" /></button><h1>Piano Man</h1><p>Play Piano Man.</p></main>;
}

export default PianoMan;
