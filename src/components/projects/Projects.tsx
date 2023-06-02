import React from 'react';
import NavBar from '../sidebar/Sidebar';
import { Link } from 'react-router-dom';
import Cards from './Cards';

const Projects = () => {
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
                                <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent ">Projects</span>

                            </p>
                            {/* <p className="text-4.5xl font-black animate-text bg-gradient-to-r from-teal-500 via-purple-50 bg-clip-text text-transparent">KP
                                <span className='inline-block w-3 h-3 rounded-full ml-1 animate-background bg-gradient-to-r to-orange-500'></span>
                            </p> */}
                        </Link>
                        <NavBar />
                    </div>
                </div>
                <div className='flex flex-col text-white items-center'>
                    <button className='border mt-10 mb-14 w-fit'>Github</button>

                </div>
                <div className="flex flex-wrap p-4 space-x-6 justify-center">
                    {/* Card 1 */}

                    <Cards
                        number='001'
                        title='Example Test'
                        description='Here are the biggest enterprises in the United States of America Here are the biggest enterprises in the United States of America'
                        lang1="#Typescript"
                        lang2="#HTML/CSS"
                        lang3="#TailwindCSS"
                        link='https://github.com/Deuos/Library-Management-System'
                    />
                    <Cards
                        number='001'
                        title='Example Test'
                        description='Here are the biggest enterprises in the United States of America Here are the biggest enterprises in the United States of America'
                        lang1="#Typescript"
                        lang2="#HTML/CSS"
                        lang3="#TailwindCSS"
                        link='https://github.com/Deuos/Library-Management-System'
                    />
                </div>
                <div className="flex flex-wrap p-4 space-x-6 justify-center">
                    <Cards
                        number='001'
                        title='Example Test'
                        description='Here are the biggest enterprises in the United States of America Here are the biggest enterprises in the United States of America'
                        lang1="#Typescript"
                        lang2="#HTML/CSS"
                        lang3="#TailwindCSS"
                        link='https://github.com/Deuos/Library-Management-System'
                    />
                    <Cards
                        number='001'
                        title='Example Test'
                        description='Here are the biggest enterprises in the United States of America Here are the biggest enterprises in the United States of America'
                        lang1="#Typescript"
                        lang2="#HTML/CSS"
                        lang3="#TailwindCSS"
                        link='https://github.com/Deuos/Library-Management-System'
                    />
                </div>
            </div>
            <div className="fixed border z-0 flex items-end h-screensize2 rotate-90 bg-backgroundTitle text-white text-10xl font-black opacity-70">
                Projects
            </div>
        </div>
    )
}

export default Projects;
