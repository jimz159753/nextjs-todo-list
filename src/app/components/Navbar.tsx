import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='h-20 text-lg font-semibold text-cyan-50 bg-slate-600 flex flex-col justify-center pl-10'>
      <ul className='flex space-x-10'>
        <li>
          <Link href={'/'}>
            <h1>HOME</h1>
          </Link>
        </li>
        <li>
          <Link href={'/about'}>
            <h1>About</h1>
          </Link>
        </li>
        <li>
          <Link href={'/tasks'}>
            <h1>Tasks</h1>
          </Link>
        </li>
        <li>
          <Link href={'/new'}>
            <h1>New</h1>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar