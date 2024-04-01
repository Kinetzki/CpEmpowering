import React from 'react'
import ButtonComp2 from './ButtonComp2'

function OfficialCard() {
  return (
    <div className='hover:scale-[1.03] duration-[0.3s] bg-[var(--bg-color)] w-[210px] h-[230px] mx-[6px] rounded-2xl flex flex-col px-3 py-1 items-center gap-1'>
        <h1 className='w-full border-b-[1px] border-[#ffffff]'>Captain</h1>
        <div className='w-[52px] h-[52px] bg-white rounded-full'></div>
        <h1 className='text-[13px]'>Gab Narvadez</h1>
        <h1 className='w-full border-b-[1px] border-[#ffffff] text-[11px]'>Lorem Ipsum</h1>
        <h1 className='w-full border-b-[1px] border-[#ffffff] text-[11px]'>Lorem Ipsum</h1>
        <h1 className='w-full border-b-[1px] border-[#ffffff] text-[11px]'>Lorem Ipsum</h1>
        <h1 className='w-full border-b-[1px] border-[#ffffff] text-[11px]'>Lorem Ipsum</h1>
        <div className='flex w-full justify-end gap-2 mt-[3px]'>
            <ButtonComp2 text={"Edit"} otherStyle={"px-4 py-[1px] rounded-lg"}/>
            <ButtonComp2 text={"Delete"} otherStyle={"px-4 py-[1px] rounded-lg"}/>
        </div>
    </div>
  )
}

export default OfficialCard