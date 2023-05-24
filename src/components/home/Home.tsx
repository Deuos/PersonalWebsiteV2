import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import NavBar from '../sidebar/Sidebar';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col justify-center min-h-screen">
            <div className="mx-2 space-y-4">
                <p className="text-white font-light text-xs align-top text-opacity-20 ml-5">&lt;html mode="Dark"&gt;</p>
                <p className="text-white font-light text-xs align-top text-opacity-20 ml-14">&lt;body class="Welcome Page"&gt;</p>

                {/* Navbar */}
                <p className='text-white font-light text-xs align-top text-opacity-20 ml-28'>&lt;navbar&gt;</p>
                <div className='flex justify-center'>
                    <div className="flex w-navbarWidth items-center justify-between">
                        <Link to="/">
                            <p className="text-4.5xl font-black animate-text">
                                <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent ">KP</span>
                                <span className="inline-block w-3 h-3 rounded-full ml-1 animate-background bg-gradient-to-r from-teal-500 via-purple-50 to-orange-500"></span>
                            </p>
                            {/* <p className="text-4.5xl font-black animate-text bg-gradient-to-r from-teal-500 via-purple-50 bg-clip-text text-transparent">KP
                                <span className='inline-block w-3 h-3 rounded-full ml-1 animate-background bg-gradient-to-r to-orange-500'></span>
                            </p> */}
                        </Link>
                        <NavBar />
                    </div>
                </div>
                <p className='text-white font-light text-xs align-top text-opacity-20 ml-28'>&lt;navbar&gt;</p>
                {/* Navbar */}
                {/* Animation */}
                <p className='text-white font-light text-xs align-top text-opacity-20 ml-56'>&lt;h1&gt;</p>
                <div className="flex flex-col items-center mt-20">
                    <div className="font-bold text-4xl my-0 text-white w-title">
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
                <p className='text-white font-light text-xs align-top text-opacity-20 ml-56'>&lt;/h1&gt;</p>
                <p className='text-white font-light text-xs align-top text-opacity-20 ml-72'>&lt;p&gt;</p>

                <div className='flex flex-col items-center mt-20'>
                    <div className="w-title text-left text-2xl font-semibold">
                        <p>I like building Websites and Solving Problems.</p>
                        <br></br>
                        <p>View my Projects, Resume, Contact Me, or send me an email at
                            <p className="w-fit hover:animate-swing">
                                <a href='mailto:KuPatel2021@gmail.com'>                                KuPatel2021@gmail.com.
                                </a>
                            </p>
                        </p>
                    </div>
                </div>
                <p className='text-white font-light text-xs align-top text-opacity-20 ml-72'>&lt;p&gt;</p>
                <p className="text-white font-light text-xs align-top text-opacity-20 ml-72">&lt;button&gt;</p>
                <div className='flex flex-col items-center mt-20'>
                    <br></br>
                    <div className="w-title">
                        <Link to="/AboutMe">
                            <div className='w-fit text-2xl font-semibold'>
                                <div className="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">See more about me</div>
                            </div>
                        </Link>
                    </div>
                    <br></br>
                </div>
                <p className="text-white font-light text-xs align-top text-opacity-20 ml-72">&lt;/button&gt;</p>
                <p className="text-white font-light text-xs align-top text-opacity-20 ml-14">&lt;body class="Welcome Page"&gt;</p>
                <p className="text-white font-light text-xs align-top text-opacity-20 ml-5">&lt;html mode="Dark"&gt;</p>
            </div>
        </div>
    );
};

// import React from 'react';
// import { TypeAnimation } from 'react-type-animation';
// import NavBar from '../sidebar/Sidebar';
// import { Link } from 'react-router-dom';

// const Home = () => {
//     return (
//         //This is the text for top left
//         <div className='flex flex-col justify-center'>
//             <div className=''>
//                 <div className="container-md relative mx-auto m-3 space-y-3">
//                     <p className='text-white font-light text-xs align-top text-opacity-20 ml-5'>&lt;html mode="Dark"&gt;</p>
//                     <p className='text-white font-light text-xs align-top text-opacity-20 ml-14'>&lt;body class="Welcome Page"&gt;</p>
//                 </div>
//                 <div className='container-md relative mx-auto m3 space-y-0 mt-10'>
//                     <p className='text-white font-light text-xs align-top text-opacity-20 ml-28'>&lt;navbar&gt;</p>

//                     <div className='flex'>
//                         <Link to="/">
//                             <p className='text-white text-4.5xl align-top font-black ml-40'>KP
//                                 <span className='inline-block w-3 h-3 bg-white rounded-full ml-1'></span>
//                             </p>
//                         </Link>
//                         <div className='flex-grow flex justify-end mr-40 '>
//                             <NavBar />
//                         </div>
//                     </div>
//                     <p className='text-white font-light text-xs align-top text-opacity-20 ml-28'>&lt;/navbar&gt;</p>
//                 </div>
//                 <div className='container-md relative mx-auto m3 space-y-0 mt-20'>
//                     <p className='text-white font-light text-xs align-top text-opacity-20 ml-40'>&lt;h1&gt;</p>
//                     <div className="justify-center flex">
//                         <div className="font-bold text-4xl my-10 text-white w-title">
//                             <TypeAnimation
//                                 sequence={[
//                                     'Hi, my name is Kush, and I am a broke',
//                                     30,
//                                     'Hi, my name is Kush, and I am a College Student',
//                                     1000,
//                                     'Hi, my name is Kush, and I am also a Web Developer',
//                                     1000,
//                                 ]}
//                                 speed={15}
//                                 repeat={0}
//                                 cursor={false}
//                             />
//                         </div>
//                     </div>
//                     <p className='text-white font-light text-xs align-top text-opacity-20 ml-40'>&lt;/h1&gt;</p>
//                 </div>
//                 <div className='container-md relative mx-auto m3 space-y-0 mt-16'>
//                     <p className='text-white font-light text-xs align-top text-opacity-20 ml-52'>&lt;p&gt;</p>
//                     <div className='flex justify-center'>
//                         <div className='w-title text-left text-2xl font-semibold'>
//                             <p>I like building Websites and Solving Problems.</p>
//                             <br></br>
//                             <p>View my Projects, Resume, Contact Me, or send me an email at KuPatel2021@gmail.com.</p>
//                         </div>
//                     </div>
//                     <p className='text-white font-light text-xs align-top text-opacity-20 ml-52'>&lt;/p&gt;</p>
//                 </div>
//                 <div className='container-md relative mx-auto m3 space-y-0 mt-16'>
//                     <p className='text-white font-light text-xs align-top text-opacity-20 ml-52'>&lt;button&gt;</p>
//                     <br></br>
//                     <div className='flex justify-center'>
//                         <div className='w-title text-left text-2xl font-semibold'>
//                             <p>See more about me /Arrow/</p>
//                         </div>
//                     </div>
//                     <br></br>
//                     <p className='text-white font-light text-xs align-top text-opacity-20 ml-52'>&lt;/button&gt;</p>
//                 </div>
//                 <div className="container-md relative mx-auto m-3 mt-10 space-y-3">
//                     <p className='text-white font-light text-xs align-top text-opacity-20 ml-14'>&lt;body class="Welcome Page"&gt;</p>
//                     <p className='text-white font-light text-xs align-top text-opacity-20 ml-5'>&lt;html mode="Dark"&gt;</p>

//                 </div>
//             </div>
//         </div>
//     )
// }

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