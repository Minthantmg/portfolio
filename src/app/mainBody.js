import React from 'react';
import dummy from '../../public/dummy.jpeg'
import Image from "next/image";
import wave from '../../public/wave.png'

const MainBody = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="mt-16">
                <Image src={dummy} alt="" width="130" height="130" className="rounded-full"/>
            </div>
            <div className="py-4 text-xs flex justify-center items-center">
                Hi,I'm Min Thant Mg<span><Image src={wave} alt="" width="18" height="18"/></span>
            </div>
            <div className="text-4xl text-center sm:text-7xl sm:mt-6" style={{
                background: 'linear-gradient(to right, #ff00ff, #00ff00)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
            }}>
                Building Mobile App,Website and Experience.
            </div>
        </div>
    );
};

export default MainBody;