import React, {useState} from 'react'

export default function SeparatedForm() {   

const [tarifType, setTarifType] = useState("selfOwn")

  return (
    <div className='enroll-form section'>
        <a href='/'>Назад</a>

        <div className='section-header'>
            <h4 className='bc-typography-h4'>Записаться</h4>
            <h2>Курс "Веб-дизайн для удалённой работы"</h2>
            <p>Выберите тариф и начинайте учиться.</p>
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

            <label for='tel' className='input-label'>Тариф</label>
            <div className='bc-row bc-radio gap-8'
              onClick={() => {
                setTarifType("selfOwn");
            }}
            >
              
              <input
                type="radio"
                value={tarifType}
                name="class"
                checked={tarifType === "selfOwn"}
              />
              Самостоятельный
            </div>
            <div className='bc-row bc-radio gap-8' onClick={() => {
              setTarifType("fullAccess");
            }}>
              <input
                type="radio"
                value={tarifType}
                name="class"
                checked={tarifType === "fullAccess"}
              />
              Полный доступ
            </div>
            <div className='bc-row bc-radio gap-8' onClick={() => {
              setTarifType("group");
            }}>
              <input
                type="radio"
                value={tarifType}
                name="class"
                checked={tarifType === "group"}
              />
              В группе с Елисеем
            </div>
        </div>




        <div className='flex-column enroll-sum'>
          <div className='typography-h3'>{tarifType === "selfOwn" ? "Ежемесячный платеж: 280 руб." : tarifType === "fullAccess" ? "Ежемесячный платеж: 350 руб." : "Ежемесячный платеж: 560 руб."}</div>
          <div className='typography-body2'>{tarifType === "group" ? "Ссылка на оплату придёт на почту." : "Первый платёж через 2 недели после начала обучения. Ссылка на оплату придёт на почту."}</div>
        </div>

        <button className='bc-button' type='submit'>
            Записаться
        </button>

      </form>

    </div>
  )
}