import React from "react";
import { Link } from 'react-router-dom';

interface CardProps {
    number: string;
    title: string;
    description: string;
    lang1: string;
    lang2: string;
    lang3: string;
    link: string;
}

function Cards({ number, title, description, lang1, lang2, lang3, link }: CardProps) {
    return (
        <div className="relative">
            <div className='flex relative items-center justify-center w-projectCardWidth h-projectCardHeight bg-transparent rounded-projectCardRadius z-10'>
                <div className='relative w-projectCardWidthInside  h-projectCardHeightInside bg-Dark rounded-projectCardRadius'>

                    <div className='text-white inline-flex ml-5 mt-4 font-bold text-2xl'>{title}</div>
                    <div className='text-white ml-5 mr-8 mt-6 inline-flex font-medium text-md text-opacity-60'>{description}</div>

                    <button className='absolute bottom-16 left-5 w-44 h-10 justify-center rounded-projectCardRadiusInside text-black text-base hover:bg-gray-400 border-ButtonBorder border-2 bg-ButtonWhite'>
                        <Link to={link} target='_blank' >View Source Code </Link>
                    </button>
                    <div className='absolute inline-flex w-80 mr-5 justify-between bottom-5 left-5  text-white'>
                        <div className='border'>
                            {lang1}
                        </div>
                        <div className='border'>
                            {lang2}
                        </div>
                        <div className='border'>
                            {lang3}
                        </div>
                    </div>
                </div>
                <div className='absolute w-95 h-70 top-0 right-0 bg-text-whitecream rounded-projectCardRadius flex justify-center items-center'>
                    <div className='text-Dark-accent font-medium text-2xl'>
                        <p>{number}</p>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 left-0 h-projectCardHeight rounded-projectCardRadius w-projectCardWidth blur-md bg-gray-700 z-0">
            </div>
            <div className="absolute top-0 right-0 w-95 h-70 blur-lg rounded-projectCardRadius bg-gray-700 z-0">

            </div>
        </div>
    );
}

export default Cards;