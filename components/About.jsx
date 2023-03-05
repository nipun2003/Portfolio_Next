import Image from 'next/image'
import React from 'react'

const About = ({about}) => {
    return (
        <div className="w-full p-2 flex items-center px-4 py-20">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-colorPrimary">About</p>
                    <h2 className="py-4">Who I Am</h2>
                    <p className="py-2 text-colorGrayOnBackground">{about.about_1}</p>
                    <p className="py-2 text-colorGrayOnBackground"> {about.about_2}</p>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-colorShadow rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <div className="w-full aspect-square rounded-xl relative">
                        <Image src="/assets/profile.jpg" layout="fill" alt="profile" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
