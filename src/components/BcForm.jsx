import React, {useState} from 'react'

export default function SeparatedForm() {   

  
const[hasPromocode,setPromocode] = useState(false)
const[hasCertificate,setCertificate] = useState(false)


  return (
    <div className='enroll-form section'>
        <a href='/'>Назад</a>
        <div className='section-header'>
            
            <h4 className='bc-typography-h4'>Записаться</h4>
            <h2>Курс "Веб-дизайн для удалённой работы"</h2>
            <p>Заполните форму и выберите время, которое вам подходит.</p>
        </div>

      <form 
        className='stack' 
        method='POST'
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit="submit"
        >

        <input type="hidden" name="form-name" value="contact" />
        <div hidden><input name="bot-field"/></div>
        
        <div className='section-card'>
            <div className='section-card-content bc-column input-container'>  
                <label for='name' className='input-label'>Имя, Фамилия</label>
                <input
                        name='name'
                        type='text'
                        placeholder=""
                        />
            </div>
        
        <div className='section-card-content bc-column input-container'>
            <label for='tel' className='input-label'>Профиль в Telegram для связи</label>
            <input
                name='telegram'
                type='tel'
                placeholder="@nickname"
                required
                />
        </div>

        <div className='section-card-content bc-column input-container'>
            <label for='tel' className='input-label'>E-mail для доступа к книгам и оплаты</label>
            <input
                name='email'
                type='email'
                placeholder="mail@gmail.com"
                required
                />
        </div>

            <div className='section-card-content bc-column input-container'>
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

        <input
                    name='certificate'
                    type='text'
                    value={hasCertificate?'есть сертификат':null}
                    hidden
                    />

        <div className='checkbox-group'>
        <div className='checkbox-label' onClick={()=>setPromocode(!hasPromocode)}><i className={hasPromocode?'checkbox checkbox-checked':'checkbox'}/><div>У меня есть промокод</div></div>
        { hasPromocode ?<div className='section-card-content bc-column input-container promocode-block'>
            <input
                    name='promocode'
                    type='text'
                    placeholder="Введите промокод"
                    />
            </div>:null
        }
        </div>
        </div>

        <input
                    name='product'
                    type='text'
                    value={hasCertificate && hasPromocode?'payment15-3-4': hasCertificate?'payment15-3':hasPromocode?'payment15-4':'payment15'}
                    hidden
                    />


        <div className='flex-column enroll-sum'><div className='typography-h3'>К оплате: {hasCertificate && hasPromocode ? '468 BYN':hasCertificate?'540 BYN':hasPromocode?'540 BYN':'612 BYN'}</div>

        <div className='typography-body2'>Ссылка на оплату придёт на почту.</div></div>
        <button className='bc-button' type='submit'>
            Записаться
        </button>
      </form>
    </div>
  )
}