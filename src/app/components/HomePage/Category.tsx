import React from "react";

const Category = () => {
    return (
      <section className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center py-8 gap-4 w-full">
        <h2 className="text-center md:text-left text-[28px] md:text-[32px] font-bold">Explore Courses By Category</h2>
        <p className="text-center md:text-left">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-[1200px] mx-auto px-4">
          <div className="bg-[#F7F7F7] rounded-md px-10 py-8 explore-course">
            <h2 className="text-[18px] font-bold">Design & Development</h2>
            <p className="text-[16px]">50+ Courses Available</p>
          </div>
          <div className="bg-[#F7F7F7] rounded-md px-10 py-8 explore-course">
            <h2 className="text-[18px] font-bold">Design & Development</h2>
            <p className="text-[16px]">50+ Courses Available</p>
          </div>
          <div className="bg-[#F7F7F7] rounded-md px-10 py-8 explore-course">
            <h2 className="text-[18px] font-bold">Design & Development</h2>
            <p className="text-[16px]">50+ Courses Available</p>
          </div>
          <div className="bg-[#F7F7F7] rounded-md px-10 py-8 explore-course">
            <h2 className="text-[18px] font-bold">Design & Development</h2>
            <p className="text-[16px]">50+ Courses Available</p>
          </div>
          <div className="bg-[#F7F7F7] rounded-md px-10 py-8 explore-course">
            <h2 className="text-[18px] font-bold">Design & Development</h2>
            <p className="text-[16px]">50+ Courses Available</p>
          </div>
          <div className="bg-[#F7F7F7] rounded-md px-10 py-8 explore-course">
            <h2 className="text-[18px] font-bold">Design & Development</h2>
            <p className="text-[16px]">50+ Courses Available</p>
          </div>
          <div className="bg-[#F7F7F7] rounded-md px-10 py-8 explore-course">
            <h2 className="text-[18px] font-bold">Design & Development</h2>
            <p className="text-[16px]">50+ Courses Available</p>
          </div>
          <div className="bg-[#F7F7F7] rounded-md px-10 py-8 explore-course">
            <h2 className="text-[18px] font-bold">Design & Development</h2>
            <p className="text-[16px]">50+ Courses Available</p>
          </div>
          <div className="bg-[#F7F7F7] rounded-md px-10 py-8 explore-course">
            <h2 className="text-[18px] font-bold">Design & Development</h2>
            <p className="text-[16px]">50+ Courses Available</p>
          </div>
        </div>
      </div>
      <button className="bg-black text-white px-4 py-3 rounded-md mt-4">
        View All Courses
      </button>
    </section>
    );
}

export default Category;