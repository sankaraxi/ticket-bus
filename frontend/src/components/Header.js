import LOGO from '../assets/LOGO.png'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import { IoMdOptions } from "react-icons/io";
import { useState } from 'react';
import { FaRegCircleXmark } from "react-icons/fa6";




const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='fixed top-0 p-3 px-8 sm:px-44 z-50 w-full bg-gray-100 bg-gradient-to-br from-white flex items-center justify-between shadow-md'>
            <Link to='/'>
                <img 
                    src={LOGO}
                    className='w-44 sm:w-56'
                    alt='logo'
                />
            </Link>
            <div className='flex items-center gap-2'>
                <div className='hidden sm:flex'>
                    <Nav />
                </div>
                <div className='flex sm:hidden text-black text text-4xl' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <IoMdOptions />
                </div>
            </div>
            <div
        className={`fixed top-0 right-0 w-2/4 h-full bg-white z-50 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col pt-[80px] h-full space-y-1">
          <button
            className='absolute top-0 right-0 p-3 m-3 mr-5'
            onClick={() => setIsMenuOpen(false)}
          >
            <FaRegCircleXmark className='w-8 h-8 p-1 text-black ' />
          </button>
          <div className='flex items-center justify-center'>
            <Link to='/'>
                  <img 
                      src={LOGO}
                      className='w-44'
                      alt='logo'
                  />
            </Link>

          </div>
          
          <Link className={`px-4 pt-7 text-3xl font-semibold`} to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link className={`px-4 pt-7 text-3xl font-semibold`} to="/buses" onClick={() => setIsMenuOpen(false)}>Tickets</Link>
          <Link className={`px-4 pt-7 text-3xl font-semibold`} to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>   
          </div>
          
        </div>
    </div>
    
  )
}

export default Header