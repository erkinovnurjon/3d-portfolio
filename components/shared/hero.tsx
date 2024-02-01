/* eslint-disable react/no-unescaped-entities */

"use client";

import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Button } from "../ui/button";

const Hero = () => {
  const [title] = useTypewriter({
    words: ["Interior Designer ", "3d Modeler", "Architector"],
    // @ts-ignore
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 20,
  });
  return (
    <div className="flex flex-col md:flex-row md:my-32 my-24 justify-center md:px-32 px-4   md:justify-between  ">
      <div className="md:w-1/2 w-full px-0 md:py-8">
        <div className="flex flex-col w-full items-start justify-center">
          <div className="flex flex-col justify-center">
            <span className=" font-semibold md:text-start text-center text-xl py-0 md:py-3">
              Hello I'm Abdurahmon
            </span>
            <h1 className="text-5xl md:text-start text-center font-bold py-1 md:py-2">
              {title} <Cursor />
            </h1>
            <p className=" md:text-[18px] md:text-start text-center text-sm leading-6 pt-2 md:pt-10 w-full md:w-2/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              autem nam, necessitatibus unde alias at nihil cupiditate amet
              quasi vel deleniti magni reprehenderit, cumque animi voluptas,
              aliquid aperiam consequuntur optio!
            </p>
          </div>
          <div className="flex justify-start md:justify-center w-full md:w-56  ">
            <Button className=" w-full my-4">Download Resume</Button>
          </div>
        </div>
      </div>
      <div className=" dark:bg-secondary/25 flex justify-center rounded-3xl  ">
        <Image
          src={"/bg.png"}
          className="py-4 bg-slate-200 dark:bg-secondary/25    md:pl-8 rounded-3xl md:pr-16"
          alt="bg"
          width={450}
          height={450}
        />
      </div>
    </div>
  );
};

export default Hero;
