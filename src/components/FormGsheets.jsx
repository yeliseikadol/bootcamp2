import React from 'react'
import axios from 'axios'
import { useState } from 'react'


export default function FormGsheets() {

//form states
const [name, setName] = useState('')
const [telegram, setTelegram] = useState('')
const [email, setEmail] = useState('')

//submit events
const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(name,telegram,email);
    const data={
        Name:name,
        Telegram:telegram,
        Email:email
    }
    axios.post('https://sheet.best/api/sheets/497193d1-0be2-4f25-a92c-148092fda674',data).then((response)=>{
       console.log(response);
       setName('');
       setTelegram('');
       setEmail('');
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
                    <input type='text' placeholder="Елена Петрова" required
                    onChange={(e)=>setName(e.target.value)} value={name} />
                </div>
                <div className='section-card-content bc-column input-container'>
                    <label >Профиль в Telegram для связи</label>
                    <input type='text' placeholder="@yeliseikadol" required 
                    onChange={(e)=>setTelegram(e.target.value)} value={telegram} />
                </div>
                <div className='section-card-content bc-column input-container'>
                    <label>E-mail для доступа к книгам и оплаты</label>
                    <input type='email' placeholder="mail@gmail.com" required
                        onChange={(e)=>setEmail(e.target.value)} value={email}
                        />
                </div>
            </div>
            <button className='bc-button' type='submit'>Записаться</button>
        </form>
    </div>
  )
}