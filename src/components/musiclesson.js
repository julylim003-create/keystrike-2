import React from 'react';
import './musiclesson.css';

function MusicLesson({ onNavigate }) {
  return <main><button className="back" onClick={() => onNavigate('playmenu')}><img src="/assets/back.png" alt="back" /></button><h1>Music Lesson</h1><p>Choose a lesson to begin.</p></main>;
}

export default MusicLesson;
