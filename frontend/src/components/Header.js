import React, { useEffect } from 'react'
import LOGO from '../assets/LOGO.png'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const Header = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
  return (
    <div className='w-full z-30'>
        <div className='z-50 px-4 xl:px-10 bg-white flex items-center justify-between bg-opacity-85 shadow-md'>
            <Link to='/'>
                <img 
                    src={LOGO}
                    className='w-g0 xl:w-64'
                    alt='logo'
                />
            </Link>
            <div className='flex items-center gap-2'>
                <div className='hidden xl:flex'>
                    <Nav />
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Header