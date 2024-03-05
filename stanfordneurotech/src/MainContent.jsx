import React from 'react';
import './App.css'; // Import your CSS file
import logo from './logo.png';
import brain from './brain.png';
import implant from './implant.png';
import page3 from './page3.png';

function MainContent() {
  return (
    <main>
      {/* Page 1: Initial content */}
      <div className="main-page-content">
        <div className="content">
          <div className="title">
            <h1>STANFORD</h1>
            <h1 className="rainbow-heading">NEUROTECH</h1>
            <p className="main-desc">Welcome to Stanford's Undergraduate-led community of neuroengineers. Pioneering minds,
              transforming tomorrow.</p>
            <p><a href="#">READ MORE </a></p>
          </div>
        </div>
        <div className="image">
          <img className="brain-img" src={brain} alt="Brain Illustration" />
        </div>
      </div>
      {/* Page 2: Why Are We Doing This? */}
      <div className="page full-height">
        <div className="content">
          <div className="title">
            <h2>WHY ARE WE DOING THIS?</h2>
            <p>This is a brain implant</p>
          </div>
        </div>
        <div className="image">
          <img src={implant} alt="Brain Implant" />
        </div>
      </div>
      {/* Page 3: We need... */}
      <div className="page full-height">
        <div className="image">
          <div className="left-half">
            <img src={page3} alt="Page 3" />
          </div>
          <div className="right-half">
            <img src={implant} alt="Implant" />
          </div>
        </div>
      </div>

      {/* Repeat similar structure for more pages */}
      {/* Page 3, 4, 5, ... */}
    </main>
  );
}

function App() {
  return (
    <div className="App">
      <MainContent />
    </div>
  );
}

export default App;
