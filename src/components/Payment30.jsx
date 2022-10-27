import React from 'react'
import Section from './Section'

function Payment30() {
    return (
        <Section><h1>Итого</h1>
          <div>Общая стоимость: 2160 BYN</div>
          <div>−30% за запись до 30 октября</div>
          <div>К оплате: 504 BYN</div>
            <a className='button button-big' href="https://epos.hutkigrosh.by/pay/pay?param=19190-1-30#00020101021132450010by.raschet01074440631101019190-1-3012021133320014by.epos.unipay031019190%3B1%3B30520489995802BY5911IPKadolE.N.6005Minsk5406504.0053039336304F005">Оплатить</a>
        </Section>
    )
}

export default Payment30
