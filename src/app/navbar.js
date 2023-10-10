'use client'
import React from 'react';
import email from '../../public/email.svg'
import github from '../../public/github.png'
import instagram from '../../public/instagram.png'
import linkedin from '../../public/linkedin.png'
import Image from "next/image";

const Navbar = () => {
    const openGmail = () => {
        const emailAddress = 'minthantmg169@mail.com';
        const mailtoLink = `mailto:${emailAddress}`;

        window.open(mailtoLink);
    };
    return (
        <>
            <div className="border-b-2 flex justify-between items-center px-2 py-2">
                <div className="flex justify-center items-center">
                    <div className="rounded-full border" onClick={openGmail}>
                    <Image src={email} alt='' className="w-4 h-4 m-4"/>
                    </div>
                    <h5 className="px-4 text-sm">Get in touch</h5>
                </div>
                <div className="flex justify-center items-center">
                    <a className="cursor-pointer px-2" href="https://www.linkedin.com/in/min-thant-2620411b3/">
                        <Image src={linkedin} alt='' className="w-6 h-6 sm:hidden"/>
                        <div className="hidden sm:block text-sm">Linkedin</div>
                    </a>
                    <div className="ml-2 mr-2 hidden sm:block">
                        /
                    </div>
                    <a className="cursor-pointer px-2" href="https://www.instagram.com/m1n_thant/?igshid=YTQwZjQ0NmI0OA%3D%3D">
                        <Image src={instagram} alt='' className="w-6 h-6 sm:hidden"/>
                        <div className="hidden sm:block text-sm">Instagram</div>
                    </a>
                    <div className="ml-2 mr-2 hidden sm:block">
                        /
                    </div>
                    <a className="cursor-pointer px-2" href="https://github.com/Minthantmg">
                        <Image src={github} alt='' className="w-6 h-6 sm:hidden"/>
                        <div className="hidden sm:block text-sm">Github</div>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;