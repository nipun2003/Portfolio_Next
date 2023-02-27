import Image from 'next/image'
import React from 'react'

const Skill = ({ skill }) => {
    return (
        <div className="p-10 shadow-lg shadow-colorShadow rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col space-y-6 justify-center items-center">
                <div className="m-auto relative w-20 aspect-square">
                    <Image src={skill.image_url} layout="fill" alt="kotlin" />
                </div>
                <h3 className="flex flex-col items-center justify-center">{skill.skill}</h3>
            </div>
        </div>
    )
}

export default Skill
