import React from "react";

const Acheivements = () => {
    return (
      <section id="achievements" className="flex flex-col justify-center items-center w-screen my-8 ">
      <h2 className="text-[28px] md:text-[42px] font-bold">Our Achivements</h2>
      <p className="text-[16px] md:text-[18px] text-center w-[80%] md:w-[75%] mt-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
      </p>
      <div className="w-full flex-wrap flex flex-row justify-evenly items-center gap-4 mt-10 select-none">
        <div className="hover:scale-125 hover:drop-shadow-xl duration-200">
          <h2 className="text-[28px] font-bold text-center">+200 </h2>
          <p className="text-[18px] text-center">Courses</p>
        </div>
        <div className="hover:scale-125 hover:drop-shadow-xl duration-200">
          <h2 className="text-[28px] font-bold text-center">50K </h2>
          <p className="text-[18px] text-center">Mentors</p>
        </div>
        <div className="hover:scale-125 hover:drop-shadow-xl duration-200">
          <h2 className="text-[28px] font-bold text-center">370K </h2>
          <p className="text-[18px] text-center">Students</p>
        </div>
        <div className="hover:scale-125 hover:drop-shadow-xl duration-200">
          <h2 className="text-[28px] font-bold text-center">99.9% </h2>
          <p className="text-[18px] text-center">Satisfaction Rate</p>
        </div>
      </div>
    </section>
    );
};

export default Acheivements;