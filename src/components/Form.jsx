import React from 'react'
import Button from './Button'

export default function Form() {   
  return (
    <div className='form'>
      <h4>3 месячных платежа</h4>
      <div className='prices'>
        <div className='price-old'>720&nbsp;BYN</div>
        <h3 className='price-actual'>560&nbsp;BYN в&nbsp;месяц</h3>
      </div>
      <div className='price-calculation'>
        <div className='price-calculation-row'>
            <div>Полная стоимость</div> 
            <div>2&nbsp;160&nbsp;BYN</div>
        </div>
        <div className='price-calculation-row'>
            <div>Скидка за запись до 30&nbsp;сентября</div> 
            <div>–480&nbsp;BYN</div>
        </div>
        <div className='price-calculation-row'>
            <div>Всего</div> 
            <div>1&nbsp;680&nbsp;BYN</div>
        </div>
      </div>
      <form 
        className='stack' 
        name="contact" 
        method="POST" 
        data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <div className='row phone-input'>
            <input
                  name='promocode'
                  type='text'
                  placeholder="Прокомод"
                  />
        </div>
        <div className='row phone-input'>
            <div className='prefix'>+375</div>
            <input
                name='tel'
                type='tel'
                placeholder="Введите телефон"
                required
                />
            </div>
        <Button type='submit'>Записаться</Button>
        <p className='typography-body2'>После нажатия на кнопку с вами свяжется менеджер. Мы работаем по будням с 10 до 18.</p>
      </form>
    </div>
  )
}