import React from 'react';

const Timeline = () => {
    return (
        <div>
            <div className="font-mono text-3xl ml-4 mt-16 font-bold">
                Career TimeLine
            </div>
            <div className="flex mt-4 ml-4 relative">
                <div className="border-l-8 border-gray-300">
                    <div className="bg-blue-400 w-5 h-5 rounded-full absolute -ml-3.5 mt-4">
                    </div>
                    <div className="ml-4">
                        <div className="text-sm font-mono">
                            1 December 2014 - 1 December 2021
                        </div>
                        <div className="text-2xl font-mono">
                            University Student
                        </div>
                        <div className="font-base font-mono">
                            University of Computer Studies, Yangon
                        </div>
                        <div className="text-sm font-mono mt-4 text-left pr-4">
                            My university student life was a transformative experience. I immersed myself in challenging
                            academics, forged lasting friendships, and discovered my passions. It taught me
                            independence, time management, and critical thinking. This chapter prepared me for the
                            future and left me with cherished memories of personal and intellectual growth.
                        </div>
                    </div>
                    <div className="bg-blue-400 w-5 h-5 rounded-full absolute -ml-3.5 mt-12">
                    </div>
                    <div className="ml-4 mt-8">
                        <div className="text-sm font-mono">
                            1 May 2020 - 31 February 2021
                        </div>
                        <div className="text-2xl font-mono">
                            Android Developer
                        </div>
                        <div className="font-base font-mono">
                            Hex Creative
                        </div>
                        <div className="text-sm font-mono mt-4 text-left pr-4">
                            During my tenure as a Junior Android Developer, I contributed to the development of mobile
                            applications, implemented new features, optimized codebase for efficiency, and collaborated
                            in a team environment. I played a key role in enhancing user experiences and ensuring the
                            functionality of Android apps for our clients.
                        </div>
                    </div>
                    <div className="bg-blue-400 w-5 h-5 rounded-full absolute -ml-3.5 mt-12">
                    </div>
                    <div className="ml-4 mt-8 mb-4">
                        <div className="text-sm font-mono">
                            1 January 2022 - Present
                        </div>
                        <div className="text-2xl font-mono">
                            Programmer
                        </div>
                        <div className="font-base font-mono">
                            Global Innovative Consulting
                        </div>
                        <div className="text-sm font-mono mt-4 text-left pr-4">
                            I am a Programmer specializing in web development at a Japanese company. My role involves
                            crafting robust and responsive web solutions, collaborating with cross-functional teams, and
                            ensuring optimal website performance. I contribute to creating dynamic and user-centric web
                            experiences that align with the company's goals and meet client expectations.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
