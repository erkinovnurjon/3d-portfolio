/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const Hero = () => {
  const [title] = useTypewriter({
    words: ["Software Engineer ", "Frontend Developer"],
    // @ts-ignore
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 20,
  });
  return (
    <div className="flex my-32 container  gap-60 items-center">
      <div>
        <div className=" dark:bg-secondary/25 flex justify-center  ">
          <Image
            src={"/bg.png"}
            className="py-4 bg-slate-200 dark:bg-secondary/25    pl-8 rounded-3xl pr-16"
            alt="bg"
            width={450}
            height={450}
          />
        </div>
      </div>
      <div>
        <div>
          <span className=" font-semibold text-xl">
            Hello I'm Abdurahmon
            <h1 className="text-5xl">Designer ,Modelyer</h1>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
