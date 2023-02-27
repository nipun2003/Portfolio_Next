import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = ({ profile }) => {
    return (
        <div className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-colorGrayOnBackground">Let&apos;s build something together</p>
                    <h1 className="tracking-wide py-4 text-colorGrayOnBackground">Hi, I&apos;m <span className="text-colorPrimary">{profile.name}</span></h1>
                    <h1 className="tracking-wide py-2 text-colorGrayOnBackground">{profile.main.heading}</h1>
                    <p className="text-colorGrayOnBackground max-w-[70%] m-auto">{profile.main.sub_heading}</p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto my-6">
                        <div className="rounded-full shadow-lg shadow-colorShadow p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaLinkedinIn />
                        </div>
                        <div className="rounded-full shadow-lg shadow-colorShadow p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaGithub />
                        </div>
                        <div className="rounded-full shadow-lg shadow-colorShadow p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <AiOutlineMail />
                        </div>
                        <div className="rounded-full shadow-lg shadow-colorShadow p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <BsFillPersonLinesFill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
