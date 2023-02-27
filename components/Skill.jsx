import Image from 'next/image'
import React from 'react'

const Skill = ({ skill }) => {
    return (
        <div className="p-6 shadow-lg shadow-colorShadow rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto relative w-16 aspect-square">
                    <Image src={skill.image_url} layout="fill" alt="kotlin" />
                </div>
                <h3 className="flex flex-col items-center justify-center">{skill.skill}</h3>
            </div>
        </div>
    )
}

export default Skill
