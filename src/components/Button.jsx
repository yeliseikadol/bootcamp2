import React from 'react'

export default function Button({props, children}) {

const type = props
  return (
    <button type={type}>
      {children}
    </button>
  )
}
