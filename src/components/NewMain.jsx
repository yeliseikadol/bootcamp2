import React from 'react'
import './styles-new.sass'

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
        <div className='section section-hero'>
            <div className='section-header section-header-hero'>
                <h1>Веб-дизайн для удалённой работы</h1>
                <div>С нуля • 10 недель</div>
                <p>Интенсивный курс дизайна для получения работы и выполнения заказов в Беларуси или за рубежом.</p>
                <div className='flex-row flex-gap-16'>
                    <a className='bc-button' href='/enroll'>Записаться</a>
                    <div className='flex-column'>
                        <div>1560 BYN</div>
                        <div>или 520 BYN в месяц</div>
                    </div>      
                </div>        
            </div>
            <div>
                <EmbedVideo/>
            </div>
        </div>


        <div className='section'>
            <div className='section-header'>
                <h4>О школе</h4>
                <h2>Станьте дизайнером уже во время курса</h2>
                <p>Наша задача не только дать знания, а помочь вам сменить карьеру.</p>
            </div>
            <div className='section-card'>
                <img></img>
                <h3>2 проекта в портфолио</h3>
                <p>Без этого не устроиться на работу: вы сделаете сайт и приложение.</p>
            </div>
            <div className='section-card'>
                <img></img>
                <h3>6 часов практики в неделю</h3>
                <p>Практика с преподавателем 3 раза в неделю.</p>
            </div>
            <div className='section-card'>
                <img></img>
                <h3>Сертификат IBM</h3>
                <p>Вы получите сертификат Дизайн-мышление в корпорации от IBM.</p>
            </div>
            <div className='section-card'>
                <img></img>
                <h3>Поиск работы на 6 неделе обучения</h3>
                <p>Вы начнёте искать работу уже в середине обучения.</p>
            </div>
        </div>

        <div className='section'>
            <div className='section-header'>
                <h4></h4>
                <h2>Уникально для курсов дизайна</h2>
                <p></p>
            </div>
            <div className='section-card'>
                <img></img>
                <h3>Работа с профилем Instagram</h3>
                <p>Вы напишете контент-план и будете публиковать свои работы.</p>
            </div>
            <div className='section-card'>
                <img></img>
                <h3>Обучение компьютерной вёрстке</h3>
                <p>Вы научитесь собирать несложные сайты своими руками.</p>
            </div>
        </div>

        <div className='section'>
            <div className='section-header'>
                <h4>Процесс обучения</h4>
                <h2>Практикуйтесь с преподавателем, учите теорию в удобное время</h2>
                <p></p>
            </div>
            <div className='section-card'>
                <img></img>
                <h3>Практика с группой</h3>
                <p>Вы будете видеть работу преподавателя и других студентов, вам не придётся прыгать между окнами.</p>
            </div>
            <div className='section-card'>
                <img></img>
                <h3>Мастер-классы</h3>
                <p>По четвергам преподаватель покажет пример выполнения работы и ответит на вопросы.</p>
            </div>
            <div className='section-card'>
                <img></img>
                <h3>Теория по книгам</h3>
                <p>В стоимость курса включена годовая подписка на учебники по дизайну от Бюро Горбунова.</p>
            </div>
        </div>

        <div className='section'>
            <div className='section-header'>
                <h4>Программа обучения</h4>
                <h2>Весь процесс работы от простого к сложному</h2>
                <p></p>
            </div>
            <div className='section-card'>
                <img></img>
                <h3>Основы</h3>
                <p>Вы будете видеть работу преподавателя и других студентов, вам не придётся прыгать между окнами.</p>
            </div>
        </div>






    {/*<div className='section'>
                <div className='section-header'>
                    <h4></h4>
                    <h2></h2>
                    <p></p>
                </div>
                <div className='section-card'>
                    <img></img>
                    <h3></h3>
                    <p></p>
                </div>
    </div>*/}
    </div>

    
  )
}



