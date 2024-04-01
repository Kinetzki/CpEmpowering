import React from 'react'
import Banner from '../components/Banner'
import ButtonComp2 from '../components/ButtonComp2'
import ResidentItem from '../components/ResidentItem'

function ResidentProfiling() {
  return (
    <div className='w-full bg-white min-h-screen p-2 flex flex-col'>
        <Banner/>
        <div className='w-full rounded-xl bg-[var(--bg-color)] h-[55px] justify-between items-center flex px-5 py-2 translate-y-[25px]'>
            <h1>Manage Residents</h1>
            <div className='flex gap-2 items-center'>
                <ButtonComp2 text={"Import Data"} otherStyle={"py-2 px-4 rounded-full"}/>
                <ButtonComp2 text={"Export Data"} otherStyle={"py-2 px-4 rounded-full"}/>
                <ButtonComp2 text={"Delete"} otherStyle={"py-2 px-4 rounded-full"}/>
                <ButtonComp2 text={"Add"} otherStyle={"py-2 px-4 rounded-full"}/>
            </div>
        </div>
        <div className='h-full w-full rounded-xl border-[#0000008a] border-[1px] px-[20px] flex flex-col'>
            <div className='font-semibold flex text-black mt-[30px] w-full gap-3 bg-white h-[55px] items-end py-2 border-b-[1px] border-[#000000]'>
                <input type="checkbox" className=' bg-black w-[50px] translate-y-[-5px]'/>
                <h1 className='w-[200px]'>Name</h1>
                <h1 className='w-[70px]'>Age</h1>
                <h1 className='w-[220px]'>Email</h1>
                <h1 className='w-[205px]'>Address</h1>
                <h1 className='w-[120px]'>Phone</h1>
                <h1 className='w-[90px]'>Actions</h1>
            </div>
            {/* Map here */}
            <ResidentItem/>
            <ResidentItem/>
            <ResidentItem/>
            <ResidentItem/>
            <ResidentItem/>
            <ResidentItem/>
            {/* Bottom */}
            <div className='flex w-full h-[60px] items-end justify-between px-4 text-black'>
                <h1 className='text-[14px]'>Showing 6 out of 16 entries</h1>
                <div className='flex gap-4'>
                    <h1 className='underline cursor-pointer'>Previous</h1>
                    <h1 className='border-[1px] px-[4px] border-[#0000006a]'>1</h1>
                    <h1 className='underline cursor-pointer'>Next</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResidentProfiling