import React from 'react';
import NavBar from '../sidebar/Sidebar';
import { Link } from 'react-router-dom';

const ContactMe = () => {
    return (
        <div className="flex flex-col my-3 h-screensize">
            <div className="mx-2 space-y-4">
                <p className="text-white font-light text-xs align-top text-opacity-20 ml-5">&nbsp;</p>
                <p className="text-white font-light text-xs align-top text-opacity-20 ml-14">&nbsp;</p>

                {/* Navbar */}
                <p className='text-white font-light text-xs align-top text-opacity-20 ml-28'>&nbsp;</p>
                <div className='flex justify-center'>
                    <div className="flex w-navbarWidth items-center justify-between">
                        <Link to="/">
                            <p className="text-4.5xl font-black animate-text">
                                <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent ">Contact Me</span>

                            </p>
                        </Link>
                        <NavBar />
                    </div>
                </div>
                <div className='flex text-white justify-center'>
                    <div className='w-navbarWidth'>
                        <p className='flex mt-10 font-bold text-3xl'>
                            Email me at&nbsp;
                            <div className="hover:animate-swing">
                                <a href='mailto:KuPatel2021@gmail.com'>KuPatel2021@gmail.com.
                                </a>
                            </div>
                        </p>
                        <p className='mt-10 font-bold text-3xl'>
                            or
                        </p>
                        <div className='flex w-contactButton mt-10 justify-start'>
                            <div className="relative group mr-10 w-contactButtonWidth h-contactButtonHeight">
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
                            </div>
                            {/* <button className="bg-transparent mr-10 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white w-contactButtonWidth h-contactButtonHeight py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                Github
                            </button>
                            <button className="bg-transparent mr-10 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white w-contactButtonWidth h-contactButtonHeight py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                LinkedIn
                            </button>
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white w-contactButtonWidth h-contactButtonHeight py-2 px-4 border-4 border-blue-500 hover:border-transparent rounded">
                                Resume
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed z-0 leading-tight bottom-0 left-0 font-black opacity-7 text-10xl h-backgroundTitle text-white">
                Contact Me
            </div>
        </div>
    )
}

export default ContactMe;
