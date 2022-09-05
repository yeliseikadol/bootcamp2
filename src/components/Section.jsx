import React from 'react'

export default function Section({children, className}) {

  return (
    <section className={`content-section ${className}`}>
      {children}
    </section>
  )
}