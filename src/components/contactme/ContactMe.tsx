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
                        <p className='flex mt-10 font-bold text-3xl max-lg:text-2xl max-mobile:text-xl'>
                            Email me at&nbsp;
                            <div className="hover:animate-swing">
                                <a href='mailto:KuPatel2021@gmail.com'>KuPatel2021@gmail.com.
                                </a>
                            </div>
                        </p>
                        <p className='mt-10 font-bold text-3xl max-lg:text-2xl'>
                            or
                        </p>
                        <div className='flex w-contactButton mt-10 justify-start max-mobile:flex-col max-mobile:inline-flex'>

                            <button className="flex bg-transparent text-black mr-10 w-contactButtonWidth h-contactButtonHeight items-center justify-center py-2 px-4 bg-white rounded-customButton hover:border hover:bg-gray-600">
                                <Link className="flex items-center justify-center" target="_blank" rel="noopener noreferrer" to="https://github.com/Deuos">
                                    <div className='font-black text-xl mr-2'>Github</div>
                                    <div ><BsGithub size={30} /></div>
                                </Link>
                            </button>
                            <button className="flex bg-transparent text-black mr-10 w-contactButtonWidth h-contactButtonHeight py-2 px-4 items-center justify-center bg-white rounded-customButton hover:border hover:bg-gray-600 max-mobile:mt-10">
                                <Link className="flex items-center justify-center" target="_blank" rel="noopener noreferrer" to="https://www.linkedin.com/in/kushpateldev/">
                                    <div className=' font-black text-xl mr-1'>LinkedIn</div>
                                    <div ><IoLogoLinkedin size={40} /></div>
                                </Link>

                            </button>
                            <button className="flex bg-transparent text-black mr-10 w-contactButtonWidth h-contactButtonHeight items-center justify-center py-2 px-4 bg-white rounded-customButton hover:border hover:bg-gray-600 max-mobile:mt-10">
                                <div className=' font-black text-xl'>
                                    <a href={Resume} download="Resume">
                                        Resume
                                    </a>
                                </div>
                                <div ><HiDocumentText size={30} /></div>
                            </button>

                            {/* <div className='w-contactButton animate-text h-contactButtonHeight bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="bg-clip-content w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
                                    </svg>

                                </div>
                            </div> */}
                            {/* <div className="relative group mr-10 w-contactButtonWidth h-contactButtonHeight">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-customButton blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                                <button className="relative px-6 py-3 w-contactButtonWidth h-contactButtonHeight bg-background-black text-white rounded-customButton">Github</button>
                            </div>
                            <div className="relative group mr-10 w-contactButtonWidth h-contactButtonHeight">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-customButton blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                                <button className="relative px-6 py-3 w-contactButtonWidth h-contactButtonHeight bg-background-black text-white rounded-customButton">LinkedIn</button>
                            </div>
                            <div className="relative group w-contactButtonWidth h-contactButtonHeight">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-customButton blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                                <button className="relative px-6 py-3 w-contactButtonWidth h-contactButtonHeight bg-background-black text-white rounded-customButton">Resume</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed z-0 select-none leading-tight bottom-0 left-0 font-black opacity-7 text-10xl h-backgroundTitle text-white">
                Contact Me
            </div>
        </div>
    )
}

export default ContactMe;
