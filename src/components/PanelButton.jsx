import React from 'react'

function PanelButton({text, icon, handleClick}) {
  return (
    <div onClick={handleClick} className='flex gap-3 items-center cursor-pointer font-Nunito'>
        <img src={icon} alt="" className='w-[25px] h-[25px]'/>
        <h1 className='text-[18px]'>{text}</h1>
    </div>
  )
}

export default PanelButton