import React, { useState } from 'react';
import './App.css';
import logo from './logo.png';

function Header() {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);

  const toggleAboutDropdown = () => {
    console.log("Toggling about dropdown");
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const toggleProjectsDropdown = () => {
    setIsProjectsDropdownOpen(!isProjectsDropdownOpen);
  };

  const toggleResourcesDropdown = () => {
    setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
  };

  return (
    <header>
      <div className="logo">
        <img className="logo-img" src={logo} alt="Stanford Neurotech Logo" />
      </div>

      <nav>
        <ul>
          <li style={{position:"relative"}} onMouseEnter={toggleAboutDropdown} onMouseLeave={toggleAboutDropdown}>
            <a href="#">ABOUT</a>
            {isAboutDropdownOpen && (
              <div className="dropdown-menu">
                <ul>
                  <li><a href="#">MEET THE TEAM</a></li>
                  <li><a href="#">MISSION</a></li>
                  <li><a href="#">IDENTITY</a></li>
                </ul>
              </div>
            )}
          </li>
          <li style={{position:"relative"}} onMouseEnter={toggleProjectsDropdown} onMouseLeave={toggleProjectsDropdown}>
            <a href="#">PROJECTS</a>
            {isProjectsDropdownOpen && (
              <div className="dropdown-menu">
                <ul>
                  <li><a href="#">JOIN PROJECTS</a></li>
                  <li><a href="#">ALL PROJECTS</a></li>
                  <li><a href="#">CLIENT PROJECTS</a></li>
                  <li><a href="#">OUR PUBLICATIONS</a></li>
                </ul>
              </div>
            )}
          </li>
          <li style={{position:"relative"}} onMouseEnter={toggleResourcesDropdown} onMouseLeave={toggleResourcesDropdown}>
            <a href="#">RESOURCES</a>
            {isResourcesDropdownOpen && (
              <div className="dropdown-menu">
                <ul>
                  <li><a href="#">MEDIUM</a></li>
                  <li><a href="https://github.com/stanford-ntx">GITHUB</a></li> 
                  <li><a href="#">VIEW COURSES</a></li>
                  <li><a href="#">VIEW MATERIALS</a></li>
                </ul>
              </div>
            )}
          </li>
          {/* Add other navigation items here */}
          <li><a href="#" className="rainbow-button">JOIN US</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
