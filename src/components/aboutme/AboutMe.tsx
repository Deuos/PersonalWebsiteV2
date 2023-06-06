import React from 'react';
import NavBar from '../sidebar/Sidebar';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <div className="flex flex-col my-3 h-screensize">
            <div className="mx-2 space-y-4">
                <p className="text-white font-light text-xs align-top text-opacity-20 ml-5">&nbsp;</p>
                <p className="text-white font-light text-xs align-top text-opacity-20 ml-14">&nbsp;</p>

                {/* Navbar */}
                <p className='text-white font-light text-xs align-top text-opacity-20 ml-28'>&nbsp;</p>
                <div className='flex justify-center'>
                    <div className="flex w-navbarWidth items-center justify-between max-lg:w-navbarWidthTablet">
                        <Link to="/">
                            <p className="text-4.5xl font-black animate-text">
                                <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent ">About Me</span>
                            </p>
                            {/* <p className="text-4.5xl font-black animate-text bg-gradient-to-r from-teal-500 via-purple-50 bg-clip-text text-transparent">KP
                                <span className='inline-block w-3 h-3 rounded-full ml-1 animate-background bg-gradient-to-r to-orange-500'></span>
                            </p> */}
                        </Link>
                        <NavBar />
                    </div>
                </div>
                <div className='flex text-white justify-center'>
                    <div className='w-navbarWidth max-lg:w-navbarWidthTablet'>
                        <p className='flex mt-10 font-bold text-3xl max-lg:text-2xl'>
                            Work Experience.
                        </p>
                        <p className='flex mt-10 font text-xl'>
                            None, looking for a internship. Contact me at&nbsp;
                            <div className="hover:animate-swing">
                                <a href='mailto:KuPatel2021@gmail.com'>KuPatel2021@gmail.com.
                                </a>
                            </div>
                        </p>
                        <p className='flex mt-10 font-bold text-3xl max-lg:text-2xl'>
                            Education.
                        </p>
                        <div className='mt-10 flex justify-between font text-2xl max-lg:text-xl'>
                            <p>Eastern Connecticut State University</p>
                            <p>2022-2024</p>
                        </div>
                        <div className='mt-10 flex justify-between font text-2xl max-lg:text-xl'>
                            <p>Wentworth Institute of Technology</p>
                            <p>2021-2022</p>
                        </div>
                        <div className='mt-10 flex justify-between font text-2xl max-lg:text-xl'>
                            <p>Ellington High School</p>
                            <p>2017-2021</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed z-0 leading-tight bottom-0 left-0 font-black opacity-7 text-10xl h-backgroundTitle text-white">
                About Me
            </div>
        </div>
    )
}

export default AboutMe;
