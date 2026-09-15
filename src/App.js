import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
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
  const [screen, setScreen] = useState(() => sessionStorage.getItem('keystrike-screen') || 'splash');
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const navigate = (nextScreen) => {
    const protectedScreens = ['mainmenu', 'playmenu', 'settings', 'minigame', 'goal', 'musiclesson', 'pianoman', 'towerdefense'];
    const destination = protectedScreens.includes(nextScreen) && !user ? 'login' : nextScreen;
    sessionStorage.setItem('keystrike-screen', destination);
    setScreen(destination);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        setScreen(sessionStorage.getItem('keystrike-screen') || 'mainmenu');
      } else {
        sessionStorage.setItem('keystrike-screen', 'splash');
        setScreen('splash');
      }
      setAuthReady(true);
    });

    return unsubscribe;
  }, []);

  if (!authReady) return null;

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
