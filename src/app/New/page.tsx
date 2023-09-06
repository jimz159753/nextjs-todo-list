import React from 'react'

function New() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <form className='bg-slade-800 flex flex-col w-96 space-y-2'>
        <input type="text" placeholder='Title' className='h-10 pl-2 text-black border border-gray-400 rounded' />
        <textarea placeholder='Description' className='h-36 pl-2 text-black border border-gray-400 rounded' />
        <button className='h-10 w-3/6 bg-green-500 hover:bg-red-400 rounded'>Create</button>
      </form>
    </div>
  )
}

export default New