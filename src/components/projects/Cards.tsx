import React from "react";

interface CardProps {
    number: string;
    title: string;
    description: string;
    lang1: string;
    lang2: string;
    lang3: string;
}

function Cards({ number, title, description, lang1, lang2, lang3 }: CardProps) {
    return (
        <div className='flex items-center justify-center w-projectCardWidth h-projectCardHeight bg-text-whitecream rounded-projectCardRadius'>
            <div className='relative w-projectCardWidthInside h-projectCardHeightInside bg-background-black rounded-projectCardRadius'>
                <div className='absolute w-75 h-50 top-0 right-0 bg-text-whitecream rounded-bl-projectCardRadiusInside flex justify-center items-center'>
                    <div className='text-black font-medium text-2xl'>
                        <p>{number}</p>
                    </div>
                </div>
                <div className='text-white inline-flex ml-5 mt-4 font-bold text-2xl'>{title}</div>
                <div className='text-white ml-5 mr-8 mt-6 inline-flex font-medium text-lg'>{description}</div>
                <div className='absolute inline-flex w-80 mr-5 justify-between bottom-28 left-5 text-white'>
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
                <button className='absolute bottom-10 left-5 border w-110 h-40 justify-center rounded-projectCardRadiusInside'>
                    more
                </button>
            </div>
        </div>
    );
}

export default Cards;