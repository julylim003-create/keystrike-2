import React from 'react';
import './towerdefense.css';

function TowerDefense({ onNavigate }) {
  return <main><button className="back" onClick={() => onNavigate('minigame')}><img src="/assets/back.png" alt="back" /></button><h1>Tower Defense</h1><p>Play Tower Defense.</p></main>;
}

export default TowerDefense;
