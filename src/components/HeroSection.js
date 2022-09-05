import React from 'react'
import Button from './Button'
import Section from './Section'
import SectionHeader from './SectionHeader'
import Tag from './Tag'

export default function HeroSection() {
    const Src = "../titlevideo-2.mp4"

    var EmbedVideo = function(props) {
        return (
            <div className='video-bg' dangerouslySetInnerHTML={{ __html: `
                <video
                    loop
                    muted
                    autoplay
                    playsinline
                    width="100%">
                    <source src=${Src} type="video/mp4" />
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
                                <SectionHeader
                                    eyebrow='Интенсивный курс'
                                    title='UX/UI-дизайнер с&nbsp;нуля'
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
                            <div className='row button-bar'>
                                <Button>Поступить</Button>
                                <div className='stack'>
                                    <h4>1560&nbsp;BYN</h4>
                                    <div className="text--small">или 560&nbsp;BYN в&nbsp;месяц</div>
                                </div>
                            </div>
                        </div>
                </div>
            </Section>
    )
}
