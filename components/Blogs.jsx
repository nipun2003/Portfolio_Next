import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Blog from "./Blog";

const Blogs = ({ blogs }) => {
  return (
    <div className="w-full min-h-screen h-auto py-20 px-4 md:px-6 lg:px-8">
      <div className="mx-auto flex flex-col items-center justify-start h-full py-6 md:px-16">
        <h2 className="uppercase tracking-wider text-colorPrimary">
          I also like to write
        </h2>
        <h3 className="font-normal my-6">Check out my latest posts!</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {blogs.map((item, index) => (
            <Blog key={index} blog={item} />
          ))}
        </div>
        <Link href={"/blogs"}>
          <button className="my-8 px-4 py-2 md:px-8 md:py-6 text-xl flex justify-center items-center space-x-2">
            <p>Show More Blogs</p>
            <AiOutlineArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
