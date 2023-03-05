import React from "react";
import Blog from "./Blog";

const Blogs = ({ blogs }) => {
  return (
    <div className="w-full min-h-screen h-auto py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center justify-start h-full py-6">
        <h2 className="uppercase tracking-wider text-colorPrimary">
          I also like to write
        </h2>
        <h3 className="font-normal my-6">Check out my latest posts!</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {blogs.map((item, index) => (
            <Blog key={index} blog={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
