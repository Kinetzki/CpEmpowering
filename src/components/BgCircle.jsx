import React from 'react'

function BgCircle({position}) {
  return (
    <div className={'w-[760px] h-[760px] rounded-full absolute bg-transparent border-[95px] border-[#2196f3] ' + position}></div>
  )
}

export default BgCircle