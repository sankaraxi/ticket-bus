import React from 'react'
import { Link } from 'react-router-dom'

import { FaXTwitter, FaLinkedin, FaMedium, FaInstagram, FaRedditAlien   } from "react-icons/fa6";
import LOGO2 from '../assets/LOGO2.png'


const Footer = () => {
  return (
    <div className='bg-black text-white sm:px-16 px-8 pt-10 pb-3'>
        <div className='flex justify-center'>
            <Link href="/">
                <img className='w-[250px]' src={LOGO2} alt='logo' />
            </Link>
        </div>

        <div className=" gap-3 flex flex-col text-white">

            <div className='flex gap-3 justify-center sm:mt-5 text-2xl'>
                    <Link to='https://x.com/sankar_axi' target="_blank">
                        <span><FaXTwitter /></span>
                    </Link>
                    <Link to='https://www.linkedin.com/in/sankargnanasekar/' target="_blank" >
                        <span><FaLinkedin /></span>
                    </Link>
                    <Link to='' target="_blank" >
                        <span><FaMedium /></span>
                    </Link>
                    <Link to='https://instagram.com/sankar_axi' target="_blank" >
                        <span><FaInstagram /></span>
                    </Link>
                    <Link to='' target="_blank" >
                        <span><FaRedditAlien  /></span>
                    </Link>
                </div>
        </div>

        <div className='flex mt-3 items-center justify-center'>
            <p className='text-center text-white text-sm sm:text-lg' >Developed by Sankar Gnanasekar |  </p>
            <p className='text-center pl-1 text-white text-sm sm:text-lg' > © {new Date().getFullYear()} Ticket Bus. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer