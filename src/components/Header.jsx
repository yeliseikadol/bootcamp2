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
            <Link 
              className='button button-small'
              to='EnrollSection' 
              duration={500}
              smooth='true'
              >
              Записаться
            </Link>
          </nav>
        </div>
    </header>
  )
}