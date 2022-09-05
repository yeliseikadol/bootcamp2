import React from 'react'
import PhoneNumber from './PhoneNumber'
import {ReactComponent as Logo} from '../assets/logo_big-inverted.svg'

export default function Footer() {
  return (
    <footer className='footer'>
        
        <div className="cols">
        <div className="col footer-logo-container"><Logo/></div>  
            <div className="col">
                <div><a href="mailto:school@bootcamp.by">school@bootcamp.by</a></div>
                <div><PhoneNumber/></div>
            </div>
            <div className="col">
                <div>ИП Кадол Е. Н.</div>
                <div><a href="/" target='blank_'>Реквизиты</a></div>
            </div>
            <div className="col">
                <div>Сухаревская улица, 62</div>
                <div>Минск, Беларусь, 220059</div>
            </div>
            
        </div>
    </footer>
  )
}