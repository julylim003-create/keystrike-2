import React, { useState } from 'react';
import SplashScreen from './components/splashscreen';
import Login from './components/login';
import Signup from './components/signup';
import MainMenu from './components/mainmenu';
import PlayMenu from './components/playmenu';
import Settings from './components/settings';
import Minigame from './components/minigame';
import Goal from './components/goal';
import MusicLesson from './components/musiclesson';
import PianoMan from './components/pianoman';
import TowerDefense from './components/towerdefense';

function App() {
  const [screen, setScreen] = useState('splash');
  const navigate = (nextScreen) => setScreen(nextScreen);

  switch (screen) {
    case 'login': return <Login onNavigate={navigate} />;
    case 'signup': return <Signup onNavigate={navigate} />;
    case 'mainmenu': return <MainMenu onNavigate={navigate} />;
    case 'playmenu': return <PlayMenu onNavigate={navigate} />;
    case 'settings': return <Settings onNavigate={navigate} />;
    case 'minigame': return <Minigame onNavigate={navigate} />;
    case 'goal': return <Goal onNavigate={navigate} />;
    case 'musiclesson': return <MusicLesson onNavigate={navigate} />;
    case 'pianoman': return <PianoMan onNavigate={navigate} />;
    case 'towerdefense': return <TowerDefense onNavigate={navigate} />;
    default: return <SplashScreen onNavigate={navigate} />;
  }
}

export default App;
