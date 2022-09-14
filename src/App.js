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

function App() {


  return (
    <div className="App">
      <TopLine/>
      <Header/>

      <main>
        {/* шапка */}


        <HeroSection/>

        {/* видео */}
        <Section>
          <SectionHeader
            eyebrow='Что это за&nbsp;курс'
            title='Школа Кадола — это интенсивные курсы, нацеленные на уверенное выполнение заказов и получение работы. Проще говоря, мы даём навыки для заработка денег, чтобы вы могли учиться дальше уже работая.'
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
        <Section className='add-bottom'>
          <h3>Почему вам понравится</h3>
          <div className='cards-grid features'>

            <div className='cards-row'>
              <div className='card card-2-1 feature-1'>Вы будете практиковаться с преподавателем 2 раза в неделю, а учить теорию по крутым книжкам в удобное время</div>
              <div className='card card-1-2 feature-2'>Вы получите сертификат IBM, который сможете прикрепить к профилю LinkedIn</div>
            </div>

            <div className='cards-row'>
              <div className='card feature-3'>Во время учебы вы сделаете 2 крепких проекта для портфолио: сайт и мобильное приложение</div>
            </div>

            <div className='cards-row cols-1-2'>
              <div className='card card-1-2 feature-4'>Вы начнёте искать работу уже в середине обучения, а мы поможем вам</div>
              <div className='card card-2-1 feature-5'>После учёбы у вас будут инструкции по выполнению разных заданий, чтобы у вас всё получалось, даже если не хватает опыта</div>
            </div>

            <div className='cards-row'> 
              <div className='card feature-6'>Каждую неделю вас ждут мастер-классы про то, как делать разные крутые штуки</div>
              <div className='card feature-7'>Вы научитесь компьютерной вёрстке. Это значит, что вы сами сможете помочь кому-то запустить или обновить бизнес.</div>
              
            </div>
            {/*
            <div className='cards-row'>         
              <div className='card feature-8'>Поддержка и&nbsp;фидбек от комьюнити навсегда</div>
            </div>
            */}
          </div>
        </Section>




        {/* как проходит обучение */}
        <Section className='process-section add-top'>
          <SectionHeader
            eyebrow='Как проходит обучение'
            title='Практикуйтесь с преподавателем'
            text1='Вы будете практиковаться с преподавателем 2-3 раза в неделю. Вы будете работать в едином файле с остальными студентами, наблюдать за прогрессом остальных, разницей решений и общими ошибками.'
            />
            <div className='process-1'></div>
            <div className='caption'>Занятия устроены так, чтобы студенты видели экран преподавателя и&nbsp;могли работать сами.</div> 
        </Section>

        {/* книги */}
        <Section className='process-section'>
          <SectionHeader
            title='Учите теорию по учебникам дома'
            text1='Вы будете учить теорию по учебникам Бюро Горбунова по проектированию страниц, дизайну интерфейсов, редактуре и личной эффективности. В каждой книжке есть проверочные тесты.'
            />
            <div className='process-4'/>
            <div className='caption'>А ещё эти книги действительно крутые.</div>
        </Section>


        <Section className='process-section process-books add-bottom'>
          <div className='row'>
            <SectionHeader className='books-text'
              title='В стоимость курса включена годовая подписка на&nbsp;учебники'
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
            title='Делайте домашние задания в срок'
            text1='У вас будет задание на неделю. Его можно обсуждать в чатах с другими студентами, а по четвергам лично с преподавателем.'
            />
            <div className='process-3'/>
            <div className='caption'>Все задания связаны друг с&nbsp;другом и&nbsp;погружают вас в&nbsp;контекст работы в&nbsp;компании и&nbsp;на&nbsp;фрилансе.</div> 
        </Section>

        {/* мастер-классы */}
        <Section className='process-section'>
          <SectionHeader
            title='Прокачивайтесь на мастер-классах'
            text1='Каждую неделю преподаватель проводит мастер-класс. Например, как сделать анимацию, как собрать сайт в конструкторе или ещё что-то клёвое. Кстати, у вас будет доступ ко всем будущим мастер-классам.'
            />
            <div className='process-2'/>
            <div className='caption'>На мастер-классах преподаватель показывает качественные примеры и&nbsp;учит хитростям.</div> 
        </Section>

        

        {/* комьюнити */}
        <Section className='process-section'>
          <SectionHeader
            title='Обсуждайте всё в сообществе'
            text1='У вас будет специальный форум для обсуждения любых вопросов — домашки, портфолио, поиска работы и так далее. Доступ к ним не пропадает и после конца учебы.'
            />
            <div className='img'/>
        </Section>
        

        

        
        
        <Section className='add-top'>
          <SectionHeader
            eyebrow='Расписание на неделю'
            title='Учитесь по вечерам, отдыхайте по выходным'
             text1='Работать и учиться тяжело, поэтому есть простое правило — сдайте задание вовремя, чтобы получать обратную связь.'
            />
            <div className='schedule-img'/>
            <div className='caption'>Все занятия записываются, поэтому ничего страшного, если пропустить одно или несколько.</div>
        </Section>

        <Section>
          <SectionHeader
            eyebrow='Программа обучения'
            title='Учите теорию под задачу, а не для общей образованности'
            text1='Обучение построено как работа в компании — сперва вам дают задание, а потом вы начинаете разбираться как это сделать.'
            />
            <h3>Часть 1. База</h3>
          <div className='curruculum-rows'>
            <div className='curriculum-row'>
              <CurriculumWeek
                week='1 неделя'
                title='Понять задачу'
                text='Учёба начинается с погружения в мир пользователей и бизнес заказчика. Здесь вы научитесь быстро выбирать проблемы пользователей, которые будете решать.'
                task='Задание. Написать понимание задачи.'
              />
              <CurriculumWeek
                week='2 неделя'
                title='Найти решение'
                text='После задачи остаётся найти решение. На этой неделе вы научитесь быстро генерировать идеи, проверять их и выбирать лучшие.'
                task='Задание. Выбрать решение.'
              />
              <CurriculumWeek
                week='3 неделя'
                title='Типографика и вёрстка'
                text='Теперь решение надо отобразить в виде экранов. На этой неделе вы научитесь собирать опрятные макеты с помощью заголовков, текста и изображений.'
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
                text='Когда есть решение, можно усилить эмоциональное послание— выбрать шрифт, цвет, другие элементы. Вы оформите проект в портфолио.'
                task='Задание. Собрать библиотеку стилей. Оформить проект в портфолио.'
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
                text='Пора искать работу! На этой неделе вы оформите резюме и откликнитесь на вакансии. А ещё сходите на мастер-класс по тестовым заданиям.'
                task='Задание. Офорить профили в соцсетях. Написать 20 компаниям.'
              />
              <CurriculumWeek
                week='7 неделя'
                title='Веб-дизайн'
                text='Узнаете, как собираются основные типы страниц для веба и как они себя ведут при изменении размеров окна браузера.'
                task='Задание. Собрать веб-приложение.'
              />
              <CurriculumWeek
                week='8 неделя'
                title='Мобильный дизайн'
                text='Научитесь собирать экраны для iOS и Android, используя фирменные библиотеки компонентов.'
                task='Задание. Собрать мобильное приложение.'
              />
            </div>
            <div className='curriculum-row'>
              <CurriculumWeek
                week='9 неделя'
                title='Дизайн-системы'
                text='Поймёте зачем нужны дизайн-системы, как ими пользоваться и соберёте собственную.'
                task='Задание. Собрать дизайн-систему и выложить в Figma Community.'
              />
              <CurriculumWeek
                week='10 неделя'
                title='Запуск!'
                text='Сверстаете проект в HTML, опубликуете в интернете и обновите портфолио.'
                task='Задание. Сверстать проект. Оформить в портфолио.'
                weekStyle='week-launch'
              />
              <CurriculumWeek
                week='Навсегда'
                title='Помощь и фидбек'
                text='Доступ к&nbsp;материалам, мастер-классам и чатам с&nbsp;фидбеком'
                weekStyle='week-rest'
                task='Задание. Написать отзыв о школе.'
              />
            </div>
            <p>К этому моменту вы сможете не только отрисовать, но и сами сделать готовые сайты и опубликовать их в интернете. А ещё научитесь собирать дизайн мобильных приложений из нативных элементов. Это именно то, что надо начинающему дизайнеру.</p>

          </div>
        </Section>

        <Section>
          <SectionHeader
            eyebrow='Итоговый результат'
            title='Итог — вы готовы работать'
            text1='Наша задача, чтобы вы могли работать и зарабатывать. Поэтому упраж­не­ния, зада­ния и темы наце­лены именно на технические скиллы, а не общую дизайнерскую обра­зо­ван­ность. Кроме скиллов, мы помогаем с поиском работы, прохождением собеседований, выполнением тестовых заданий. Сообщество дизайнеров всегда поможет найти лучшее решение! Кстати, наши преподаватели имеют опыт преподавания в других школах и вот несколько примеров работ их выпускников:'
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

        <Section>
          <SectionHeader
            title='Сертификат'
            text1='Кроме сертификата нашей школы, у вас будет ещё сертификат от IBM.'
            />
          <div className='certificate-row'>
            <div className='img certificate certificate-shkolakadola'></div>
            <div className='img certificate certificate-ibm'></div>
          </div>
        </Section>

        <Section>
          <SectionHeader
            eyebrow='Преподаватели'
            title='Учитесь у опытных дизайнеров из Беларуси'
            text1='В Беларуси есть специфика — дизайнеры работают либо с международными компаниями, либо мелким локальным бизнесом. Как правило, удалённо. А в России учат дизайнеров под местные компании, типа Mail.ru, которые не берут на удалёнку начинающих белорусов.'
            text2='Поэтому нам важно, чтобы вы учились у тех, кто работает на международные компании удалённо из Беларуси или, по каким-то причинам, релоцировался и работает из Турции, Грузии или Польши. Эти преподаватели сами прошли тот путь, который предстоит вам, поэтому понимают что важно, а что нет, именно для Беларуси.'
            />

            <div className='stack tutor-block'>
              <div className='cards-grid'>

                <div className='cards-row cards-row-tutor'>
                  <a href='https://www.figma.com/community/file/1059862769821362327' className='card card-2-1 card-tutor-image card-tutor-yk1'>Перейти</a>
                  <div className='card card-tutor card-1-2'>
                    <div className='img avatar avatar-tutor avatar-kadol'></div>
                    <h4>Елисей Кадол</h4>
                    <p>Старший дизайнер в Admirals, Эстония</p>
                    <p>Профессионально работаю дизайнером с&nbsp;2014 года. Работаю удалённо с&nbsp;2020. Расскажу вам как быстро идти по карьере, чтобы жить так, как вам хочется.</p>
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
            text1='Для выпол­не­ния зада­ний вам понадобится самый обычный ком­пью­тер с&nbsp;нормальным интер­не­том. Нужные программы включены в&nbsp;стоимость курса и&nbsp;работают в&nbsp;браузере, поэтому вам не надо ничего покупать. Нач­ните работать на том обо­ру­до­ва­нии, кото­рое у&nbsp;вас уже есть.'
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
                  <div className='group-card-dates caption'>Окт 3 — Дек 23</div>
                  <div className='group-card-time caption'>Пн, Ср 19:00—20:45 Минск</div>
                </div>
                <div className='group-card-tutor-section'>
                  <div className='img group-card-tutor-avatar group-card-tutor-avatar-yeliseikadol'/>
                  <div className='group-card-tutor-text-section'>
                    <div className='group-card-tutor-name caption'>Елисей Кадол</div>
                    <div className='group-card-tutor-description caption'>UX/UI учитель, Минск</div>
                  </div>
                </div>
              </div>

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
                    <div className='group-card-tutor-description caption'>UX/UI учитель, Минск</div>
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
                    <div className='group-card-tutor-description caption'>UX/UI учитель, Минск</div>
                  </div>
                </div>
              </div>
              
            </div>
        </Section>

        
        <Section className='section-enroll add-bottom'>
          <SectionHeader
            title='Простые и прозрачные платежи'
            text1='Никаких дополнительных платежей: в стоимость курса включены программы, книги и дополнительные материалы. От вас требуется только ноутбук с интернетом.'
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
                    <p>Самостоятельность, ответственность, внутренная уверенность, умение постоять за себя</p>
                  </div>
                </div>
                <div className='enroll-feature row'>
                  <EnrollSupport/>
                  <div className='stack enroll-feature-text'>
                    <h4>Поддержка в будущем</h4>
                    <p>Помощь в поиске работы, инструкции для работы, доступ к&nbsp;будущим мастер-классам, доступ к&nbsp;комьюнити с&nbsp;фидбеком</p>
                  </div>
                </div>
                <div className='enroll-feature row'>
                  <EnrollGifts/>
                  <div className='stack enroll-feature-text'>
                    <h4>Всякие ништяки</h4>
                    <p>Фирменная футболка, подписка на книги Бюро, сертификаты</p>
                  </div>
                </div>
              </div>
            </div>
        </Section>

        

        {/*FAQ*/}
        <Section className='section-enroll'>
            <SectionHeader
              eyebrow='Вопросы и ответы'
              title='Скорее всего, у вас есть вопросы'
              />
              
              <div className='question-answer'>
                <h3 className='question'>Мне нужен опыт UX/UI? Или в IT?</h3>
                <p className='answer'>Нет, курс с нуля. Вам не нужно уметь рисовать, фотошопить и так далее. Но надо быть готовым всему научиться :-)</p>
              </div>
              <div className='question-answer'>
                <h3 className='question'>10 недель — это не мало?</h3>
                <p className='answer'>Мало! Конечно, лучше учиться 5 лет. Но мы предлагаем вам побыстрее устроиться на работу, а потом уже продолжить учиться. Представьте, что вы пошли в спортзал. Вы начинаете с базовых упражнений и настройке питания, а потом уже переходите к прокачке конкретных мышц. Вот этот курс — это базовые упражнения, с которыми вы можете брать заказы и зарабатывать. А уже потом вы будете прокачивать нужные мышцы-скиллы под конкретные рабочие задачи.</p>
              </div>
              <div className='question-answer'>
                <h3 className='question'>Сколько дизайнеров в группе?</h3>
                <p className='answer'>До 20 человек. Группы стартуют от 3 студентов — если набирается меньше, то группа отменяется. Можно записаться на следующий поток.</p>
              </div>
              <div className='question-answer'>
                <h3 className='question'>Как оплатить курс?</h3>
                <p className='answer'>Мы принимаем оплату на счет ИП. Можно оплатить через Произвольный платёж в приложении банка. Ещё можно через кассу, но лучше не надо.</p>
              </div>
              <div className='question-answer'>
                <h3 className='question'>Можно ли вернуть деньги?</h3>
                <p className='answer'>Да, без указания причин. Деньги возвращаются по формуле:</p>
                <code>(общая сумма - книги) / 10 недель × кол-во оставшихся недель = сумма к возврату</code>
                <p>Например, если вы заплатили 2000 рублей, то через 5 недель вы можете вернуть 938 рублей:</p>
                <code>(2000 - 124) / 10 × 5 = 938</code>
                <p>Для возврата напишите в телеграм вашему менеджеру или позвоните по любому телефону.</p>
              </div>
              <div className='question-answer'>
                <h3 className='question'>Почему иногда написано bootcamp.by?</h3>
                <p className='answer'>На западе учатся в буткемпах — интенсивных курсах. Смысл в том, что вы учитесь 5 дней в неделю, как на работе. Так и задумывалась эта школа, поэтому мы выбрали название Bootcamp. Но в Беларуси мало кто понимает, что это, поэтому мы переименовались в Школу Кадола.</p>
              </div>
              
          </Section>
        <Footer/>
        
      </main>
    </div>
  );
}

export default App;