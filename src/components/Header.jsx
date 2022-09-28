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
              <div>Наш Instagram</div>
              <a href="https://instagram.com/bootcamp.by">@bootcamp.by</a>
          </nav>
        </div>
    </header>
  )
}