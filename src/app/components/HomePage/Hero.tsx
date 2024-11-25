import React from "react";
import Image from "next/image";
import homeImage from "@/../public/GirlBanner.png";


const Hero = () => {
    return (
    <section className="flex flex-col md:flex-row justify-around items-center gap-4 w-screen mx-auto h-[100vh] px-0 sm:px-4">
    <div className="flex flex-col gap-4 justify-center items-start h-full w-[80vw] md:w-[40vw] py-4 md:py-0">
    <h1 className="text-[32px] sm:text-[24px] lg:text-[56px] font-bold">
        Learn new skills online with ease
    </h1>
    <p className="sm:text-xl lg:text-[18px]">
        Discover a wide range of courses covering a variety of subjects,
        taught by expert instructors.
    </p>
    <div className="flex flex-row text-[14px] md:text-[16px] gap-4">
        <button className="bg-black  text-white px-4 py-3 rounded-md">
        Start Learning Now
        </button>
        <button className="bg-white text-black border border-black px-4 py-3 rounded-md">
            Explore Courses
        </button>
    </div>
    </div>
    <aside className="z-[-1]"> 
        <Image src={homeImage} alt="home-1" className="w-screen md:w-full h-full" draggable={false} quality={80} loading="lazy"/>
    </aside>
    </section>
    );
}

export default Hero;

