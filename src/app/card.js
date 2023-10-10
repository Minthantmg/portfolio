import React from 'react';
import Image from "next/image";
import mobile from "../../public/mobile.svg"
import web from '../../public/website.svg'

const Card = () => {
    return (
        <div>
            <div className="flex px-2 mt-16">
                <div className="border w-1/2 mr-2">
                    <Image src={mobile} alt="" className="mt-4 w-14 h-10"/>
                    <div className="text-gray-300 font-mono ml-3 mt-2 text-lg" style={{
                        background: 'linear-gradient(to right, #ff00ff, #00ff00)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                    }}>
                        Android Development
                    </div>
                    <div className="font-mono text-sm ml-3 mt-4 mb-4">
                        Transforming ideas into exceptional mobile app experiences.
                    </div>
                </div>
                <div className="border w-1/2">
                    <Image src={web} alt="" className="mt-4 w-14 h-10"/>
                    <div className="text-gray-300 font-mono ml-3 mt-2 text-lg" style={{
                        background: 'linear-gradient(to right, #ff00ff, #00ff00)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                    }}>
                        Web Development
                    </div>
                    <div className="font-mono text-sm ml-3 mt-11 sm:mt-4 mb-4">
                        Transforming ideas into exceptional web experiences.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;