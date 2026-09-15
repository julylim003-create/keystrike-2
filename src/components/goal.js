import React from 'react';
import './goal.css';

function Goal({ onNavigate }) {
  return <main><button className="back" onClick={() => onNavigate('playmenu')}><img src="/assets/back.png" alt="back" /></button><h1>Goal</h1><p>Set your next musical goal.</p></main>;
}

export default Goal;
