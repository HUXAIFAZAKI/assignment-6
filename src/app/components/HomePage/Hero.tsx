import React from "react";
import Image from "next/image";
import homeImage from "@/../public/GirlBanner.png";


const Hero = () => {
    return (
    <section className="flex flex-row justify-around items-center gap-4 w-full mx-auto h-[100vh] px-4">
    <div className="flex flex-col gap-4 justify-center items-start w-1/3">
    <h1 className="text-[56px] font-bold">
        Learn new skills online with ease
    </h1>
    <p className="text-[18px]">
        Discover a wide range of courses covering a variety of subjects,
        taught by expert instructors.
    </p>
    <div className="flex flex-row gap-4">
        <button className="bg-black text-white px-4 py-3 rounded-md">
        Start Learning Now
        </button>
        <button className="bg-black text-white px-4 py-3 rounded-md">
            Explore Courses
        </button>
    </div>
    </div>
    <aside className="z-[-1]"> 
        <Image src={homeImage} alt="home-1" className="w-full h-full" draggable={false} />
    </aside>
    </section>
    );
}

export default Hero;

