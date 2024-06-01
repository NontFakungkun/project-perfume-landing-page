import React from 'react'

export const Button = ({label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-3 border font-montserrat text-lg transform transition-transform duration-300 hover:scale-105 leading-none rounded-full
    ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` :
    'bg-coral-red text-white border-coral-red'} ${fullWidth && 'w-full'}`}>
    
        {label}

        {iconURL ? <img src={iconURL} alt="" 
        className='ml-2 rounded-full w-5 h-5'/> : ''}
    </button>
  )
}