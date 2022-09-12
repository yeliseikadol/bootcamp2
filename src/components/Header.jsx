import React from 'react'
import {ReactComponent as Logotype} from '../assets/logo.svg'

export default function Header() {
  return (
    <header className='header'>
      <div className="row">
          <div className="logo-container">
              <Logotype/>
          </div>
          <nav className='row'>
              <a href="tel:+375296976057">+375296976057</a>
              <div className='typography-body'>WhatsApp, Viber, Telegram</div>
          </nav>
        </div>
    </header>
  )
}