import React from 'react'

function ConfirmDel({text, handleClick, cancel, confirmText}) {
  return (
    <div className='fixed w-full h-full top-[4%] flex items-center justify-center z-[111] left-0'>
        <div className='bg-white text-[var(--bg-color)] py-[50px] px-[60px] flex-col gap-[30px] flex border-[1px] border-[var(--bg-color)] rounded-lg'>
            <h1 className='text-[20px] font-semibold'>{text}</h1>
            <div className='flex justify-around w-full'>
                <button className='p-2 border-[1px] border-[var(--bg-color)] rounded-lg' onClick={cancel}>Cancel</button>
                <button className='p-2 border-[1px] border-[var(--bg-color)] rounded-lg bg-[var(--secondary-color)] text-white' onClick={handleClick}>{confirmText}</button>
            </div>
        </div>
    </div>
  )
}

export default ConfirmDel