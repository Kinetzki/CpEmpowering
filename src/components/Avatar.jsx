import React from 'react'

function Avatar() {
  return (
    <div className='bg-white w-[30px] h-[30px] rounded-full relative'>
        {/* <img src="" alt="" /> */}
        <div className='absolute w-[12px] h-[12px] rounded-full bg-green-600 bottom-[-2px] right-0'></div>
    </div>
  )
}

export default Avatar