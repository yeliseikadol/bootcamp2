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

    const date_1 = new Date('01/09/2023');
    const date_2 = new Date();
    

    const days = (date_1, date_2) => {
        let difference = date_1.getTime() - date_2.getTime();
        let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
        var DayLabel = '';
        var DateLabel = '';

        if (TotalDays === 1) {
            DateLabel = 'день';
            DayLabel = 'Остался'
        } else if (TotalDays === 2 || TotalDays === 3 || TotalDays === 4) {
            DateLabel = 'дня';
            DayLabel = 'Осталось'
        } else {
            DateLabel = 'дней';
            DayLabel = 'Осталось'
        }
        return (
            `${DayLabel} ${TotalDays} ${DateLabel}`
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
                <h4 className='bc-typography-h4'>С&nbsp;нуля • 10 недель</h4>
                <h1>Веб-дизайн для удалённой работы</h1>
                <p>Интенсивный курс дизайна для получения работы и&nbsp;выполнения заказов в&nbsp;Беларуси или за&nbsp;рубежом.</p>
                <div className='bc-row gap-24'>
                    <a className='bc-button' href='/bc-enroll'>Записаться</a>
                    <div className='bc-column'>
                        <div className='bc-typography-body2'>от 840 руб. <br/>Рассрочка 0%</div>
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
                        
                        <div className='bc-typography-body2'>Поток с&nbsp;9 января</div>
                        <div className='bc-typography-h1'>−30%</div>
                    </div>
                </div>
                <div className='section-card-content bc-column'>
                    <h3>Новая программа</h3>
                    <p>Скидка 30% на&nbsp;первые 2 потока 2023 года.</p>
                    <p>{days(date_1, date_2)}.</p>
                </div>
            </div>
        </div> 


{/*ABOUT*/}

        <div className='section section-accent-3' id='about'>
            <div className='section-header'>
                <h4 className='bc-typography-h4'>О школе</h4>
                <h2 className='bc-typography-h2'>Станьте дизайнером уже во время курса</h2>
                <p className='bc-typography-body'>Наша задача не&nbsp;только дать знания, а&nbsp;помочь вам сменить карьеру.</p>
            </div>
            <div className='section-card'>
                <img src={require('../assets/images/group-practice@2x.png')/*require('../assets/images/about-01.jpg')*/} alt='Преподаватель работает в Figma'/>
                <div className='section-card-content'>
                    <h3>Практика с&nbsp;преподавателем на&nbsp;групповом тарифе</h3>
                    <p>2&nbsp;раза в&nbsp;неделю по 2 часа.</p>
                </div>
            </div>
            <div className='section-card'>
                <img src={require('../assets/images/why-us-image-projects@2x.png'/*'../assets/images/about-02.jpg'*/)} alt='Экран сайта и мобильного приложения'/>
                <div className='section-card-content'>
                    <h3>2 проекта в&nbsp;портфолио</h3>
                    <p>Без этого не&nbsp;устроиться на&nbsp;работу: вы сделаете 2&nbsp;сайта и&nbsp;опубликуете их в&nbsp;интернете.</p>
                </div>
            </div>
            <div className='section-card'>
                <img src={require('../assets/images/why-us-image-resume@2x.png'/*'../assets/images/about-03.jpg'*/)} alt='Резюме' width='50%'/>
                <div className='section-card-content'>
                    <h3>Поиск работы с&nbsp;6 недели обучения</h3>
                    <p>В программе есть конкретные задания по поиску работы, а&nbsp;не&nbsp; "поддержка".</p>
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
                        <h3>Работа с&nbsp;Instagram</h3>
                        <p>Вы напишете контент-план и&nbsp;опубликуете свои работы.</p>
                    </div>
                </div>
                <div className='section-card unique-for-courses__code'>
                    <img src={require('../assets/images/unique-02.jpg')} alt='Экран с кодом реакт-компонента'/>
                    <div className='section-card-content'>
                        <h3>Обучение сборке сайтов</h3>
                        <p>Вы научитесь собирать несложные сайты своими руками на&nbsp;Tilda и&nbsp;чистом HTML.</p>
                    </div>
                </div>

                <div className='section-card unique-for-courses__ibm'>
                <img src={require('../assets/images/unique-03.jpg')} alt='Сертификат IBM'/>
                    <div className='section-card-content'>
                        <h3>Сертификат IBM</h3>
                        <p>В программу входит курс IBM «Дизайн-мышление в&nbsp;корпорации». Сертификат можно прикрепить к&nbsp;профилю LinkedIn.</p>
                    </div>
                </div>
            </div>


{/*Процесс обучения*/}



        <div className='section section-accent-2' id='process'>
            <div className='section-header'>
                <h4 className='bc-typography-h4'>Процесс обучения</h4>
                <h2>Практикуйтесь с&nbsp;преподавателем, учите теорию в&nbsp;удобное время</h2>
            </div>

            <div className='section-card'>
                <img src={require('../assets/images/process-01.jpg')} alt='Практика с группой'/>
                <div className='section-card-content'>
                    <h3>Практика с&nbsp;группой на&nbsp;групповом тарифе</h3>
                    <p>Вы будете видеть работу преподавателя и&nbsp;других студентов, вам не&nbsp;придётся прыгать между окнами.</p>
                </div>
            </div>

            <div className='section-card'>
                <img src={require('../assets/images/process-02.jpg')} alt='Мастер-классы'/>
                <div className='section-card-content'>
                    <h3>Мастер-классы и&nbsp;перевёрстки</h3>
                    <p>Вы получите доступ к&nbsp;видео с&nbsp;примерами выполнения заданий и&nbsp;реальных проектов из&nbsp;разных сфер.</p>
                </div>
            </div>

            <div className='section-card'>
            <img src={require('../assets/images/process-03.jpg')} alt='Теория по книгам' width='50%'/>
                <div className='section-card-content'>
                    <h3>Теория в&nbsp;лонгридах и&nbsp;видео</h3>
                    <p>Все уроки основаны на&nbsp;практическом применении. Урок включает в&nbsp;себя описание задачи и&nbsp;пошаговый процесс выполнения. Уроки могут использоваться для будущей работы.</p>
                </div>
            </div>

        </div>

{/*curriculum*/}


        <div className='section section-accent-1' id='curriculum'>
            <div className='section-header'>
                <h4 className='bc-typography-h4'>Программа</h4>
                <h2>Весь процесс работы дизайнером от простого к&nbsp;сложному</h2>
            </div>
            <div className='section-card'>
                <div className='section-card-content curriculum-table'>
                    <div className='curriculum-item'>
                        <h5>Неделя 1</h5>
                        <h3>1. Введение</h3>
                        <p>Знакомство с&nbsp;работой дизайнера, установка программ, прохождение базового курса по Figma.</p>
                        <p><strong>Результат.</strong> Вы работаете в&nbsp;Фигме, у&nbsp;вас установлены все программы и&nbsp;плагины для работы.</p>
                    </div>
                    <div className='curriculum-item'>
                        <h5>Неделя 2</h5>
                        <h3 className='bc-typography-h3'>2. Процесс сборки сайта</h3>
                        <p>Порядок работы, структура сайта, шаблоны, работа в&nbsp;Tilda.</p>
                        <p><strong>Результат.</strong> Вы сделали первый сайт с&nbsp;шаблонным дизайном и&nbsp;опубликовали в&nbsp;интернете.</p>
                    </div>
                    <div className='curriculum-item'>
                        <h5>Неделя 3-5</h5>
                        <h3>3. Прокачка дизайн скиллов</h3>
                        <p>Композиция, цвет, типографика, структура, текст, иллюстрации.</p>
                        <p><strong>Результат.</strong> Вы научились подбирать шрифты, иконки, изображения и&nbsp;писать понятный текст.</p>
                    </div>
                    <div className='curriculum-item'>
                        <h3>Перерыв 2 недели</h3>
                        <p>Можно заняться своими делами.</p>
                    </div>
                    <div className='curriculum-item'>
                        <h5>Неделя 6</h5>
                        <h3>4. Как искать работу</h3>
                        <p>Где искать, как искать, кому писать, самооценка.</p>
                        <p><strong>Результат.</strong> Вы собрали список клиентов и&nbsp;обновили портфолио.</p>
                    </div>
                    <div className='curriculum-item'>
                        <h5>Неделя 7</h5>
                        <h3>5. Соцсети</h3>
                        <p>Дизайн постов, контент-план.</p>
                        <p><strong>Результат.</strong> Вы оформили инстаграм.</p>
                    </div>
                    <div className='curriculum-item'>
                        <h5>Неделя 8-10</h5>
                        <h3>6. Портфолио</h3>
                        <p>Вы сделали второй проект для&nbsp;портфолио.</p>
                    </div>
                </div>
            </div>
        </div>

{/*result*/}


        <div className='section' id='result'>
            <div className='section-header'>
                <h4 className='bc-typography-h4'>Результат</h4>
                <h2>Продвинутое владение Фигмой и&nbsp;портфолио для работы</h2>
                <p>Курс нацелен на&nbsp;то, чтобы вы начали работать самостоятельно. Поэтому все упраж­не­ния, зада­ния и&nbsp;темы нацелены именно на&nbsp;технические скиллы, а&nbsp;не&nbsp;на&nbsp;теорию и&nbsp;общую дизайнерскую обра­зо­ван­ность.</p>
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
                <p>Нам важно, чтобы преподаватели были в&nbsp;схожих со студентами условиях, и&nbsp;знали специфику поиска работы для белорусских дизайнеров в&nbsp;локальных и&nbsp;международных компаниях.</p>
            </div>
            <div className='section-card'>
                <img src={require('../assets/images/tutor-01.jpg')} alt='Елисей Кадол' width='50%'/>
                <div className='section-card-content'>
                    <h3>Елисей Кадол</h3>
                    <p>Я работаю дизайнером с&nbsp;2014 года. Начинал как фрилансер, а&nbsp;с&nbsp;2018 года стал работать на&nbsp;компании. Последние 3 года работаю удалённо. Сейчас работаю старшим дизайнером в&nbsp;эстонской компании Admirals.</p>
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
                    <p>Я дизайнер в&nbsp;Lumos Mobi. Кроме большого опыта работы, у&nbsp;меня большой опыт преподавания в&nbsp;самых разных школах Минска и&nbsp;свой курс про карьеру дизайнера. Я прошла путь от нуля до работы в&nbsp;продуктовых компаниях Беларуси, таких как Verv.</p>
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
                <h2>Поступить в&nbsp;Школу Кадола</h2>
                <p>Второй поток начинается 9&nbsp;января.</p>
                <div className='price-sale'>У нас новая программа, поэтому на&nbsp;первые потоки 2023 года действует скидка 30%.</div>
            </div>

            

            <div className='bc-column gap-16'>
                <div className='bc-column price-card gap-32'>
                    <div className='bc-column gap-16'>
                        <div className='bc-typography-h3'>Самостоятельный</div>
                        <div>
                            <div className='bc-typography-body1'><span className='price-old'>1&nbsp;200</span> 840 рублей</div>
                            <div className='bc-typography-h2'>280 р./месяц</div>
                        </div>
                    </div>
                    <div>
                        <div>2 недели бесплатно</div>
                        <div>Лекции + Задания</div>
                        <div>Без проверки заданий</div>
                    </div>
                    <a href='/bc-enroll' className='bc-button'>Записаться</a>
                </div>

                <div className='bc-column price-card gap-32 price-card-accent'>
                    <div className='bc-column gap-16'>
                        <div className='bc-typography-h3'>Полный доступ</div>
                        <div>
                            <div className='bc-typography-body1'><span className='price-old'>1&nbsp;800</span> 1&nbsp;380 рублей</div>
                            <div className='bc-typography-h2'>460 р./месяц</div>
                        </div>
                    </div>
                    <div>
                        <div>2 недели бесплатно</div>
                        <div>Лекции + Задания</div>
                        <div>+ Проверка заданий</div>
                        <div>+ Общий чат</div>
                        <div>+ Мастер-классы</div>
                    </div>
                    <a href='/bc-enroll' className='bc-button'>Записаться</a>
                </div>

                <div className='bc-column price-card gap-32'>
                    <div className='bc-column gap-16'>
                        <div className='bc-typography-h3'>В группе с&nbsp;Елисеем</div>
                        <div>
                        <div className='bc-typography-body1'><span className='price-old'>2&nbsp;400</span> 1&nbsp;680 рублей</div>
                            <div className='bc-typography-h2'>560 р./месяц</div>
                        </div>
                    </div>
                    <div>
                        <div>2 недели бесплатно</div>
                        <div>Лекции + Задания</div>
                        <div>Проверка заданий</div>
                        <div>Общий чат</div>                        
                        <div>Мастер-классы</div>
                        <div>+ Чат с&nbsp;Елисеем</div>
                        <div>+ Практика 2 раза в&nbsp;неделю в&nbsp;группе</div>
                        <div>+ Персональная помощь с&nbsp;карьерой</div>
                    </div>
                    <a href='/bc-enroll' className='bc-button'>Записаться</a>
                </div>
            </div>










            <div className='section-card'>
                <div className='section-card-content'>
                <img src={require('../assets/images/enroll-section-01.png')} width='32' alt='иконка' />
                    <h3>Продвинутые технические навыки</h3>
                    <p>Композиция, типографика, Figma.</p>
                </div>
                <div className='section-card-content'>
                <img src={require('../assets/images/enroll-section-02.png')} width='32' alt='иконка' />
                    <h3>Способность решать задачи бизнеса</h3>
                    <p>Верстка сайтов в&nbsp;HTML, юзабилити.</p>
                </div>
                <div className='section-card-content'>
                    <img src={require('../assets/images/enroll-section-03.png')} width='32' alt='иконка' />
                    <h3>Поддержка в&nbsp;будущем</h3>
                    <p>Помощь в&nbsp;поиске работы, инструкции для работы, доступ к&nbsp;будущим мастер-классам.</p>
                </div>
            </div>
        </div>


{/*groups*/}

        <div className='section' id='groups'>
            <div className='section-header'>
                <h4 className='bc-typography-h4'>Расписание</h4>
                <h2>Практические занятия</h2>
            </div>
            <div className='schedule-select bc-row'>
                <div className='bc-typography-button tab tab-active'>9 янв — 3 мар</div>
                <div className='bc-typography-button tab disabled'>
                    <div className='bc-typography-button disabled'>17 апр — 15 июл</div>
                </div>
            </div>

            {/*<div className='section-card'>
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
         </div>*/}

            <div className='section-card'>
                <div className='bc-row gap-16 row-center'>
                    <div className='bc-row gap-8'>
                        <div className='schedule-day schedule-day-disabled'>Пн</div>
                        <div className='schedule-day'>Вт</div>
                        <div className='schedule-day schedule-day-disabled'>Ср</div>
                        <div className='schedule-day'>Чт</div>
                        <div className='schedule-day schedule-day-disabled'>Пт</div>
                    </div>
                    <div>18:30–20:00</div>
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
            <h2>Скорее всего, у&nbsp;вас есть вопросы</h2>
        </div>
        <div className='section-card'>
            <div className='section-card-content'>
                <h3>Мне нужен опыт UX/UI? Или в&nbsp;IT?</h3>
                <p>Нет. Курс с&nbsp;нуля, поэтому вам не&nbsp;нужно уметь рисовать, фотошопить и&nbsp;так далее.</p>
            </div>
        </div>

        <div className='section-card'>
            <div className='section-card-content'>
                <h3>10 недель — это не&nbsp;мало?</h3>
                <p>Мало! Более того, вы за всю жизнь не&nbsp;выучите всё. 10 недель достаточно для уверенного выполнения первых заказов. Смените профессию — сможете учиться дальше, но с&nbsp;практикой.</p>
            </div>
        </div>

        <div className='section-card'>
            <div className='section-card-content'>
                <h3>Сколько человек в&nbsp;группе?</h3>
                <p>До 20. Если набирается меньше 3 человек, то группы объединяются.</p>
            </div>
        </div>

        <div className='section-card'>
            <div className='section-card-content'>
                <h3>Как оплатить курс?</h3>
                <p>Картой белорусского банка, через ЕРИП или переводом на&nbsp;счет ИП.</p>
            </div>
        </div>

        <div className='section-card'>
            <div className='section-card-content'>
                <h3>Можно ли вернуть деньги?</h3>
                <p>Да, без указания причин. Деньги возвращаются по формуле:</p>
                <code>(общая сумма - книги) / 10 недель × кол-во оставшихся недель = сумма к&nbsp;возврату</code>
                <p>Например, если вы заплатили 2 000 рублей, то через 5 недель вы можете вернуть 938 рублей:</p>
                <code>(2000 - 124) / 10 × 5 = 938</code>
                <p>Для возврата напишите в&nbsp;телеграм вашему менеджеру или позвоните по любому телефону.</p>
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



