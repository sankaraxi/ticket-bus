import LOGO from '../assets/LOGO.png'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='fixed top-0 p-4 px-44 z-50 w-full bg-gray-200 bg-gradient-to-br from-white flex items-center justify-between shadow-md'>
            <Link to='/'>
                <img 
                    src={LOGO}
                    className='w-32 xl:w-64'
                    alt='logo'
                />
            </Link>
            <div className='flex items-center gap-2'>
                <div className='hidden xl:flex'>
                    <Nav />
                </div>
            </div>
    </div>
    
  )
}

export default Header