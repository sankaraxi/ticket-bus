import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {



  return (
    <div className='flex gap-4 text-lg'>
        <Link to='/'>
            <h1 className='cursor-pointer text-black hover:text-gray-400 font-semibold'>Home</h1>
        </Link>
        <Link to='/buses'>
            <h1 className='cursor-pointer text-black hover:text-gray-400 font-semibold'>Tickets</h1>
        </Link>
        <Link to='/about'>
            <h1 className='cursor-pointer text-black hover:text-gray-400 font-semibold'>About</h1>
        </Link>

        
    </div>
  )
}

export default Nav