import React from 'react'
import axios from 'axios'
import { useState } from 'react'


function open(url) {
    const win = window.location.replace(url);
    if (win != null) {
      win.focus();
    }
  }

export default function FormGsheets() {

//form states
const [name, setName] = useState('')
const [telegram, setTelegram] = useState('')
const [email, setEmail] = useState('')
const [group, setGroup] = useState('')

//submit events
const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(name,telegram,email);
    const data={
        Name:name,
        Telegram:telegram,
        Email:email,
        Group:group
    }
    axios.post('https://sheet.best/api/sheets/497193d1-0be2-4f25-a92c-148092fda674',data).then((response)=>{
       console.log(response);
       setName('');
       setTelegram('');
       setEmail('');
       setGroup('');
       open('https://epos.hutkigrosh.by/pay/pay?param=19190-1-15#00020101021132450010by.raschet01074440631101019190-1-1512021133320014by.epos.unipay031019190%3B1%3B15520489995802BY5911IPKadolE.N.6005Minsk5406612.0053039336304B9AA')
    });
}

return (
    <div className='enroll-form section'>
        <a href='/'>Назад</a>
        <div className='section-header'>
            <h4 className='bc-typography-h4'>Записаться</h4>
            <h2>Курс "Веб-дизайн для удалённой работы"</h2>
            <p>Заполните форму и выберите время, которое вам подходит.</p>
        </div>

        <form className='form-group section-card' onSubmit={handleSubmit}>
            <div className='section-card'>
                <div className='section-card-content bc-column input-container'>
                    <label>Полное имя</label>
                    <input type='text' placeholder='Елена Петрова' required
                    onChange={(e)=>setName(e.target.value)} value={name} />
                </div>
                <div className='section-card-content bc-column input-container'>
                    <label >Профиль в Telegram для связи</label>
                    <input type='text' placeholder='@yeliseikadol' required 
                    onChange={(e)=>setTelegram(e.target.value)} value={telegram} />
                </div>
                <div className='section-card-content bc-column input-container'>
                    <label>E-mail для доступа к книгам и оплаты</label>
                    <input type='email' placeholder='mail@gmail.com' required
                        onChange={(e)=>setEmail(e.target.value)} value={email}
                        />
                </div>
                <div className='section-card-content bc-column input-container'>
                    <label>Группа</label>
                    <select
                        name='group'
                        placeholder='Выберите группу'
                        onChange={(e)=>setGroup(e.target.value)}
                        required>
                        <option value='potok2-oksana'>Оксана (21 ноя — 10 фев; Вт, Чт 19:00)</option>
                        <option value='potok2-yelisei'>Елисей (21 ноя — 10 фев; Пн, Ср 17:00)</option>
                    </select>
                </div>
            </div>
            <button className='bc-button' type='submit'>Записаться</button>
        </form>
    </div>
  )
}