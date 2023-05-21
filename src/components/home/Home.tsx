import React from 'react';
import { TypeAnimation } from 'react-type-animation';


const Home = () => {
    return (
        //This is the text for top left
        <div>
            <div className="container-md relative mx-auto m-3 space-y-3">
                <p className='text-white text-xs align-top text-opacity-20 ml-5'>&lt;html mode="Dark"&gt;</p>
                <p className='text-white text-xs align-top text-opacity-20 ml-14'>&lt;body class="Welcome Page"&gt;</p>
            </div>
            <div className='container-md relative mx-auto m3 border space-y-0 mt-10'>
                <p className='text-white text-xs align-top text-opacity-20 ml-28'>&lt;title&gt;</p>
                <p className='text-white text-4xl align-top text-opacity-100 ml-28'>KP
                    <span className='inline-block w-3 h-3 bg-white rounded-full ml-1'></span>
                </p>
                <p className='text-white text-xs align-top text-opacity-20 ml-28'>&lt;/title&gt;</p>
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