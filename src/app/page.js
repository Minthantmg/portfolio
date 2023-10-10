import React from 'react';
import Navbar from "@/app/navbar";
import MainBody from "@/app/mainBody";
import MyCarousel from "@/app/MyCarousel";
import Card from "@/app/card";
import Contact from "@/app/contact";
import Timeline from "@/app/timeline";

const Home = () => {
    return (
        <>
            <div className="flex justify-center w-full">
                <div className="max-w-6xl w-full">
                    <Navbar />
                    <MainBody />
                    <Card />
                    <Timeline />
                    <MyCarousel />
                    <Contact />
                </div>
            </div>
        </>
    );
};

export default Home;