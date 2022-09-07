import React from 'react'
import Section from './Section'


export default function HeroSection() {
    const SrcWebm = "../titlevideo.webm"
    const SrcM4 = "../titlevideo-2.mp4"
    
    const onClick = () => {
        window.location.href = '#EnrollSection';
      };

    var EmbedVideo = function(props) {
        return (
            <div className='video-bg' dangerouslySetInnerHTML={{ __html: `
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

            <Section className='title-section'>

                <EmbedVideo/>

                <div className='title-section-card'>

                        <div className='title-section-card-form stack'>
                            <div className='title-section-card-form-text stack'>
                                <div className='title-section-tag typography-body2'>Интенсивный курс • С нуля</div>
                                <h1>Веб-дизайнер,<br/>дизайнер интерфейсов</h1>
                                <p>Поможем получить навыки для самостоятельной работы за&nbsp;10 недель.</p>
                            </div>
                            <div className='row button-bar'>
                                <button onClick={onClick}>Поступить</button>
                                <div className='stack'>
                                    <div className='typography-body'>520&nbsp;BYN в&nbsp;месяц</div>
                                    <div className='typography-body2'>Всего 1560&nbsp;BYN</div>
                                </div>
                            </div>
                        </div>
                </div>
            </Section>
    )
}
