import React, {useState} from 'react'
import Button from './Button'
import Section from './Section'
import SectionHeader from './SectionHeader'

export default function SeparatedForm() {   

const[hasPromocode,setPromocode] = useState(true)
const[hasCertificate,setCertificate] = useState(true)


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
        action={ hasCertificate && hasPromocode ? 'https://epos.hutkigrosh.by/pay/pay?param=19190-1-30-3-4#00020101021132490010by.raschet01074440631101419190-1-30-3-412021133360014by.epos.unipay031419190%3B1%3B30-3-4520489995802BY5911IPKadolE.N.6005Minsk5406360.00530393363043B07' : hasCertificate ? 'https://epos.hutkigrosh.by/pay/pay?param=19190-1-30-3#00020101021132470010by.raschet01074440631101219190-1-30-312021133340014by.epos.unipay031219190%3B1%3B30-3520489995802BY5911IPKadolE.N.6005Minsk5406432.0053039336304DA30' : hasPromocode ? 'https://epos.hutkigrosh.by/pay/pay?param=19190-1-30-4#00020101021132470010by.raschet01074440631101219190-1-30-412021133340014by.epos.unipay031219190%3B1%3B30-4520489995802BY5911IPKadolE.N.6005Minsk5406432.00530393363041E49' : 'https://epos.hutkigrosh.by/pay/pay?param=19190-1-30#00020101021132450010by.raschet01074440631101019190-1-3012021133320014by.epos.unipay031019190%3B1%3B30520489995802BY5911IPKadolE.N.6005Minsk5406504.0053039336304F005' }
        >
        <input type="hidden" name="form-name" value="contact" />
        
        
        
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
                name='tel'
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


        <div onClick={()=>setCertificate(!hasCertificate)}>У меня есть сертификат других курсов</div>
        { hasCertificate ?<div className='flex-column input-container promocode-block'>  
            <label for='promocode' className='input-label'>Сертификат</label>
            <input
                    name='promocode'
                    type='text'
                    placeholder=""
                    />
            </div>:null
        }
        


        <div onClick={()=>setPromocode(!hasPromocode)}>У меня есть промокод</div>
        { hasPromocode ?<div className='flex-column input-container promocode-block'>  
            <label for='promocode' className='input-label'>Промокод</label>
            <input
                    name='promocode'
                    type='text'
                    placeholder=""
                    />
            </div>:null
        }

        {/*<a href={hasCertificate && hasPromocode ?'https://epos.hutkigrosh.by/pay/pay?param=19190-1-30-3-4#00020101021132490010by.raschet01074440631101419190-1-30-3-412021133360014by.epos.unipay031419190%3B1%3B30-3-4520489995802BY5911IPKadolE.N.6005Minsk5406360.00530393363043B07':hasCertificate ? 'https://epos.hutkigrosh.by/pay/pay?param=19190-1-30-3#00020101021132470010by.raschet01074440631101219190-1-30-312021133340014by.epos.unipay031219190%3B1%3B30-3520489995802BY5911IPKadolE.N.6005Minsk5406432.0053039336304DA30':hasPromocode ? 'https://epos.hutkigrosh.by/pay/pay?param=19190-1-30-4#00020101021132470010by.raschet01074440631101219190-1-30-412021133340014by.epos.unipay031219190%3B1%3B30-4520489995802BY5911IPKadolE.N.6005Minsk5406432.00530393363041E49':'https://epos.hutkigrosh.by/pay/pay?param=19190-1-30#00020101021132450010by.raschet01074440631101019190-1-3012021133320014by.epos.unipay031019190%3B1%3B30520489995802BY5911IPKadolE.N.6005Minsk5406504.0053039336304F005'}>
            <button type='submit'>Записаться</button>
        </a>*/}

        <Button type='submit'>Записаться</Button>

        <p className='typography-body2'>После нажатия на кнопку с вами свяжется менеджер. Мы работаем по будням с 10 до 18.</p>


        


      </form>
    </Section>
  )
}