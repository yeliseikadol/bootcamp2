import React from 'react'
import Section from './Section'
import SectionHeader from './SectionHeader'

function Rekvizity() {
    return (
        <Section>
            <SectionHeader
                title="Оферта"
            />
            <div>
                <div>УНП 193340424</div>
                <div>ИП КАДОЛ ЕЛИСЕЙ НИКОЛАЕВИЧ</div>
                <div>БИК: ALFABY2X</div>
                <div>Счет в BYN: BY92ALFA30132585760010270000</div>
                <div>ЗАО «Альфа-Банк»</div>
                <div>Назначение платежа: Оплата обучения. Имя Фамилия.</div>
            </div>
            <div><a href='/'>Вернуться на главную страницу</a></div>
        </Section>
    )
}

export default Rekvizity
