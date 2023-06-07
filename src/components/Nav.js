import React from 'react'

export default function Nav() {
  return (
    <nav className='flex items-center justify-between p-10'>

        <div>
            <h1 className='text-[50px] font-bold text-teal-500'>HODLINFO</h1>
        </div>
        <div className='flex items-center justify-between gap-x-5 text-white font-[500]'>
            <button className='px-4 py-2 bg-gray-700 rounded-xl'>INR</button>
            <button className='px-4 py-2 bg-gray-700 rounded-xl'>BTC</button>
            <button className='px-4 py-2 bg-gray-700 rounded-xl'>BUY BTC</button>
        </div>
        <div>
        <button className='px-6 py-2 bg-teal-400 rounded-xl text-white font-bold'>Contact Telegram</button>
        </div>



    </nav>
  )
}
