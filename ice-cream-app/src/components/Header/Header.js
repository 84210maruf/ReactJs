import React from 'react';
import './App.css';
export const Header = () => {
    return (
        <header>
        <div class="container react" id="header">
          <div>
            <img class="logo" src="images/logo.svg" alt="Logo" />
          </div>
          <div class="textRight">
            <img src="images/react.svg" alt="React" class="reactLogo" /><strong
              >React</strong
            >
          </div>
        </div>
      </header>
    )
}
