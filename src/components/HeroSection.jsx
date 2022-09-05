import React from 'react'
import titleVideo from '../assets/video/TitleVideo.mp4'
import Button from './Button'
import Section from './Section'
import SectionHeader from './SectionHeader'
import Tag from './Tag'

export default function HeroSection() {

    const Src = "../assets/video/TitleVideo.mp4"

    var EmbedVideo = function(props) {
        return (
            <div className='video-bg' dangerouslySetInnerHTML={{ __html: `
                <video
                    loop
                    muted
                    autoplay
                    playsinline
                    class="${props.className}"
                    width="100%">
                    <source src=${Src} type="video/mp4" />
                    Sorry, your browser doesn't support videos.
                </video>
                
          ` }}></div>
        )
    }

    return (
        <div className='title--section'>
            <EmbedVideo src={titleVideo} className='video-div'/>
            <Section>
                <SectionHeader
                    eyebrow='Интенсивный курс'
                    title='Ваша карьера UX/UI-дизайнера начинается здесь'
                >
                <div className="tag-rows-stack">
                    <div className='tag-row'>
                        <Tag>Онлайн</Tag>
                        <Tag>10&nbsp;недель</Tag>
                        <Tag>Сертификат IBM</Tag>
                    </div>
                    <div className='tag-row'>
                        <Tag>Сообщество</Tag>
                        <Tag>Помощь в поиске работы</Tag>
                    </div>
                </div>
                </SectionHeader>
                    
                <div className='row button-bar'>
                    <Button>Поступить</Button>
                    <div className='stack'>
                        <h4>1560 BYN</h4>
                        <div className="text--small">или 560 BYN в месяц</div>
                    </div>
                </div>
            </Section>
      </div>
    )
}
