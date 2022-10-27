import React, {useState} from 'react'
import Section from './Section'
import SectionHeader from './SectionHeader'

export default function SeparatedForm() {   

const[hasPromocode,setPromocode] = useState(false)
const[hasCertificate,setCertificate] = useState(false)


  return (
    <Section className='enroll-form'>
        <div><a href='/'>Назад</a></div>
        <SectionHeader
                title="Записаться на курс веб-дизайна для удалённой работы"
            />
        <p>Заполните форму и выберите время, которое вам подходит.</p>



      <form 
        className='stack' 
        method='POST'
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action={ hasCertificate && hasPromocode ? '/payment30-3-4' : hasCertificate ? '/payment30-3' : hasPromocode ? '/payment30-4' : '/payment30' }
        onSubmit="submit"
        >
        <input type="hidden" name="form-name" value="contact" />
        <div hidden>
          <input name="bot-field"/>

          {/*<form name="contact" netlify netlify-honeypot="bot-field" hidden>
            <input type="text" name="name">
            <input type="tel" name="telegram">
            <input type="email" name="email">
            <select name="class">
            <input type="text" name="promocode">
  </form>*/}
        </div>
        
        
        <div className='flex-column input-container'>  
          <label for='name' className='input-label'>Полное имя</label>
          <input
                  name='name'
                  type='text'
                  placeholder="Елена Петрова"
                  />
        </div>
        
        <div className='flex-column input-container'>
            <label for='tel' className='input-label'>Профиль в Telegram для связи</label>
            <input
                name='telegram'
                type='tel'
                placeholder="@yeliseikadol"
                required
                />
        </div>

        <div className='flex-column input-container'>
            <label for='tel' className='input-label'>E-mail для доступа к книгам</label>
            <input
                name='email'
                type='email'
                placeholder="mail@gmail.com"
                required
                />
        </div>

            <div className='flex-column input-container'>
            <label form='class' className='input-label'>Группа</label>
            <select
                name='class'
                placeholder="Выберите группу"
                required>
                  <option value='Оксана, 21.11 — 10.02, вт и чт с 19:00'>Оксана (21 ноя — 10 фев; Вт, Чт 19:00)</option>
                  <option value='Елисей, 21.11 — 10.02, пн и ср с 17:00'>Елисей (21 ноя — 10 фев; Пн, Ср 17:00)</option>
            </select>
        </div>

        <div className='checkbox-group'>
        <div className='checkbox-label' onClick={()=>setCertificate(!hasCertificate)}><i className={hasCertificate?'checkbox checkbox-checked':'checkbox'}/><div>У меня есть сертификат других курсов</div></div>
        </div>

        <div className='checkbox-group'>
        <div className='checkbox-label' onClick={()=>setPromocode(!hasPromocode)}><i className={hasPromocode?'checkbox checkbox-checked':'checkbox'}/><div>У меня есть промокод</div></div>
        { hasPromocode ?<div className='flex-column input-container promocode-block'>  
            <input
                    name='promocode'
                    type='text'
                    placeholder="Введите промокод"
                    />
            </div>:null
        }
        </div>

        <button className='button button-big' type='submit'>
            {hasCertificate && hasPromocode ? 'Оплатить: 360 BYN':hasCertificate?'Оплатить: 432 BYN':hasPromocode?'Оплатить: 432 BYN':'Оплатить: 504 BYN'}
        </button>

        <p className='typography-body2'>После нажатия вы попадёте на форму оплаты.</p>


        


      </form>
    </Section>
  )
}