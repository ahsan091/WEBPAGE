import React from 'react';
import './App.css';
import Canvas from './components/Canvas/Canvas';
import Navbar from './components/Navbar/Navbar'; 
import Logo from './components/Logo/Logo';
import TypingEffect from './components/Typing_Effect/Typing';

function App() {
  return (
    <div className="App">
      <Canvas/>
      <Navbar/>
      <Logo/>
      <TypingEffect/>
    </div>
  );
}

export default App;
