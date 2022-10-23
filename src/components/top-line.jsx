import React from 'react'
import { Link } from "react-scroll";

export default function TopLine() {
    return (
        <div className='top-line'>
            <Link
                className='top-line-link'
              to='EnrollSection' 
              duration={500}
              smooth='true'
              >
              −30% при записи до 30&nbsp;октября →
            </Link>
        </div>
    )
}


