import React from 'react'
import '../sass/styles-new.sass'
import { Link } from "react-scroll";
import {ReactComponent as Logo} from '../assets/images/logo-inverse.svg'

export default function NewMain() {
    const SrcWebm = "../titlevideo.webm"
    const SrcM4 = "../titlevideo-2.mp4"

    var EmbedVideo = function(props) {
        return (
            <div className='bc-video' dangerouslySetInnerHTML={{ __html: `
                <video
                    loop
                    muted
                    autoplay
                    playsinline
                    width="100%">
                    <source src=${SrcM4} type="video/mp4" />
                    <source src=${SrcWebm} type="video/webm" />
                    Sorry, your browser doesn't support videos.
                </video>
                
          ` }}></div>
        )
    }



  return (
    <div className='layout'>

        <div className='bc-header'>
            <div className='logo-box'>
                <Logo/>
            </div>
            <div className='menu-box'>
            <div className='bc-menu bc-row gap-32'>
                <Link
                    className='bc-menu-item'
                    to='about'
                    duration={500}
                    smooth='true'
                    >
                    О школе
                </Link>
                <Link
                    className='bc-menu-item'
                    to='process'
                    duration={500}
                    smooth='true'
                    >
                    Процесс
                </Link>
                <Link
                    className='bc-menu-item'
                    to='curriculum'
                    duration={500}
                    smooth='true'
                    >
                    Программа
                </Link>
                <Link
                    className='bc-menu-item'
                    to='result'
                    duration={500}
                    smooth='true'
                    >
                    Результат
                </Link>
                <Link
                    className='bc-menu-item'
                    to='tutors'
                    duration={500}
                    smooth='true'
                    >
                    Преподаватели
                </Link>
                <Link
                    className='bc-menu-item'
                    to='price'
                    duration={500}
                    smooth='true'
                    >
                    Цены
                </Link>
                <Link
                    className='bc-menu-item'
                    to='groups'
                    duration={500}
                    smooth='true'
                    >
                    Группы
                </Link>
            </div>
        </div>
        </div>




        <div className='section section-hero section-inverse'>
            <div className='section-header section-header-hero'>
                <h4 className='bc-typography-h4'>С нуля • 10 недель</h4>
                <h1>Веб-дизайн для удалённой работы</h1>
                <p>Интенсивный курс дизайна для получения работы и выполнения заказов в Беларуси или за рубежом.</p>
                <div className='bc-row gap-24'>
                    <a className='bc-button' href='/bc-enroll'>Записаться</a>
                    <div className='bc-column'>
                        <div className='bc-typography-body2'>612 бел. руб./месяц<br/>Всего 1836 бел. руб.</div>
                    </div>      
                </div>        
            </div>
            <div>
                <EmbedVideo/>
            </div>
        </div>
        


        <div className='section section-sales section-inverse'>
            <div className='bc-column section-card'>
                <div className='bc-row gap-16'>
                    <div className='sale-badge sale-badge-active'>
                        <div className='bc-typography-body2'>До пн 14 ноя</div>
                        <div className='bc-typography-h1'>−15%</div>
                    </div>
                    <div className='sale-badge'>
                        <div className='bc-typography-body2'>До 21 ноя</div>
                        <div className='bc-typography-h1'>0%</div>
                    </div>
                </div>
                <div className='section-card-content  bc-column '>
                    <h3>Запишитесь заранее и сэкономьте</h3>
                    <p>Раньше запись — ниже стоимость.</p>
                </div>
            </div>
        </div> 


{/*ABOUT*/}

        <div className='section section-accent-3' id='about'>
            <div className='section-header'>
                <h4 className='bc-typography-h4'>О школе</h4>
                <h2 className='bc-typography-h2'>Станьте дизайнером уже во время курса</h2>
                <p className='bc-typography-body'>Наша задача не только дать знания, а помочь вам сменить карьеру.</p>
            </div>
            <div className='section-card'>
                <img src={require('../assets/images/group-practice@2x.png')/*require('../assets/images/about-01.jpg')*/} alt='Преподаватель работает в Figma'/>
                <div className='section-card-content'>
                    <h3>6 часов практики в неделю</h3>
                    <p>Практика с преподавателем 3 раза в неделю.</p>
                </div>
            </div>
            <div className='section-card'>
                <img src={require('../assets/images/why-us-image-projects@2x.png'/*'../assets/images/about-02.jpg'*/)} alt='Экран сайта и мобильного приложения'/>
                <div className='section-card-content'>
                    <h3>2 проекта в портфолио</h3>
                    <p>Без этого не устроиться на работу: вы сделаете сайт и приложение.</p>
                </div>
            </div>
            <div className='section-card'>
                <img src={require('../assets/images/why-us-image-resume@2x.png'/*'../assets/images/about-03.jpg'*/)} alt='Резюме' width='50%'/>
                <div className='section-card-content'>
                    <h3>Поиск работы на 6 неделе обучения</h3>
                    <p>Вы начнёте искать работу уже в середине обучения.</p>
                </div>
            </div>
        </div>



{/*Уникально для курсов дизайна*/}



        <div className='section section-inverse unique-for-courses'>
            <div className='section-header'>
                <h2>Уникально для курсов дизайна</h2>
            </div>
                <div className='section-card unique-for-courses__instagram'>
                    <img src={require('../assets/images/unique-01.jpg')} alt='Instagram'/>
                    <div className='section-card-content'>
                        <h3>Работа с профилем Instagram</h3>
                        <p>Вы напишете контент-план и будете публиковать свои работы.</p>
                    </div>
                </div>
                <div className='section-card unique-for-courses__code'>
                    <img src={require('../assets/images/unique-02.jpg')} alt='Экран с кодом реакт-компонента'/>
                    <div className='section-card-content'>
                        <h3>Обучение компьютерной вёрстке</h3>
                        <p>Вы научитесь собирать несложные сайты своими руками.</p>
                    </div>
                </div>

                <div className='section-card unique-for-courses__ibm'>
                <img src={require('../assets/images/unique-03.jpg')} alt='Сертификат IBM'/>
                    <div className='section-card-content'>
                        <h3>Сертификат IBM</h3>
                        <p>В программу входит курс IBM «Дизайн-мышление в корпорации». Сертификат подходит для LinkedIn.</p>
                    </div>
                </div>
            </div>


{/*Процесс обучения*/}



        <div className='section section-accent-2' id='process'>
            <div className='section-header'>
                <h4 className='bc-typography-h4'>Процесс обучения</h4>
                <h2>Практикуйтесь в группе с преподавателем, учите теорию в удобное время</h2>
            </div>

            <div className='section-card'>
                <img src={require('../assets/images/process-01.jpg')} alt='Практика с группой'/>
                <div className='section-card-content'>
                    <h3>Практика с группой</h3>
                    <p>Вы будете видеть работу преподавателя и других студентов, вам не придётся прыгать между окнами.</p>
                </div>
            </div>

            <div className='section-card'>
                <img src={require('../assets/images/process-02.jpg')} alt='Мастер-классы'/>
                <div className='section-card-content'>
                    <h3>Мастер-классы</h3>
                    <p>По четвергам преподаватель покажет пример выполнения работы и ответит на вопросы.</p>
                </div>
            </div>

            <div className='section-card'>
            <img src={require('../assets/images/process-03.jpg')} alt='Теория по книгам' width='50%'/>
                <div className='section-card-content'>
                    <h3>Теория по книгам</h3>
                    <p>В стоимость курса включена годовая подписка на учебники по дизайну от Бюро Горбунова.</p>
                </div>
                <img src={require('../assets/images/process4.png')} alt='Теория по книгам'/>
                <div className='section-card-content'>
                    <p>Книги охватывают все аспекты дизайна, а мы даём честную критику по вашим работам.</p>
                </div>
            </div>

        </div>

{/*curriculum*/}


        <div className='section section-accent-1' id='curriculum'>
            <div className='section-header'>
                <h4 className='bc-typography-h4'>Программа</h4>
                <h2>Весь процесс работы дизайнером от простого к сложному</h2>
            </div>
            <div className='section-card'>
                <div className='section-card-content'>
                    <p>Типографика</p>
                    <p>Цвет</p>
                    <p>Композиция</p>
                    <p>UX и юзабилити</p>
                    <p>Сетка и адаптивность</p>
                    <p>Редактура</p>
                    <p>HTML-вёрстка</p>
                    <p>Сборка сайтов в Tilda</p>
                    <p>Управление проектами</p>
                    <p>Поиск заказов</p>
                    <p>Постинг в инстаграм</p>
                    <p>Оформление портфолио</p>
                </div>
            </div>
        </div>

{/*result*/}


        <div className='section' id='result'>
            <div className='section-header'>
                <h4 className='bc-typography-h4'>Результат</h4>
                <h2>Продвинутое владение Фигмой и портфолио для работы</h2>
                <p>Курс нацелен на то, чтобы вы начали работать самостоятельно. Поэтому все упраж­не­ния, зада­ния и темы нацелены именно на технические скиллы, а не на теорию и общую дизайнерскую обра­зо­ван­ность.</p>
            </div>
            <div className='section-card'>
                <img src={require('../assets/images/result-01.jpg')} alt='Работа ученика'/>
            </div>
            <div className='section-card'>
                <img src={require('../assets/images/result-02.jpg')} alt='Работа ученика'/>
            </div>
            <div className='section-card'>
                <img src={require('../assets/images/result-03.jpg')} alt='Работа ученика'/>
            </div>
            <div className='section-card'>
                <img src={require('../assets/images/result-04.jpg')} alt='Работа ученика'/>
            </div>
        </div>
        
        <div className='section section-inverse section-certificates'>
            <div className='section-header'>
                <h4 className='bc-typography-h4'>Сертификаты</h4>
                <h2>2 сертификата</h2>
            </div>
            <div className='certificate-box'>
            <div className='section-card-certificates bc-row gap-16'>
                    <img src={require('../assets/images/certificate-01.png')} alt='Сертификат Школы Кадола' width='300'/>
                    <img src={require('../assets/images/certificate-02.png')} alt='Сертификат IBM' width='300'/>
            </div>
            </div>
        </div>


{/*tutors*/}


        <div className='section' id='tutors'>
            <div className='section-header'>
                <h4 className='bc-typography-h4'>Преподаватели</h4>
                <h2>Опытные дизайнеры из Беларуси</h2>
                <p>Нам важно, чтобы преподаватели были в схожих со студентами условиях, и знали специфику поиска работы для белорусских дизайнеров в локальных и международных компаниях.</p>
            </div>
            <div className='section-card'>
                <img src={require('../assets/images/tutor-01.jpg')} alt='Елисей Кадол' width='50%'/>
                <div className='section-card-content'>
                    <h3>Елисей Кадол</h3>
                    <p>Я работаю дизайнером с 2014 года. Начинал как фрилансер, а с 2018 года стал работать на компании. Последние 3 года работаю удалённо. Сейчас работаю старшим дизайнером в эстонской компании Admirals.</p>
                </div>
                <div className='bc-row gap-24'>
                    <a href="https://behance.com/yeliseikadol">Behance</a>
                    <a href="https://dribbble.com/yeliseikadol">Dribbble</a>
                    <a href="https://linkedin.com/in/yeliseikadol">LinkedIn</a>
                    <a href="https://instagram.com/yeliseikadol">IG</a>
                </div>
            </div>
            <div className='section-card'>
                <img src={require('../assets/images/tutor-02.jpg')} alt='Елисей Кадол' width='50%'/>
                <div className='section-card-content'>
                    <h3>Оксана Воробьёва</h3>
                    <p>Я дизайнер в Lumos Mobi. Кроме большого опыта работы, у меня большой опыт преподавания в самых разных школах Минска и свой курс про карьеру дизайнера. Я прошла путь от нуля до работы в продуктовых компаниях Беларуси, таких как Verv.</p>
                </div>
                <div className='bc-row gap-24'>
                    <a href="https://www.behance.net/oksana_vorobey">Behance</a>
                    <a href="https://www.linkedin.com/in/oksana-vorobyeva-81a379203">LinkedIn</a>
                    <a href="https://instagram.com/oksana_vorobey">IG</a>
                </div>
            </div>
        </div>



{/*price*/}
        <div className='section section-inverse' id='price'>

            <div className='section-header'>
                <h4 className='bc-typography-h4'>Стоимость</h4>
                <h2>Поступить в Школу Кадола</h2>
            </div>

            <div className='section-card'>
                <div className='bc-row gap-16'>
                    <div className=' bc-column '>
                        <div className='bc-typography-body2 price-old'>720</div>
                        <div className='bc-typography-h1'>612<span className='bc-typography-body'> р./мес.</span></div>
                    </div>
                    <div className='bc-column'>
                        <div className='bc-typography-body2 price-future'>С пн 14 ноя</div>
                        <div className='bc-typography-h1 price-future'>720<span className='bc-typography-body'> р./мес.</span></div>
                    </div>
                </div>
            </div>

            <div className='section-card-content'>
                <div className='bc-row list-item'>
                    <div className='list-item-title'>Срок обучения</div>
                    <div className='list-item-details'>3 месяца</div>
                </div>
                <div className='bc-row list-item'>
                    <div className='list-item-title'>Начало обучения</div>
                    <div className='list-item-details'>Пн, 21 ноя 2022</div>
                </div>
                <div className='bc-row list-item'>
                    <div className='list-item-title'>Общая стоимость</div>
                    <div className='list-item-details'>1836 BYN</div>
                </div>
            </div>

            <a href='/bc-enroll' className='bc-button'>Записаться</a>

            <div className='section-card'>
                <div className='section-card-content'>
                <img src={require('../assets/images/enroll-section-01.png')} width='32' alt='иконка' />
                    <h3>Продвинутые технические навыки</h3>
                    <p>Композиция, типографика, Figma.</p>
                </div>
                <div className='section-card-content'>
                <img src={require('../assets/images/enroll-section-02.png')} width='32' alt='иконка' />
                    <h3>Способность решать задачи бизнеса</h3>
                    <p>Верстка сайтов в HTML, юзабилити.</p>
                </div>
                <div className='section-card-content'>
                    <img src={require('../assets/images/enroll-section-03.png')} width='32' alt='иконка' />
                    <h3>Поддержка в будущем</h3>
                    <p>Помощь в поиске работы, инструкции для работы, доступ к будущим мастер-классам.</p>
                </div>
            </div>
        </div>


{/*groups*/}

        <div className='section' id='groups'>
            <div className='section-header'>
                <h4 className='bc-typography-h4'>Ближайшие потоки</h4>
                <h2>Набор раз в 2 месяца. Успейте записаться.</h2>
            </div>
            <div className='schedule-select bc-row'>
                <div className='bc-typography-button tab tab-active'>21 ноя — 10 фев</div>
                <div className='bc-typography-button tab disabled'>
                    <div className='bc-typography-button disabled'>9 янв — 7 апр</div>
                    <div className='disabled bc-typography-body2'>набор с 21 ноя</div>
                </div>
            </div>

            <div className='section-card'>
                <div className='bc-row gap-16 row-center'>
                    <div className='bc-row gap-8'>
                        <div className='schedule-day schedule-day-disabled'>Пн</div>
                        <div className='schedule-day'>Вт</div>
                        <div className='schedule-day schedule-day-disabled'>Ср</div>
                        <div className='schedule-day'>Чт</div>
                        <div className='schedule-day'>Пт</div>
                    </div>
                    <div>19:00–20:45</div>
                </div>
                <div className='section-card-content'>
                    <div className='bc-row bc-row-center gap-16 horizontal-center'>
                        <img src={require('../assets/images/schedule-tutor-01.png')} alt='Оксана Воробьёва' width='64px'/>
                        <div className='bc-column'>
                            <h3>Оксана Воробьёва</h3>
                            <div className='bc-typography-body2'>UX/UI учитель • Минск</div>
                        </div>
                    </div>
                    
                </div>   
                <a href='/bc-enroll' className='bc-button bc-button-secondary'>Записаться</a>             
            </div>

            <div className='section-card'>
                <div className='bc-row gap-16 row-center'>
                    <div className='bc-row gap-8'>
                        <div className='schedule-day'>Пн</div>
                        <div className='schedule-day schedule-day-disabled'>Вт</div>
                        <div className='schedule-day'>Ср</div>
                        <div className='schedule-day'>Чт</div>
                        <div className='schedule-day schedule-day-disabled'>Пт</div>
                    </div>
                    <div>17:00–18:45</div>
                </div>
                <div className='section-card-content'>
                    <div className='bc-row bc-row-center gap-16 horizontal-center'>
                        <img src={require('../assets/images/schedule-tutor-02.png')} alt='Елисей Кадол' width='64px'/>
                        <div className='bc-column'>
                            <h3>Елисей Кадол</h3>
                            <div className='bc-typography-body2'>UX/UI учитель • Минск</div>
                        </div>
                    </div>
                     
                </div>   
                <a href='/bc-enroll' className='bc-button bc-button-secondary'>Записаться</a>
            </div>

        </div>

{/*qa*/}

        <div className='section section-inverse' id='qa'>
        <div className='section-header'>
            <h4 className='bc-typography-h4'>Частые вопросы</h4>
            <h2>Скорее всего, у вас есть вопросы</h2>
        </div>
        <div className='section-card'>
            <div className='section-card-content'>
                <h3>Мне нужен опыт UX/UI? Или в IT?</h3>
                <p>Нет. Курс с нуля, поэтому вам не нужно уметь рисовать, фотошопить и так далее.</p>
            </div>
        </div>

        <div className='section-card'>
            <div className='section-card-content'>
                <h3>10 недель — это не мало?</h3>
                <p>Мало! Более того, вы за всю жизнь не выучите всё. 10 недель достаточно для уверенного выполнения первых заказов. Смените профессию — сможете учиться дальше, но с практикой.</p>
            </div>
        </div>

        <div className='section-card'>
            <div className='section-card-content'>
                <h3>Сколько человек в группе?</h3>
                <p>До 20. Если набирается меньше 3 человек, то группы объединяются.</p>
            </div>
        </div>

        <div className='section-card'>
            <div className='section-card-content'>
                <h3>Как оплатить курс?</h3>
                <p>Картой белорусского банка, через ЕРИП или переводом на счет ИП.</p>
            </div>
        </div>

        <div className='section-card'>
            <div className='section-card-content'>
                <h3>Можно ли вернуть деньги?</h3>
                <p>Да, без указания причин. Деньги возвращаются по формуле:</p>
                <code>(общая сумма - книги) / 10 недель × кол-во оставшихся недель = сумма к возврату</code>
                <p>Например, если вы заплатили 2 000 рублей, то через 5 недель вы можете вернуть 938 рублей:</p>
                <code>(2000 - 124) / 10 × 5 = 938</code>
                <p>Для возврата напишите в телеграм вашему менеджеру или позвоните по любому телефону.</p>
            </div>
        </div>

    </div>

    <div className='section section-inverse bc-footer'>
        <div className='section-header'>
            <h2>Школа Кадола</h2>
        </div>
        <div className='section-card'>
            <div className='section-card-content'>
                <p><a href='https://docs.google.com/document/d/10HXXZQiJ499BT_xpbS9B6GdFG5BP9RIuN8LZ723j7zI/'>Оферта</a></p>
                <p><a href='/rekvizity'>Реквизиты</a></p>
                <p><a href='https://instagram.com/shkolakadola'>Instagram</a></p>                
            </div>
        </div>
    </div>






{/*

    <div className='section'>
        <div className='section-header'>
            <h4></h4>
            <h2></h2>
            <p></p>
        </div>
        <div className='section-card'>
            <img src={require('../assets/images/process-04.jpg')} alt=''/>
            <div className='section-card-content'>
                <h3></h3>
                <p></p>
            </div>
        </div>
    </div>
  */}


    </div>

    
  )
}



