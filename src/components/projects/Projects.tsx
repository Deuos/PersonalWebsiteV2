import React from 'react';
import NavBar from '../sidebar/Sidebar';
import { Link } from 'react-router-dom';
import Cards from './Cards';
import { FiGithub } from 'react-icons/fi'

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
                    <button className='border mt-10 mb-14 w-fit rounded-xl p-2 hover:bg-gray-400'>
                        <Link className='flex items-center' target='_blank' to="https://github.com/Deuos">
                            <span className='mr-1'>Github</span> <FiGithub />
                        </Link>
                    </button>

                </div>
                <div className="flex flex-wrap p-4 space-x-6 justify-center">
                    <Cards
                        number='006'
                        title='Personal Website v2'
                        description='Kushapatel.dev, is a personal website, which I created to host my personal projects along with other items. The newly built version website utilizes Reactjs along with TailwindCSS to make gui.'
                        lang1="#TypeScript"
                        lang2="#TailwindCSS"
                        lang3="#ReactJs"
                        link='https://github.com/Deuos/Credit-Card-Statement-PDF-To-Excel'
                    />
                    <Cards
                        number='005'
                        title='CreditCard Pdf - Excel'
                        description='Converts Elan Credit Card Statements to Excel using the Node.js environment along with pdfreader and xlsx libraries. The pdfreader reads the whole statement and then compresses it down to find the date, balance, and transactions which are added to an Excel sheet.'
                        lang1="#JavaScript"
                        lang2="#Nodejs"
                        lang3=""
                        link='https://github.com/Deuos/Credit-Card-Statement-PDF-To-Excel'
                    />
                </div>
                <div className="flex flex-wrap p-4 space-x-6 justify-center">
                    {/* Card 1 */}

                    <Cards
                        number='004'
                        title='Personal Website v1'
                        description='Kushapatel.dev, is a personal website, which I created to host my personal projects along with other items. I built this using Html and pure CSS; hosting was done on GitHub Pages along with a Lets Encrypt certificate.'
                        lang1="#HTML/CSS"
                        lang2=""
                        lang3=""
                        link='https://github.com/Deuos/Deuos'
                    />
                    <Cards
                        number='003'
                        title='LMS'
                        description='This is a library management system developed in a Node.js runtime environment for both users and admins. It facilitates browsing, adding, deleting, and updating books. Our GUI consists of Bootstrap and CSS, and our system utilizes Monogdb database utilizing CURB method.'
                        lang1="#JavaScript"
                        lang2="#HTML/CSS"
                        lang3="#Bootstrap"
                        link='https://github.com/Deuos/Library-Management-System'
                    />
                </div>
                <div className="flex flex-wrap p-4 space-x-6 justify-center">
                    <Cards
                        number='002'
                        title=' LC-3-Sim-Calc'
                        description='This calculator takes in a 3-digit number and has the ability to add and subtract, and runs on an LC-3 Simulator (UPenn). This simulator takes in the keyboard input of the 2 variables and the operation and then displays the output onto the screen in a readable format.'
                        lang1="#Assembly"
                        lang2="#LC-3 Simulator"
                        lang3=""
                        link='https://github.com/Deuos/Library-Management-System'
                    />
                    <Cards
                        number='001'
                        title='Space Shooters'
                        description='SpaceShooters is a game developed in the JavaFX framework using Object Oriented Programming. Some of the key features include the ability to generate infinite bullets from the ships location, randomized asteroid drops, along with other features.'
                        lang1="#Java"
                        lang2="#JavaFx"
                        lang3="#CSS"
                        link='https://github.com/Deuos/SpaceShooters'
                    />
                </div>
            </div>
            <div className="fixed z-0 rotate-90 mx-auto -left-[23rem] bottom-[17.25rem] text-white text-10xl font-black opacity-7">
                Projects
            </div>
        </div>
    )
}

export default Projects;
