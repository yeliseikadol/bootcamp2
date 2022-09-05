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

function App() {


  return (
    <div className="App">
      
      <Header/>

      <main>
        {/* шапка */}


        <HeroSection/>

        {/* видео */}
        <Section className='add-top'>
          <SectionHeader
            eyebrow='Что это за&nbsp;курс'
            title='Интенсивный практический курс, нацеленный на&nbsp;уверенное выполнение частных заказов и&nbsp;работе в&nbsp;компании'
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
          <SectionHeader eyebrow='Особенности'/>
          <div className='cards-grid features'>

            <div className='cards-row'>
              <div className='card card-2-1 feature-1'>Практика с&nbsp;преподавателем 2&nbsp;раза в&nbsp;неделю</div>
              <div className='card card-1-2 feature-2'>Сертификат IBM в&nbsp;середине курса</div>
            </div>

            <div className='cards-row'>
              <div className='card feature-3'>2&nbsp;крепких проекта в&nbsp;портфолио: сайт и&nbsp;мобильное приложение</div>
            </div>

            <div className='cards-row cols-1-2'>
              <div className='card card-1-2 feature-4'>Помощь с&nbsp;поиском работы во&nbsp;время и&nbsp;после учёбы</div>
              <div className='card card-2-1 feature-5'>Инструкции для работы пока не&nbsp;хватает опыта</div>
            </div>

            <div className='cards-row'> 
              <div className='card feature-7'>Обучение вёрстке компонентов и&nbsp;стилей</div>
              <div className='card feature-6'>Мастер-классы каждую неделю</div>
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
            title='Практика с&nbsp;преподавателем, теория — в&nbsp;удобное время'
            text1='В дистанционных курсах время с&nbsp;преподавателем уходит на практику, а&nbsp;теорию вы изучаете дома. У вас будут учебники по дизайну Бюро Горбунова, а&nbsp;два раза в&nbsp;неделю вы будете работать с&nbsp;преподавателем на практических занятиях.'
            text2='Студенты работают в&nbsp;одном файле, поэтому могут смотреть на работу других и&nbsp;комментировать. Преподаватель даёт фидбек, поэтому студенты избегают базовых ошибок при обучении.'
            />
            <div className='process-1'></div>
            <div className='caption'>Занятия устроены так, чтобы студенты видели экран преподавателя и&nbsp;могли работать сами.</div> 
        </Section>

        {/* мастер-классы */}
        <Section className='process-section'>
          <SectionHeader
            title='Мастер-классы'
            text1='В&nbsp;конце недели преподаватель в&nbsp;деталях разбирает определённый навык работы, отвечает на&nbsp;вопросы и&nbsp;разбирает частые ошибки.'
            />
            <div className='process-2'/>
            <div className='caption'>На мастер-классах преподаватель показывает качественные примеры и&nbsp;учит хитростям.</div> 
        </Section>

        {/* домашка */}
        <Section className='process-section'>
          <SectionHeader
            title='Домашние задания'
            text1='Студенты получают домашние задания на неделю, специально под тему занятий и мастер-класса. Срок сдачи — в&nbsp;пятницу в&nbsp;23:59. Если студент не сдаст работу в&nbsp;срок 2&nbsp;раза, то он&nbsp;лишается проверки домашних заданий. Кроме практических занятий и обсуждения в&nbsp;чатах, в четверг можно задать вопросы лично преподавателю.'
            text2='Задания по дизайну проверит личный наставник. Он укажет на ошибки, поможет понять сложные моменты и даст советы по дальнейшей подготовке. Все наставники школы — опытные практики.'
            />
            <div className='process-3'/>
            <div className='caption'>Все задания связаны друг с&nbsp;другом и&nbsp;погружают вас в&nbsp;контекст работы в&nbsp;компании и&nbsp;на фрилансе.</div> 
        </Section>

        {/* комьюнити 
        <Section className='process-section'>
          <SectionHeader
            title='Комьюнити'
            text1='Студенты занимаются в командах по 20–30 человек, чтобы им было нескучно и интересно. 
            Вместе они обсуждают сложные вопросы, поддерживают друг друга, участвуют в предметных викторинах и марафонах, а некоторые даже устраиваются на одну работу.'
            />
            <div className='img'/>
            <div className='caption'>Студенты выполняют задания одновременно в общем файле.</div> 
        </Section>
        */}

        {/* книги */}
        <Section className='process-section'>
          <SectionHeader
            title='Книги'
            text1='Дома студенты работают с&nbsp;интерактивными книгами по&nbsp;изучаемой теме. В&nbsp;них есть объяснения по&nbsp;каждой теме, примеры и&nbsp;тесты в&nbsp;конце каждой главы.'
            text2='Кроме того, преподаватели готовят авторские методички по самым важным и&nbsp;сложным темам работы.'
            />
            <div className='process-4'/>
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
        
        <Section className='add-top'>
          <SectionHeader
            eyebrow='Расписание'
            title='Ценность Школы Кадола в&nbsp;практике и&nbsp;обратной связи, а&nbsp;не&nbsp;теории и&nbsp;общей образованности'
             text1='Работать и&nbsp;учиться тяжело, поэтому студенты посещают только практические занятия. По вторникам вы можете поработать с&nbsp;остальными студентами в&nbsp;общей комнате.'
            />
            <div className='schedule-img'/>
            <div className='caption'>Все занятия записываются, поэтому ничего страшного, если пропустить одно или несколько.</div>
        </Section>

        <Section>
          <SectionHeader
            eyebrow='Программа'
            title='От простого к сложному'
            />
          <div className='curruculum-rows'>
            <div className='curriculum-row'>
              <CurriculumWeek
                week='1 неделя'
                title='Основы'
                text='В&nbsp;чём заключается работа дизайнера, отличия между фрилансом и&nbsp;работой в&nbsp;компании, азы работы в Фигме.'
                task='Задание. Виджет'
              />
              <CurriculumWeek
                week='2 неделя'
                title='Понимание задачи'
                text='Сбор информации о&nbsp;пользователях, задачи пользователей, сценарии, обратная связь, жизненный цикл пользователя.'
                task='Задание. Экран'
              />
              <CurriculumWeek
                week='3 неделя'
                title='Поиск решения'
                text='Исследование конкурентов. Генерация идейи выбор лучших. Критерии оценки. Прототипирование.'
                task='Задание. Серия экранов'
              />
            </div>
            <div className='curriculum-row'>
              <CurriculumWeek
                week='4 неделя'
                title='Проверка решения'
                text='Сбор обратной связи. Столкновение с&nbsp;реальностью. Тестирование на&nbsp;пользователях. Визуальное решение.'
                task='Задание. Библиотека стилей'
              />
              <CurriculumWeek
                week='5 неделя'
                title='Передача в разработку'
                text='Знакомство с&nbsp;кодом. Возможности и&nbsp;ограничения платформ. Стоимость разработки. Правила передачи макетов в&nbsp;разработку.'
                task='Задание. Публикация проекта'
              />
              <CurriculumWeek
                week='2 недели'
                title='Перерыв'
                text='Время передохнуть, подтянуть хвосты, полирнуть проект и&nbsp;позаниматься своими делами.'
                weekStyle='week-rest'
              />
            </div>
            <div className='curriculum-row'>
              <CurriculumWeek
                week='6 неделя'
                title='Карьера'
                text='Поиск работы, подготовка портфолио, оформление профиля в&nbsp;соцсетях, примеры выполнения тестовых заданий.'
                task='Задание. Портфолио'
              />
              <CurriculumWeek
                week='7 неделя'
                title='Мобильный дизайн'
                text='Особенности мобильных платформ. Дизайн для iOS, iPadOS и&nbsp;Android. Фирменные библиотеки компонентов.'
                task='Задание. Мобильное приложение'
              />
              <CurriculumWeek
                week='8 неделя'
                title='Веб-дизайн'
                text='Большие экраны. Адаптивная вёрстка. Принцип Mobile first. Аналитика. Дашборды и&nbsp;таблицы.'
                task='Задание. Веб приложение'
              />
            </div>
            <div className='curriculum-row'>
              <CurriculumWeek
                week='9 неделя'
                title='Запуск'
                text='Вёрстка проекта в HTML, публикация в&nbsp;интернете'
                task='Задание. Публикация проекта'
                weekStyle='week-launch'
              />
              <CurriculumWeek
                week='10 неделя'
                title='Устранение пробелов'
                text='Публикация проекта, обновление портфолио'
                task='Задание. Портфолио'
              />
              <CurriculumWeek
                week='Навсегда'
                title='Помощь и фидбек'
                text='Доступ к&nbsp;материалам, мастер-классам и чатам с&nbsp;фидбеком'
                weekStyle='week-rest'
              />
            </div>

          </div>
        </Section>

        <Section>
          <SectionHeader
            eyebrow='Результат'
            title='Продвинутое владение Фигмой и портфолио для работы'
            text1='Про­грамма курса наце­лена на то, чтобы студенты смогли работать самостоятельно. Поэтому все упраж­не­ния, зада­ния и&nbsp;темы ориентированы больше на технические скиллы, а&nbsp;не&nbsp;на&nbsp;тео­рию и&nbsp;общую дизайнерскую обра­зо­ван­ность. Смотрите, какие работы создают наши уче­ники в&nbsp;конце курса:'
            />
            <div className='cards-grid'>
              <div className='cards-row'>
                <div className='card card-1-2'></div>
                <div className='card card-2-1'></div>
              </div>
              <div className='cards-row'>
                <div className='card'></div>
                <div className='card'></div>
              </div>
              <div className='cards-row'>
                <div className='card'></div>
              </div>
              <div className='cards-row'>
                <div className='card card-1-2'></div>
                <div className='card card-2-1'></div>
              </div>
            </div>
        </Section>

        <Section>
          <SectionHeader
            title='Сертификаты'
            text1='Все ученики получают сертификаты в&nbsp;конце обучения:'
            />
          <div className='certificate-row'>
            <div className='img certificate certificate-shkolakadola'></div>
            <div className='img certificate certificate-ibm'></div>
          </div>
        </Section>

        <Section>
          <SectionHeader
            eyebrow='Преподаватели'
            title='Опытные дизайнеры из Беларуси'
            text1='Нам важно, чтобы преподаватели были в&nbsp;схожих со студентами условиях, и&nbsp;знали специфику поиска работы для белорусских дизайнеров в&nbsp;локальных и&nbsp;международных компаниях.'
            />

            <div className='stack tutor-block'>
              <div className='cards-grid'>

                <div className='cards-row cards-row-tutor'>
                  <div className='card card-2-1'></div>
                  <div className='card card-tutor card-1-2'>
                    <div className='img avatar avatar-tutor avatar-kadol'></div>
                    <h4>Елисей Кадол</h4>
                    <p>Старший дизайнер в Admirals, Эстония</p>
                    <p>Профессионально работаю дизайнером с&nbsp;2014 года. Работаю удалённо с&nbsp;2020. Расскажу вам быстро идти по карьере, чтобы жить так, как вам хочется.</p>
                    <div className='row'>
                      <a href='https://behance.net/yeliseikadol'>Behance</a>
                      <a href='https://dribbble.com/yeliseikadol'>Dribbble</a>
                      <a href='https://linkedin.com/in/yeliseikadol'>LinkedIn</a>
                      <a href='https://instagram.com/yeliseikadol'>Instagram</a>
                    </div>
                  </div> 
                </div>

                <div className='cards-row'>
                  <div className='card'></div>
                  <div className='card'></div>
                </div>  
              </div> 
            </div>
            <div className='stack tutor-card'>
              <div className='cards-grid'>
                <div className='cards-row cards-row-tutor'>
                  <div className='card card-2-1'></div>
                  <div className='card card-tutor card-1-2'>
                    <div className='img avatar avatar-tutor avatar-vorobey'></div>
                    <h4>Оксана Воробьёва</h4>
                    <p>Синьор UX/UI дизайнер в Lumos, Беларусь. Автор курса "Путь дизайнера".</p>
                    <p>Работаю дизайнером с 2018 года. Кроме большого опыта работы, я&nbsp;преподавала дизайн во многих школах Минска и&nbsp;выпустила собственный курс по дизайн-карьере.</p>
                    <div className='row'>
                      <a href='https://www.behance.net/oksana_vorobey'>Behance</a>
                      <a href='https://www.linkedin.com/in/oksana-vorobyeva-81a379203'>LinkedIn</a>
                      <a href='https://instagram.com/oksana_vorobey'>Instagram</a>
                    </div>
                  </div> 
                </div>
                <div className='cards-row'>
                  <div className='card'></div>
                  <div className='card'></div>
                </div>  
              </div> 
            </div>

        </Section>

        <Section className='add-bottom'>
          <SectionHeader
            eyebrow='Нужен только компьютер или ноутбук'
            text1='Для выпол­не­ния зада­ний нужен ком­пью­тер с&nbsp;нормальным интер­не­том. Все программы включены в&nbsp;стоимость курса и&nbsp;работают в&nbsp;браузере, поэтому вам не надо покупать макбук или айфон. Нач­ните работать на том обо­ру­до­ва­нии, кото­рое у&nbsp;вас уже есть.'
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
                  <div className='group-card-dates caption'>Сен 19 — Дек 9</div>
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
                  <div className='group-card-dates caption'>Ноя 7 — Янв 26</div>
                  <div className='group-card-time caption'>Пн, Ср 19:00—20:45 Минск</div>
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
                  <div className='group-card-dates caption'>Ноя 7 — Янв 26</div>
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

        

        {/*<Section>
            <SectionHeader
              eyebrow='Вопросы и ответы'
              title='Популярные вопросы'
              />
          </Section>*/}
        <Footer/>
        
      </main>
    </div>
  );
}

export default App;