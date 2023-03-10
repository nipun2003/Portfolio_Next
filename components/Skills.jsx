import Image from 'next/image'
import React from 'react'
import Skill from './Skill'

const Skills = ({skills}) => {
    console.log(skills)
    return (
        <section id="skills" className="w-full py-20 px-4 md:px-6 lg:px-8">
            <div className="max-w-[1240px] mx-auto flex flex-col items-center justify-center h-full p-4">
                <p className="uppercase text-xl tracking-widest text-colorGrayOnBackground">Skills</p>
                <h2 className="py-4 text-colorPrimary">Here&apos;s what I&apos;m good at </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                    {skills.sort((a,b)=>b.rating-a.rating).map((item, index) => (
                        <Skill key={index} skill={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
