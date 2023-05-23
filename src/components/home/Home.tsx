import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import NavBar from '../sidebar/Sidebar';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        //This is the text for top left
        <div className='h-screensize flex flex-col justify-center'>
            <div >
                <div className="container-md relative mx-auto m-3 space-y-3">
                    <p className='text-white font-light text-xs align-top text-opacity-20 ml-5'>&lt;html mode="Dark"&gt;</p>
                    <p className='text-white font-light text-xs align-top text-opacity-20 ml-14'>&lt;body class="Welcome Page"&gt;</p>
                </div>
                <div className='container-md relative mx-auto m3 space-y-0 mt-10'>
                    <p className='text-white font-light text-xs align-top text-opacity-20 ml-28'>&lt;navbar&gt;</p>

                    <div className='flex'>
                        <Link to="/">
                            <p className='text-white text-4.5xl align-top font-black ml-40'>KP
                                <span className='inline-block w-3 h-3 bg-white rounded-full ml-1'></span>
                            </p>
                        </Link>
                        <div className='flex-grow flex justify-end mr-40 '>
                            <NavBar />
                        </div>
                    </div>
                    <p className='text-white font-light text-xs align-top text-opacity-20 ml-28'>&lt;/navbar&gt;</p>
                </div>
                <div className='container-md relative mx-auto m3 space-y-0 mt-20'>
                    <p className='text-white font-light text-xs align-top text-opacity-20 ml-40'>&lt;h1&gt;</p>
                    <div className="justify-center flex">
                        <div className="font-bold text-4xl my-10 text-white w-title">
                            <TypeAnimation
                                sequence={[
                                    'Hi, my name is Kush, and I am a broke',
                                    30,
                                    'Hi, my name is Kush, and I am a College Student',
                                    1000,
                                    'Hi, my name is Kush, and I am also a Web Developer',
                                    1000,
                                ]}
                                speed={15}
                                repeat={0}
                                cursor={false}
                            />
                        </div>
                    </div>
                    <p className='text-white font-light text-xs align-top text-opacity-20 ml-40'>&lt;/h1&gt;</p>
                </div>
                <div className='container-md relative mx-auto m3 space-y-0 mt-16'>
                    <p className='text-white font-light text-xs align-top text-opacity-20 ml-52'>&lt;p&gt;</p>
                    <div className='flex justify-center'>
                        <div className='w-title text-left text-2xl font-semibold'>
                            <p>I like building Websites and Solving Problems.</p>
                            <br></br>
                            <p>View my Projects, Resume, Contact Me, or send me an email at KuPatel2021@gmail.com.</p>
                        </div>
                    </div>
                    <p className='text-white font-light text-xs align-top text-opacity-20 ml-52'>&lt;/p&gt;</p>
                </div>
                <div className='container-md relative mx-auto m3 space-y-0 mt-16'>
                    <p className='text-white font-light text-xs align-top text-opacity-20 ml-52'>&lt;button&gt;</p>
                    <br></br>
                    <div className='flex justify-center'>
                        <div className='w-title text-left text-2xl font-semibold'>
                            <p>See more about me /Arrow/</p>
                        </div>
                    </div>
                    <br></br>
                    <p className='text-white font-light text-xs align-top text-opacity-20 ml-52'>&lt;/button&gt;</p>
                </div>
                <div className="container-md relative mx-auto m-3 mt-10 space-y-3">
                    <p className='text-white font-light text-xs align-top text-opacity-20 ml-14'>&lt;body class="Welcome Page"&gt;</p>
                    <p className='text-white font-light text-xs align-top text-opacity-20 ml-5'>&lt;html mode="Dark"&gt;</p>

                </div>
            </div>
        </div>
    )
}

export default Home;

{/* <TypeAnimation
                    className='text-white text-center'
                    sequence={[
                        // Same String at the start will only be typed once, initially
                        'We produce food for Mice',
                        1000,
                        'We produce food for Hamsters',
                        1000,
                        'We produce food for Guinea Pigs',
                        1000,
                        'We produce food for Chinchillas',
                        1000,
                    ]}
                    speed={20}
                    repeat={Infinity}
                /> */}