import React from 'react'
import Button from './Button'

export default function Form() {   
  return (
    <div className='form'>
      <h4>3 месячных платежа</h4>


      <div className='prices'>
        <h3 className='price'>720&nbsp;BYN в&nbsp;месяц</h3>
      </div>
      <div className='price-calculation'>
        <div className='price-calculation-row'>
            <div>Полная стоимость</div> 
            <div>2&nbsp;160&nbsp;BYN</div>
        </div>
      </div>

      {/*<div className='prices'>
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
  </div>*/}





      <form 
        className='stack' 
        name="contact" 
        method="POST" 
        data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <div className='flex-column input-container'>
          
          <label for='name' className='input-label'>Имя</label>
          <input
                  name='name'
                  type='text'
                  placeholder=""
                  />
        </div>
        
        <div className='flex-column input-container'>
        <label for='tel' className='input-label'>Телефон</label>
            <input
                name='tel'
                type='tel'
                placeholder="+375 12 123-45-67"
                required
                />
            </div>
            <div className='flex-column input-container'>
            <label form='class' className='input-label'>Группа</label>
            <select
                name='class'
                placeholder="Выберите группу"
                required>
                  <option value='Елисей, 03.10 — 23.12, пн и ср с 19:00'>Елисей (3 окт — 23 дек; Пн, Ср 19:00)</option>
                  <option value='Оксана, 21.11 — 10.02, вт и чт с 19:00'>Оксана (21 ноя — 10 фев; Вт, Чт 19:00)</option>
                  <option value='Елисей, 21.11 — 10.02, пн и ср с 17:00'>Елисей (21 ноя — 10 фев; Пн, Ср 17:00)</option>
            </select>
            </div>
            <div className='flex-column input-container'>
          
          <label for='promocode' className='input-label'>Промокод</label>
          <input
                  name='promocode'
                  type='text'
                  placeholder=""
                  />
        </div>
        <Button type='submit'>Записаться</Button>
        <p className='typography-body2'>После нажатия на кнопку с вами свяжется менеджер. Мы работаем по будням с 10 до 18.</p>
      </form>
    </div>
  )
}