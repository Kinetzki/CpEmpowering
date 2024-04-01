import React from 'react'

function ButtonComp2({icon, text, otherStyle}) {
  return (
    <div className={'min-w-[70px] cursor-pointer bg-[var(--secondary-color)] flex items-center ' + otherStyle}>
        {icon && (
            <img src={icon} alt="" />
        )}
        <h1 className='w-full text-center'>{text}</h1>
    </div>
  )
}

export default ButtonComp2