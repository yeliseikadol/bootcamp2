import React from 'react'
import Button from './Button'

export default function Form() {   
  return (
    <div className='form'>
      <h4>3 месячных платежа</h4>
      <div className='prices'>
        <div className='price-old'>560 BYN</div>
        <h3 className='price-actual'>520 BYN в месяц</h3>
      </div>
      <div className='price-calculation'>
        <div className='price-calculation-row'>
            <div>Три платежа</div> 
            <div>560 BYN</div>
        </div>
        <div className='price-calculation-row'>
            <div>Скидка за запись до 19 сентября</div> 
            <div>–300 BYN</div>
        </div>
        <div className='price-calculation-row'>
            <div>Всего</div> 
            <div>1560 BYN</div>
        </div>
      </div>
      <form 
        className='stack' 
        name="contact" 
        method="POST" 
        data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <div className='row phone-input'>
            <div className='prefix'>+375</div>
            <input
                name='tel'
                type='tel'
                placeholder="Введите телефон"
                required
                />
            </div>
        <Button type='submit'>Поступить</Button>
      </form>
    </div>
  )
}