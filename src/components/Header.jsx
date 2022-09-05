import React from 'react'
import {ReactComponent as Logotype} from '../assets/logo_big.svg'

export default function Header() {
  return (
    <header className='header'>
      <div className="row">
          <div className="logo-container">
              <Logotype/>
          </div>
          <nav>
              <a href="tel:+375296976057">+375296976057</a>
          </nav>
        </div>
    </header>
  )
}