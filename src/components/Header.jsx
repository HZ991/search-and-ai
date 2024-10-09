import React from "react";
import './Header.css'
import PadlockIcon from "./PadlockIcon";
import westpacLogo from "./Westpac-Logo.png"


function Header() { 
    return (
        <header className='App-header'>
        <div className='App-header__left'>
          <div className='Westpac-logo'>
            <img src={westpacLogo} className="Westpac-logo__img" alt="logo" />
          </div>
          <div className='App-header__contact'>Contact us</div>
        </div>
        <div className='App-header__right'>
          <div className='padLockIcon'>
            <PadlockIcon />
          </div>
          <div>Sign out</div>
        </div>
      </header>
    )
}

export default Header