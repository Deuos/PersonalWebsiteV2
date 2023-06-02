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
        <div className='flex relative items-center justify-center w-projectCardWidth h-projectCardHeight bg-transparent rounded-projectCardRadius'>
            <div className='relative w-projectCardWidthInside h-projectCardHeightInside bg-Light-accent rounded-projectCardRadius'>
            
                <div className='text-white inline-flex ml-5 mt-4 font-bold text-2xl'>{title}</div>
                <div className='text-white ml-5 mr-8 mt-6 inline-flex font-medium text-lg'>{description}</div>
                <div className='absolute inline-flex w-80  mr-5 justify-between bottom-28 left-5 text-white'>
                    <div className=''>
                        {lang1}
                    </div>
                    <div className=''>
                        {lang2}
                    </div>
                    <div className=''>
                        {lang3}
                    </div>
                </div>
                <button className='absolute bottom-10 left-5 border w-110 h-40 justify-center rounded-projectCardRadiusInside hover:bg-gray-400'>
                    <Link to={link} target='_blank' >more</Link>
                </button>
            </div>
            <div className='absolute w-85 h-60 top-0 right-0 bg-text-whitecream rounded-projectCardRadius flex justify-center items-center'>
                    <div className='text-Dark-accent font-medium text-2xl'>
                        <p>{number}</p>
                    </div>
                </div>
        </div>
    );
}

export default Cards;