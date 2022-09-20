import React from 'react'

export default function Button({props, children}) {

  const type = props

  const onClick = () => {
    fbq('track', 'Lead', {currency: "USD", value: 600.00});
  };

  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  )
}