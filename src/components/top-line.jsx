import React from 'react'
import {ReactComponent as AnnounceIcon} from '../assets/icons/announce.svg'

export default function TopLine() {
    return (
        <div className='top-line'>
            <div><AnnounceIcon/>Открыта запись в группы с 21 ноября. −30% за запись до 30 октября.</div>
        </div>
    )
}
