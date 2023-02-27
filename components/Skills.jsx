import Image from 'next/image'
import React from 'react'
import Skill from './Skill'

const Skills = ({skills}) => {
    return (
        <section id="skills" className="w-full h-screen py-20 px-4 md:px-6 lg:px-8 snap-center snap-always">
            <div className="max-w-[1240px] mx-auto flex flex-col items-center justify-center h-full p-4">
                <p className="uppercase text-xl tracking-widest text-colorGrayOnBackground">Skills</p>
                <h2 className="py-4 text-colorPrimary">Here&apos;s what I&apos;m good at </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((item, index) => (
                        <Skill key={index} skill={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
