import React from 'react';
import NavBar from '../sidebar/Sidebar';
import { Link } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs'
import { IoLogoLinkedin } from 'react-icons/io'
import { HiDocumentText } from 'react-icons/hi'
import Resume from '../../Resume/Resume.pdf';

const ContactMe = () => {
    return (
        <div className="flex flex-col my-3 h-screensize">
            <div className="mx-2 space-y-4">
                <p className="text-white font-light text-xs align-top text-opacity-20 ml-5">&nbsp;</p>
                <p className="text-white font-light text-xs align-top text-opacity-20 ml-14">&nbsp;</p>

                {/* Navbar */}
                <p className='text-white font-light text-xs align-top text-opacity-20 ml-28'>&nbsp;</p>
                <div className='flex justify-center'>
                    <div className="flex w-navbarWidth items-center justify-between max-lg:w-navbarWidthTablet max-mobile:w-navbarWidthMobile">
                        <Link to="/">
                            <p className="text-4.5xl font-black animate-text">
                                <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent ">Contact Me</span>

                            </p>
                        </Link>
                        <NavBar />
                    </div>
                </div>
                <div className='flex text-white justify-center'>
                    <div className='w-navbarWidth max-lg:w-navbarWidthTablet max-mobile:w-navbarWidthMobile'>
                        <p className='flex mt-10 font-bold text-3xl max-lg:text-2xl max-mobile:text-xl '>
                            Email me at&nbsp;
                            <div className="hover:animate-swing">
                                <a href='mailto:KuPatel2021@gmail.com'>KuPatel2021@gmail.com.
                                </a>
                            </div>
                        </p>
                        <p className='mt-10 font-bold text-3xl max-lg:text-2xl'>
                            or
                        </p>
                        <div className='flex w-contactButton mt-10 justify-start max-mobile:flex-col max-mobile:inline-flex max-mobile:w-60'>

                            <button className="flex bg-transparent text-black mr-10 w-contactButtonWidth h-contactButtonHeight items-center justify-center py-2 px-4 bg-white rounded-customButton hover:border hover:bg-gray-400">
                                <Link className="flex items-center justify-center" target="_blank" rel="noopener noreferrer" to="https://github.com/Deuos">
                                    <div className='font-black text-xl mr-2'>Github</div>
                                    <div ><BsGithub size={30} /></div>
                                </Link>
                            </button>
                            <button className="flex bg-transparent text-black mr-10 w-contactButtonWidth h-contactButtonHeight py-2 px-4 items-center justify-center bg-white rounded-customButton hover:border hover:bg-gray-400 max-mobile:mt-10">
                                <Link className="flex items-center justify-center" target="_blank" rel="noopener noreferrer" to="https://www.linkedin.com/in/kushpateldev/">
                                    <div className=' font-black text-xl mr-1'>LinkedIn</div>
                                    <div ><IoLogoLinkedin size={40} /></div>
                                </Link>

                            </button>
                            <button className="flex bg-transparent text-black mr-10 w-contactButtonWidth h-contactButtonHeight items-center justify-center py-2 px-4 bg-white rounded-customButton hover:border hover:bg-gray-400 max-mobile:mt-10">
                                <div className=' font-black text-xl'>
                                    <a href={Resume} download="Resume">
                                        Resume
                                    </a>
                                </div>
                                <div ><HiDocumentText size={30} /></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed pointer-events-none z-0 select-none leading-tight bottom-0 left-0 font-black opacity-7 text-10xl h-backgroundTitle text-white">
                Contact Me
            </div>
        </div>
    )
}

export default ContactMe;
