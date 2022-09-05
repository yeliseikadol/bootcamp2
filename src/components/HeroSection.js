import React from 'react'
import Button from './Button'
import Section from './Section'
import SectionHeader from './SectionHeader'
import Tag from './Tag'


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

                        <div className='title-section-card-form row'>
                            <div className='title-section-card-form-text stack'>
                                <SectionHeader
                                    title='Веб-дизайнер, UX/UI-дизайнер&nbsp;с&nbsp;нуля'
                                />
                                <div className="tag-rows-stack">
                                    <div className='tag-row'>
                                        <Tag>Онлайн</Tag>
                                        <Tag>10&nbsp;недель</Tag>
                                        <Tag>Сертификат IBM</Tag>
                                    </div>
                                    <div className='tag-row'>
                                        <Tag>Сообщество</Tag>
                                        <Tag>Помощь в&nbsp;поиске работы</Tag>
                                    </div>
                                </div>
                            </div>
                            <div className='stack button-bar'>
                                <button onClick={onClick}>Поступить</button>
                                <div className='stack'>
                                    <h4>1560&nbsp;BYN</h4>
                                    <div className="text--small">или 520&nbsp;BYN в&nbsp;месяц</div>
                                </div>
                            </div>
                        </div>
                </div>
            </Section>
    )
}
