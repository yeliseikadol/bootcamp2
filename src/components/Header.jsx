import React from 'react'
import { Link } from "react-scroll";

export default function Header() {
  return (
    <header className='header'>
      <div className="row">
          <div className="logo-container">
              <div className='logo'><h2>Школа Кадола</h2></div>
          </div>
          <nav className='row'>
          <a href='/enroll' className='button button-small'>Записаться</a>
          </nav>
        </div>
    </header>
  )
}