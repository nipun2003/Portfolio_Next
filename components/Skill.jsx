import { useNextSanityImage } from "next-sanity-image";
import sanityClient from "@sanity/client";
import Image from "next/image";
import React from "react";
const configuredSanityClient = sanityClient({
  projectId: "ztwhfnur",
  dataset: "blog",
  useCdn: false,
});
const Skill = ({ skill }) => {
  const imageProps = useNextSanityImage(
    configuredSanityClient,
    skill.image_url
  );
  return (
    <div className="p-10 shadow-lg shadow-colorShadow rounded-xl hover:scale-105 ease-in duration-300">
      <div className="flex flex-col space-y-6 justify-center items-center">
        <Image
          {...imageProps}
          style={{ width: "100%", aspectRatio: "1/1" }}
          className="rounded-t-xl"
          sizes="(max-width: 800px) 100vw, 800px"
          alt="project.title"
        />
        <h3 className="flex flex-col items-center justify-center">
          {skill.skill}
        </h3>
      </div>
    </div>
  );
};

export default Skill;
