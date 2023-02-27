import Image from 'next/image'
import React from 'react'
import Skill from './Skill'

const Skills = ({skills}) => {
    return (
        <section id="skills" className="w-full h-screen py-16 px-4 md:px-6 lg:px-8 snap-center snap-always">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="uppercase text-xl tracking-widest text-colorPrimary">Skills</p>
                <h2 className="py-4">Technology Proficiency</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {skills.map((item, index) => (
                        <Skill key={index} skill={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
