import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNavFunction = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className="relative w-20 h-16">
          <Image src="/assets/navLogo.png" alt="nav logo" layout="fill" />
        </div>
        <div className="">
          <ul className="hidden md:flex ">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="#hire">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Hire Me
              </li>
            </Link>
          </ul>
          <div onClick={handleNavFunction} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-[#2b2b2b]/80"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-colorBackground p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="">
            <div className="flex w-full items-center justify-between">
              <div className="relative w-16 h-12">
                <Image src="/assets/navLogo.png" alt="nav logo" layout="fill" />
              </div>
              <div
                onClick={handleNavFunction}
                className="rounded-full shadow-lg shadow-colorShadow p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-colorGrayOnBackground my-4 ">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&apos;s build something legendary together
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-20 ">
            <ul className="uppercase py-4 flex flex-col">
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/about">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/skills">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/projects">
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/hire">
                <li className="py-4 text-sm">Hire Me</li>
              </Link>
            </ul>
            <div className="">
              <p className="uppercase tracking-widest text-colorPrimary">
                Let&apos;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Link href={"https://www.linkedin.com/in/nipun2003/"}>
                  <div className="rounded-full shadow-lg shadow-colorShadow p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link href={"https://www.github.com/nipun2003"}>
                  <div className="rounded-full shadow-lg shadow-colorShadow p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </Link>
                <Link href={"mailto:nipun.work.2003@gmail.com"}>
                  <div className="rounded-full shadow-lg shadow-colorShadow p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </Link>
                <div className="rounded-full shadow-lg shadow-colorShadow p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
