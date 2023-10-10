'use client';
import React, {useState, useEffect} from 'react';
import Image from "next/image";

const MyCarousel = ({interval = 2000}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        'java.svg',
        'kotlin.svg',
        'html.svg',
        'js.svg',
        'react.svg',
        'nextjs.svg',
        'tailwindcss.svg'
    ];

    const goToNextSlide = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const intervalId = setInterval(goToNextSlide, interval);

        return () => clearInterval(intervalId);
    }, [currentIndex, interval]);

    const renderImages = (count) => {
        const renderedImages = [];
        for (let i = 0; i < count; i++) {
            const imageIndex = (currentIndex + i) % images.length;
            const image = images[imageIndex];
            renderedImages.push(
                <img
                    key={imageIndex}
                    src={image}
                    alt={`Slide ${imageIndex + 1}`}
                    className="ml-2 px-2 mr-2 w-20 md:w-32 sm:mx-16"
                />
            );
        }
        return renderedImages;
    };


    return (
        <>
            <div className="mt-16 font-mono text-2xl text-center">Experience with</div>
            <div className="mt-6 mb-16">
                <div
                    className="image-carousel flex flex-row justify-center items-center ml-24 py-4 sm:w-screen sm:ml-80 mt-10"
                    style={{width: '50%', height: '10%'}}>
                    {renderImages(4)}
                </div>
            </div>
        </>
    );
};

export default MyCarousel;
