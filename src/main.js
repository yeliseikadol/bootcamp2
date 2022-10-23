import './sass/style.sass'
import SectionHeader from './components/SectionHeader';
import Section from './components/Section';
import Header from './components/Header';
import Tag from './components/Tag';
import Footer from './components/Footer';
import {ReactComponent as Figma} from './assets/icons/figma.svg'
import {ReactComponent as Notion} from './assets/icons/notion.svg'
import {ReactComponent as Web} from './assets/icons/web.svg'
import {ReactComponent as Ios} from './assets/icons/ios.svg'
import {ReactComponent as Android} from './assets/icons/android.svg'
import {ReactComponent as Html} from './assets/icons/html.svg'
import CurriculumWeek from './components/CurriculumWeek';
import Form from './components/Form';
import HeroSection from './components/HeroSection';
import {ReactComponent as EnrollHardSkills} from './assets/icons/enroll-skill.svg'
import {ReactComponent as EnrollSoftSkills} from './assets/icons/enroll-soft.svg'
import {ReactComponent as EnrollSupport} from './assets/icons/enroll-future.svg'
import {ReactComponent as EnrollGifts} from './assets/icons/enroll-gifts.svg'
import TopLine from './components/top-line';
import React from 'react'

function Main() {
    return (
    <div className="App">
      <TopLine/>
      <Header/>

      <main>
        {/* шапка */}


        <HeroSection/>

        {/* видео */}
        <Section className='add-bottom'>
          <SectionHeader
            eyebrow='Что это за&nbsp;курс'
            title='Школа Кадола — это интенсивные курсы, нацеленные на&nbsp;уверенное выполнение заказов и&nbsp;получение работы. Проще говоря, мы даём навыки для заработка денег, чтобы вы могли учиться дальше уже работая.'
            />
            <div className='tag-row'>
              <Tag tagType='tag-filled'><Figma/>Figma</Tag>
              <Tag tagType='tag-filled'><Notion/>Notion</Tag>
              <Tag tagType='tag-filled'><Web/>Web</Tag>
              <Tag tagType='tag-filled'><Ios/>iOS</Tag>
              <Tag tagType='tag-filled'><Android/>Android</Tag>
              <Tag tagType='tag-filled'><Html/>HTML/CSS</Tag>
            </div>
        </Section>

        {/* особенности */}
        <Section className='add-top add-bottom why-us'>
          <h2>Главное</h2>
          <div className='why-us__grid'>
            <div className='row'>
              <div className='projects'>
                <div className='why-us__image-projects'></div>
                <div className='why-us__description-projects typography-body2'>Во время учебы вы сделаете 2 крепких проекта для портфолио: сайт и&nbsp;мобильное приложение</div>
              </div>
            </div>


            <div className='why-us-row'>
              <div className='why-us__block practice'>
                <div className='why-us__image-practice'></div>
                  <div className='why-us__description-practice typography-body2'>Вы будете практиковаться с преподавателем 2-3 раза в&nbsp;неделю, а&nbsp;учить теорию по книжкам.</div>
              </div>
              <div className='why-us__block why-us-certificate'>
                <div className='why-us__image-certificate'></div>
                <div className='why-us__description-certificate typography-body2'>Вы получите сертификат IBM для LinkedIn.
                </div>
              </div>
            </div>



            <div className='row'>
              <div className='why-us__block resume'>
                <div className='why-us__image-resume'></div>
                  <div className='why-us__description-resume typography-body2'>Вы начнёте искать работу уже в&nbsp;середине обучения.</div>
              </div>
              <div className='why-us__block guidelines'>
                <div className='why-us__image-guidelines'></div>
                <div className='why-us__description-guidelines typography-body2'>У вас будут инструкции по выполнению заданий, чтобы вы могли работать, даже если не хватает опыта.
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='why-us__block masterclasses'>
                <div className='why-us__image-masterclasses'></div>
                  <div className='why-us__description-masterclasses typography-body2'>Каждую неделю вас ждут мастер-классы по дизайну.</div>
              </div>
              <div className='why-us__block code'>
                <div className='why-us__image-code'></div>
                <div className='why-us__description-code typography-body2'>Вы научитесь самостоятельно писать код компонентов и&nbsp;создавать сайты.
                </div>
              </div>
            </div>

          </div>

          {/*
          <div className='cards-grid features'>

            <div className='cards-row'>
              <div className='card card-2-1 feature-1'>Вы будете практиковаться с преподавателем 2 раза в&nbsp;неделю, а&nbsp;учить теорию по крутым книжкам в&nbsp;удобное время</div>
              <div className='card card-1-2 feature-2'>Вы получите сертификат IBM, который сможете прикрепить к&nbsp;профилю LinkedIn</div>
            </div>

            <div className='cards-row'>
              <div className='card feature-3'>Во время учебы вы сделаете 2 крепких проекта для портфолио: сайт и&nbsp;мобильное приложение</div>
            </div>

            <div className='cards-row cols-1-2'>
              <div className='card card-1-2 feature-4'>Вы начнёте искать работу уже в&nbsp;середине обучения, а&nbsp;мы поможем вам</div>
              <div className='card card-2-1 feature-5'>После учёбы у вас будут инструкции по выполнению разных заданий, чтобы у вас всё получалось, даже если не хватает опыта</div>
            </div>

            <div className='cards-row'> 
              <div className='card feature-6'>Каждую неделю вас ждут мастер-классы про то, как делать разные крутые штуки</div>
              <div className='card feature-7'>Вы научитесь компьютерной вёрстке. Это значит, что вы сами сможете помочь кому-то запустить или обновить бизнес.</div>
              
            </div>
            
            <div className='cards-row'>         
              <div className='card feature-8'>Поддержка и&nbsp;фидбек от комьюнити навсегда</div>
            </div>
            
          </div>*/}
        </Section>




        {/* как проходит обучение */}
        <Section className='process-section add-top add-bottom'>
          <SectionHeader
            eyebrow='Как проходит обучение'
            title='Практикуйтесь с&nbsp;преподавателем'
            text1='Вы будете практиковаться с&nbsp;преподавателем 2-3 раза в&nbsp;неделю. Вы будете работать в&nbsp;едином файле с&nbsp;остальными студентами, наблюдать за&nbsp;прогрессом, разницей решений и&nbsp;общими ошибками.'
            />
            <div className='process-1'></div>
            <div className='caption'>Занятия устроены так, чтобы студенты видели экран преподавателя и&nbsp;могли работать сами.</div> 
        </Section>

        {/* книги */}
        <Section className='process-section'>
          <SectionHeader
            title='Учите теорию по учебникам дома'
            text1='Вы будете учить теорию с&nbsp;учебниками Бюро Горбунова по проектированию страниц, дизайну интерфейсов, редактуре и&nbsp;личной эффективности. В&nbsp;каждой книге есть проверочные тесты.'
            />
            <div className='process-4'/>
            <div className='caption'>В книгах множество наглядных примеров.</div>
        </Section>


        <Section className='process-section process-books add-bottom'>
          <div className='row'>
            <SectionHeader className='books-text'
              title='В&nbsp;стоимость курса включена годовая подписка на&nbsp;учебники'
              text1='Типографика и&nbsp;вёрстка, Пользовательский интерфейс, Информационный стиль, Как написать, Кунг-фу редактора и&nbsp;Управление проектами, людьми и&nbsp;собой.'>
                <p>Подробнее о&nbsp;книгах <a href='https://bureau.ru/projects/bookshelf-bureau/'>на&nbsp;сайте Бюро Горбунова</a></p>
              </SectionHeader>
            <div className='books-img'>
            </div>
          </div>
        </Section>

        {/* домашка */}
        <Section className='process-section'>
          <SectionHeader
            title='Делайте домашние задания в&nbsp;срок'
            text1='У вас будет задание на&nbsp;неделю. Его можно обсуждать в&nbsp;чатах с&nbsp;другими студентами, а&nbsp;по четвергам лично с&nbsp;преподавателем.'
            />
            <div className='process-3'/>
            <div className='caption'>Все задания связаны друг с&nbsp;другом и&nbsp;погружают вас в&nbsp;контекст работы в&nbsp;компании и&nbsp;на&nbsp;фрилансе.</div> 
        </Section>

        {/* мастер-классы */}
        <Section className='process-section'>
          <SectionHeader
            title='Прокачивайтесь на&nbsp;мастер-классах'
            text1='Каждую неделю преподаватель проводит мастер-класс. Например, как сделать анимацию, как собрать сайт в&nbsp;конструкторе и&nbsp;другое. Кстати, у&nbsp;вас будет доступ ко всем будущим мастер-классам.'
            />
            <div className='process-2'/>
            <div className='caption'>На мастер-классах преподаватель показывает качественные примеры и&nbsp;учит хитростям.</div> 
        </Section>

        

        {/* комьюнити */}
        <Section className='process-section'>
          <SectionHeader
            title='Обсуждайте всё в&nbsp;сообществе'
            text1='У вас будет специальный форум для обсуждения любых вопросов — домашки, портфолио, поиска работы и&nbsp;так далее. Доступ к&nbsp;ним не пропадает и&nbsp;после конца учебы.'
            />
            <div className='img'/>
        </Section>
        

        

        
        
        <Section className='add-top add-bottom schedule'>
          <SectionHeader
            eyebrow='Расписание на&nbsp;неделю'
            title='Учитесь по вечерам, отдыхайте по выходным'
             text1='Работать и&nbsp;учиться тяжело, поэтому есть простое правило — сдайте задание вовремя, чтобы получать обратную связь.'
            />
            <div className='schedule-img'/>
            <div className='caption'>Все занятия записываются, поэтому ничего страшного, если пропустить одно или несколько.</div>
        </Section>

        <Section className='add-top add-bottom'>
          <SectionHeader
            eyebrow='Программа обучения'
            title='Учите теорию под задачу, а&nbsp;не для общей образованности'
            text1='Обучение построено как работа в&nbsp;компании — сперва вам дают задание, а&nbsp;потом вы начинаете разбираться как это сделать.'
            />
            <h3>Часть 1. База</h3>
          <div className='curruculum-rows'>
            <div className='curriculum-row'>
              <CurriculumWeek
                week='1 неделя'
                title='Понять задачу'
                text='Учёба начинается с погружения в&nbsp;мир пользователей и&nbsp;бизнес заказчика. Здесь вы научитесь быстро выбирать проблемы пользователей, которые будете решать.'
                task='Задание. Написать понимание задачи.'
              />
              <CurriculumWeek
                week='2 неделя'
                title='Найти решение'
                text='После задачи остаётся найти решение. На этой неделе вы научитесь быстро генерировать идеи, проверять их и&nbsp;выбирать лучшие.'
                task='Задание. Выбрать решение.'
              />
              <CurriculumWeek
                week='3 неделя'
                title='Типографика и&nbsp;вёрстка'
                text='Теперь решение надо отобразить в&nbsp;виде экранов. На этой неделе вы научитесь собирать опрятные макеты с помощью заголовков, текста и&nbsp;изображений.'
                task='Задание. Сделать серию экранов.'
              />
            </div>
            <div className='curriculum-row'>
              <CurriculumWeek
                week='4 неделя'
                title='Проверка'
                text='Решение надо показать пользователям. Потом улучшить. Вы будете повторять эти два действия, пока не решите остановиться.'
                task='Задание. Сделать прототипы.'
              />
              <CurriculumWeek
                week='5 неделя'
                title='Стилизация'
                text='Когда есть решение, можно усилить эмоциональное послание— выбрать шрифт, цвет, другие элементы. Вы оформите проект в&nbsp;портфолио.'
                task='Задание. Собрать библиотеку стилей. Оформить проект в&nbsp;портфолио.'
              />
              <CurriculumWeek
                week='2 недели'
                title='Перерыв'
                text='Время передохнуть, подтянуть хвосты, полирнуть проект и&nbsp;позаниматься своими делами.'
                weekStyle='week-rest'
                task='Задание. Отдохнуть от учёбы.'
              />
            </div>
            <h3>Часть 2. Pro</h3>
            <div className='curriculum-row'>
              <CurriculumWeek
                week='6 неделя'
                title='Карьера'
                text='Пора искать работу! На этой неделе вы оформите резюме и&nbsp;откликнитесь на&nbsp;вакансии. А ещё сходите на&nbsp;мастер-класс по тестовым заданиям.'
                task='Задание. Офорить профили в&nbsp;соцсетях. Написать 20 компаниям.'
              />
              <CurriculumWeek
                week='7 неделя'
                title='Веб-дизайн'
                text='Узнаете, как собираются основные типы страниц для веба и&nbsp;как они себя ведут при изменении размеров окна браузера.'
                task='Задание. Собрать веб-приложение.'
              />
              <CurriculumWeek
                week='8 неделя'
                title='Мобильный дизайн'
                text='Научитесь собирать экраны для iOS и&nbsp;Android, используя фирменные библиотеки компонентов.'
                task='Задание. Собрать мобильное приложение.'
              />
            </div>
            <div className='curriculum-row'>
              <CurriculumWeek
                week='9 неделя'
                title='Дизайн-системы'
                text='Поймёте зачем нужны дизайн-системы, как ими пользоваться и&nbsp;соберёте собственную.'
                task='Задание. Собрать дизайн-систему и&nbsp;выложить в&nbsp;Figma Community.'
              />
              <CurriculumWeek
                week='10 неделя'
                title='Запуск!'
                text='Сверстаете проект в&nbsp;HTML, опубликуете в&nbsp;интернете и&nbsp;обновите портфолио.'
                task='Задание. Сверстать проект. Оформить в&nbsp;портфолио.'
                weekStyle='week-launch'
              />
              <CurriculumWeek
                week='Навсегда'
                title='Помощь и&nbsp;фидбек'
                text='Доступ к&nbsp;материалам, мастер-классам и&nbsp;чатам с&nbsp;фидбеком'
                weekStyle='week-rest'
                task='Задание. Написать отзыв о&nbsp;школе.'
              />
            </div>
            <p>К этому моменту вы сможете не только отрисовать, но и&nbsp;сами сделать готовые сайты и&nbsp;опубликовать их в&nbsp;интернете. А ещё научитесь собирать дизайн мобильных приложений из нативных элементов. Это именно то, что надо начинающему дизайнеру.</p>

          </div>
        </Section>

        <Section className='result add-top add-bottom'>
          <SectionHeader
            eyebrow='Итоговый результат'
            title='Итог — вы готовы работать'
            text1='Наша задача, чтобы вы могли работать и&nbsp;зарабатывать. Поэтому упраж­не­ния, зада­ния и&nbsp;темы наце­лены именно на&nbsp;технические скиллы, а&nbsp;не общую дизайнерскую обра­зо­ван­ность. Кроме скиллов, мы помогаем с поиском работы, прохождением собеседований, выполнением тестовых заданий. Сообщество дизайнеров всегда поможет найти лучшее решение! Кстати, наши преподаватели имеют опыт преподавания в&nbsp;других школах и&nbsp;вот несколько примеров работ их выпускников:'
            />
            <div className='cards-grid'>
              <div className='cards-row'>
                <div className='card student student-1'></div>
                <div className='card student student-2'></div>
              </div>
              <div className='cards-row'>
                <div className='card student student-3'></div>
              </div>
              <div className='cards-row'>
                <div className='card student student-4'></div>
                <div className='card student student-5'></div>
              </div>
            </div>
        </Section>

        <Section className='certificate-section add-top add-bottom'>
          <SectionHeader
            title='Сертификат'
            text1='Кроме сертификата нашей школы, у вас будет сертификат от IBM.'
            />
          <div className='certificate-row'>
            <div className='img certificate certificate-shkolakadola'></div>
            <div className='img certificate certificate-ibm'></div>
          </div>
        </Section>

        <Section className='add-top add-bottom'>
          <SectionHeader
            eyebrow='Преподаватели'
            title='Учитесь у опытных дизайнеров из Беларуси'
            text1='В Беларуси есть специфика — дизайнеры работают либо с международными компаниями, либо мелким локальным бизнесом. Как правило, удалённо. А в&nbsp;России учат дизайнеров под местные компании, типа Mail.ru, которые не берут на&nbsp;удалёнку начинающих белорусов.'
            text2='Поэтому нам важно, чтобы вы учились у тех, кто работает на&nbsp;международные компании удалённо из Беларуси или, по каким-то причинам, релоцировался и&nbsp;работает из Турции, Грузии или Польши. Эти преподаватели сами прошли тот путь, который предстоит вам, поэтому понимают что важно, а&nbsp;что нет, именно для Беларуси.'
            />

            <div className='stack tutor-block'>
              <div className='cards-grid'>

                <div className='cards-row cards-row-tutor'>
                  <a href='https://www.figma.com/community/file/1059862769821362327' className='card card-2-1 card-tutor-image card-tutor-yk1'>Перейти</a>
                  <div className='card card-tutor card-1-2'>
                    <div className='img avatar avatar-tutor avatar-kadol'></div>
                    <h4>Елисей Кадол</h4>
                    <p>Старший дизайнер в&nbsp;Admirals, Эстония</p>
                    <p>Работаю дизайнером с&nbsp;2014 года. Работаю удалённо с&nbsp;2020. Научу вас быстро идти по карьерной лестнице, чтобы жить так, как вам хочется.</p>
                    <div className='row'>
                      <a href='https://behance.net/yeliseikadol'>Behance</a>
                      <a href='https://dribbble.com/yeliseikadol'>Dribbble</a>
                      <a href='https://linkedin.com/in/yeliseikadol'>LinkedIn</a>
                      <a href='https://instagram.com/yeliseikadol'>Instagram</a>
                    </div>
                  </div> 
                </div>

                <div className='cards-row'>
                  <a href='https://www.behance.net/gallery/96745491/Doorbell-iOS-app' className='card card-tutor-image card-tutor-yk2'>Перейти</a>
                  <a href='https://www.behance.net/gallery/133330937/Payflow-Payout-Service-for-Contributors' className='card card-tutor-image card-tutor-yk3'>Перейти</a>
                </div>  
              </div> 
            </div>
            <div className='stack tutor-card'>
              <div className='cards-grid'>
                <div className='cards-row cards-row-tutor'>
                  <a href='https://www.behance.net/gallery/133269503/Homam-App' className='card card-2-1 card-tutor-image card-tutor-ov1'>Перейти</a>
                  <div className='card card-tutor card-1-2'>
                    <div className='img avatar avatar-tutor avatar-vorobey'></div>
                    <h4>Оксана Воробьёва</h4>
                    <p>Синьор UX/UI дизайнер в&nbsp;Lumos, Беларусь. Автор курса "Путь дизайнера".</p>
                    <p>Работаю дизайнером с&nbsp;2018 года. Кроме большого опыта работы, я&nbsp;преподавала дизайн во многих школах Минска и&nbsp;выпустила собственный курс по дизайн-карьере.</p>
                    <div className='row'>
                      <a href='https://www.behance.net/oksana_vorobey'>Behance</a>
                      <a href='https://www.linkedin.com/in/oksana-vorobyeva-81a379203'>LinkedIn</a>
                      <a href='https://instagram.com/oksana_vorobey'>Instagram</a>
                    </div>
                  </div> 
                </div>
                <div className='cards-row'>
                  <a href='https://www.behance.net/gallery/129817183/RockID-App' className='card card-tutor-image card-tutor-ov2'>Перейти</a>
                  <a href='https://www.behance.net/gallery/123414677/Fonts' className='card card-tutor-image card-tutor-ov3'>Перейти</a>
                </div>  
              </div> 
            </div>

        </Section>

        <Section className='add-bottom'>
          <SectionHeader
            eyebrow='Нужен только компьютер или ноутбук'
            text1='Для выпол­не­ния зада­ний вам понадобится самый обычный ком­пью­тер с&nbsp;нормальным интер­не­том. Нужные программы включены в&nbsp;стоимость курса и&nbsp;работают в&nbsp;браузере, поэтому вам не надо ничего покупать. Нач­ните работать на&nbsp;том обо­ру­до­ва­нии, кото­рое у&nbsp;вас уже есть.'
            />
        </Section>


        <Section className='section-groups'>
          <div id='EnrollSection'></div>
          <SectionHeader
            eyebrow='Стоимость и&nbsp;группы'
            title='Ближайшие группы'
            text1='Группы стартуют раз в&nbsp;2 месяца.'
            />
            <div className='group-cards-row'>

              <div className='group-card'>
                <div className='group-card-dates-section'>
                  <h4 className='group-card-title'>UX/UI дизайн с нуля</h4>
                  <div className='group-card-dates caption'>Ноя 21 — Фев 10</div>
                  <div className='group-card-time caption'>Вт, Чт 19:00—20:45 Минск</div>
                </div>
                <div className='group-card-tutor-section'>
                  <div className='img group-card-tutor-avatar group-card-tutor-avatar-oksanavorobey'/>
                  <div className='group-card-tutor-text-section'>
                    <div className='group-card-tutor-name caption'>Оксана Воробьёва</div>
                    <div className='group-card-tutor-description caption'>UX/UI преподаватель, Минск</div>
                  </div>
                </div>
              </div>

              <div className='group-card'>
                <div className='group-card-dates-section'>
                  <h4 className='group-card-title'>UX/UI дизайн с нуля</h4>
                  <div className='group-card-dates caption'>Ноя 21 — Фев 10</div>
                  <div className='group-card-time caption'>Пн, Ср 17:00—18:45 Минск</div>
                </div>
                <div className='group-card-tutor-section'>
                  <div className='img group-card-tutor-avatar group-card-tutor-avatar-yeliseikadol'/>
                  <div className='group-card-tutor-text-section'>
                    <div className='group-card-tutor-name caption'>Елисей Кадол</div>
                    <div className='group-card-tutor-description caption'>UX/UI преподаватель, Минск</div>
                  </div>
                </div>
              </div>
              
            </div>
        </Section>

        
        <Section className='section-enroll add-bottom'>
          <SectionHeader
            title='Простые и&nbsp;прозрачные платежи'
            text1='Никаких дополнительных платежей: в&nbsp;стоимость курса включены программы, книги и&nbsp;дополнительные материалы. От вас требуется только ноутбук с интернетом.'
            />
            <div className='enroll-row row'>
              <Form/>
              <div className='enroll-features stack'>
                <div className='enroll-feature row'>
                  <EnrollHardSkills/>
                  <div className='stack enroll-feature-text'>
                    <h4>Продвинутые технические скиллы</h4>
                    <p>Figma, HTML/CSS, уверенное решение UX задач</p>
                  </div>
                </div>
                <div className='enroll-feature row'>
                  <EnrollSoftSkills/>
                  <div className='stack enroll-feature-text'>
                    <h4>Продвинутые софт скиллы</h4>
                    <p>Самостоятельность, ответственность, внутренная уверенность, умение постоять за&nbsp;себя</p>
                  </div>
                </div>
                <div className='enroll-feature row'>
                  <EnrollSupport/>
                  <div className='stack enroll-feature-text'>
                    <h4>Поддержка в&nbsp;будущем</h4>
                    <p>Помощь в&nbsp;поиске работы, инструкции для работы, доступ к&nbsp;будущим мастер-классам, доступ к&nbsp;комьюнити с&nbsp;фидбеком</p>
                  </div>
                </div>
                <div className='enroll-feature row'>
                  <EnrollGifts/>
                  <div className='stack enroll-feature-text'>
                    <h4>Всякие ништяки</h4>
                    <p>Фирменная футболка, подписка на&nbsp;книги Бюро, сертификаты</p>
                  </div>
                </div>
              </div>
            </div>
        </Section>

        

        {/*FAQ*/}
        <Section className='section-enroll'>
            <SectionHeader
              eyebrow='Вопросы и&nbsp;ответы'
              title='Скорее всего, у вас есть вопросы'
              />
              
              <div className='question-answer'>
                <h3 className='question'>Мне нужен опыт UX/UI? Или в&nbsp;IT?</h3>
                <p className='answer'>Нет, курс с&nbsp;нуля. Вам не&nbsp;нужно уметь рисовать, фотошопить и&nbsp;так&nbsp;далее. Но надо быть готовым всему научиться :-)</p>
              </div>
              <div className='question-answer'>
                <h3 className='question'>10 недель — это не&nbsp;мало?</h3>
                <p className='answer'>Мало! Конечно, лучше учиться 5&nbsp;лет. Но мы предлагаем вам побыстрее устроиться на&nbsp;работу, а&nbsp;потом уже продолжить учиться. Представьте, что вы пошли в&nbsp;спортзал. Вы начинаете с&nbsp;базовых упражнений и&nbsp;настройке питания, а&nbsp;потом уже переходите к&nbsp;прокачке конкретных мышц. Вот этот курс — это базовые упражнения, с&nbsp;которыми вы можете брать заказы и&nbsp;зарабатывать. А&nbsp;уже потом вы будете прокачивать нужные мышцы-скиллы под конкретные рабочие задачи.</p>
              </div>
              <div className='question-answer'>
                <h3 className='question'>Сколько дизайнеров в&nbsp;группе?</h3>
                <p className='answer'>До 20 человек. Группы стартуют от 3&nbsp;студентов — если набирается меньше, то группа отменяется. Можно записаться на&nbsp;следующий поток.</p>
              </div>
              <div className='question-answer'>
                <h3 className='question'>Как оплатить курс?</h3>
                <p className='answer'>Мы принимаем оплату на&nbsp;счет ИП. Можно оплатить через Произвольный платёж в&nbsp;приложении банка. Ещё можно через кассу, но лучше не надо.</p>
              </div>
              <div className='question-answer'>
                <h3 className='question'>Можно ли вернуть деньги?</h3>
                <p className='answer'>Да, без указания причин. Деньги возвращаются по формуле:</p>
                <code>(общая сумма - книги) / 10 недель × кол-во оставшихся недель = сумма к&nbsp;возврату</code>
                <p>Например, если вы заплатили 2&nbsp;000&nbsp;рублей, то через 5&nbsp;недель вы можете вернуть 938&nbsp;рублей:</p>
                <code>(2000 - 124) / 10 × 5 = 938</code>
                <p>Для возврата напишите в&nbsp;телеграм вашему менеджеру или позвоните по&nbsp;любому телефону.</p>
              </div>
              <div className='question-answer'>
                <h3 className='question'>Почему иногда написано bootcamp.by?</h3>
                <p className='answer'>На западе учатся в&nbsp;буткемпах — интенсивных курсах. Смысл в&nbsp;том, что вы учитесь 5 дней в&nbsp;неделю, как на&nbsp;работе. Так и&nbsp;задумывалась эта школа, поэтому мы выбрали название Bootcamp. Но в&nbsp;Беларуси мало кто понимает, что это, поэтому мы переименовались в&nbsp;Школу Кадола.</p>
              </div>
              
          </Section>
        <Footer/>
        
      </main>
    </div>
    )
}

export default Main
