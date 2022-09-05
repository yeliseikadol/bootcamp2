import React from 'react'

export default function SectionHeader(props) {

const {eyebrow, title, text1, text2, children, className} = props

  return (
    <header className={`section-header ${className}`}>
        {eyebrow != null &&
            <h3>{eyebrow}</h3>
            }
        
        {title != null &&
            <h2>{title}</h2>
            }
        
        {text1 != null && 
            <p>{text1}</p>
            }
        
        {text2 != null &&
            <p>{text2}</p>
            }
        {children}
    </header>
  )
}