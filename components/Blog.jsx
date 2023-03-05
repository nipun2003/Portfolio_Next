import React from "react";
import { useNextSanityImage } from "next-sanity-image";
import sanityClient from "@sanity/client";
import Image from "next/image";

const configuredSanityClient = sanityClient({
  projectId: "ztwhfnur",
  dataset: "blog",
  useCdn: false,
});

const Blog = ({ blog }) => {
  const imageProps = useNextSanityImage(configuredSanityClient, blog.poster);
  return (
    <div className="w-full h-auto shadow-lg shadow-colorShadow rounded-xl hover:scale-105 ease-in duration-300">
      <Image
        {...imageProps}
        style={{ width: "100%", aspectRatio: "16/9" }}
        className="rounded-t-xl"
        sizes="(max-width: 800px) 100vw, 800px"
        alt="project.title"
      />
      <div className="flex justify-between items-center px-4 py-6 space-x-4">
        <div className="flex flex-col space-y-4 justify-start items-start">
          <h2 className="text-colorPrimary uppercase tracking-wider">
            {blog.title}
          </h2>
          <p className="text-colorGrayOnBackground">{blog.metadesc}</p>
        </div>
        <a className="btn-round-outline whitespace-nowrap">Read More</a>
      </div>
    </div>
  );
};

export default Blog;
