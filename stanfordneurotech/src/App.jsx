import React from 'react';
import './App.css'; // Import your CSS file
import Header from './header'; // Import your Header component
import MainContent from './MainContent'; // Import your MainContent component

function App() {
  return (
    <div className="App">
      <Header /> 
      <MainContent />
    </div>
  );
}

export default App;
