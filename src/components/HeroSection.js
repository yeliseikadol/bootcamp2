import React from 'react'
import Section from './Section'
import { Link } from "react-scroll";


export default function HeroSection() {
    const SrcWebm = "../titlevideo.webm"
    const SrcM4 = "../titlevideo-2.mp4"

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

                <div className='title-section-card'>

                        <div className='title-section-card-form stack'>
                            <div className='title-section-card-form-text stack'>
                                <div className='caption title-eyebrow'>Интенсивный курс • С нуля</div>
                                <h1>Веб-дизайн, UX/UI для удалённой работы</h1>
                            </div>
                            <div className='row button-bar'>
                                <Link 
                                    className='button'
                                    to='EnrollSection' 
                                    duration={500}
                                    smooth='true'
                                >
                                    Записаться
                                </Link>
                                <div className='stack'>
                                    <div className='typography-h4'>504&nbsp;BYN в&nbsp;месяц</div>
                                    <div className='typography-body2'>Всего 1&nbsp;512&nbsp;BYN</div>
                                </div>
                            </div>
                        </div>

                        
                </div>

                <EmbedVideo/>


            </Section>
    )
}
