import React from 'react'
import PhoneNumber from './PhoneNumber'

export default function Footer() {
  return (
    <footer className='footer'>
        
        <div className="cols">
        <div className="col footer-logo-container"><div className='logo logo-inverted'></div></div>  
            <div className="col">
                <div><a href="https://instagram.com/shkolakadola">@shkolakadola</a></div>
                <div><PhoneNumber/></div>
            </div>
            <div className="col">
                <div>ИП Кадол Е. Н.</div>
                <div><a href="/rekvizity">Реквизиты</a>, <a href='https://docs.google.com/document/d/10HXXZQiJ499BT_xpbS9B6GdFG5BP9RIuN8LZ723j7zI/' target='blank'>Оферта</a></div>
            </div>
            <div className="col">
                <div>Сухаревская улица, 62</div>
                <div>Минск, Беларусь, 220059</div>
            </div>
        </div>
    </footer>
  )
}