import Image from "next/image";
import React from "react";
import Course1 from "@/../public/Courses/UXUI.png";
import Course2 from "@/../public/Courses/Python.png";
import Course3 from "@/../public/Courses/Data Analysis.png";
import Course4 from "@/../public/Courses/Art.png";
import Course5 from "@/../public/Courses/Law.png";
import Course6 from "@/../public/Courses/WebFlow.png";

const Trust = () => {
    return (
      <section id="courses" className=" flex flex-col justify-center items-center w-full my-8">
      <h2 className="text-[42px] font-bold">Courses</h2>
      <p className="text-[18px] text-center w-[75%] mt-4">
        Your Ultimate Guide to learning
      </p>
      <div>
        <ul className="flex flex-row justify-center items-center gap-4 mt-10">
          <li className="select-none text-[18px] cursor-pointer border-b border-black">Popular</li>
          <li className="select-none text-[18px] cursor-pointer">Recommended</li>
          <li className="select-none text-[18px] cursor-pointer">Best Price</li>
        </ul>
        <div className="mt-10 place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 sm:gap-10 md:gap-10 lg:gap-10">
          <div className="enroll-card">
            {/* Image */}
            <Image src={Course1} alt="UXUI" width={300} height={300} />
            <div className="w-[300px] bg-[#F7F7F7] rounded-md p-4">
              <div className="flex flex-row justify-between items-center ">
                <span className="font-bold">Design</span>
                <span className="font-bold">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.54894 0.927052C8.8483 0.00574108 10.1517 0.00573985 10.4511 0.92705L11.9697 5.60081C12.1035 6.01284 12.4875 6.2918 12.9207 6.2918H17.835C18.8037 6.2918 19.2065 7.53141 18.4228 8.10081L14.447 10.9894C14.0966 11.244 13.9499 11.6954 14.0838 12.1074L15.6024 16.7812C15.9017 17.7025 14.8472 18.4686 14.0635 17.8992L10.0878 15.0106C9.7373 14.756 9.2627 14.756 8.91221 15.0106L4.93648 17.8992C4.15276 18.4686 3.09828 17.7025 3.39763 16.7812L4.91623 12.1074C5.0501 11.6954 4.90345 11.244 4.55296 10.9894L0.577221 8.10081C-0.206493 7.53141 0.196283 6.2918 1.16501 6.2918H6.07929C6.51252 6.2918 6.89647 6.01284 7.03035 5.60081L8.54894 0.927052Z"
                      fill="#D9D9D9"
                    />
                  </svg>
                  5.0
                </span>
              </div>
              <h1 className="text-[24px] font-bold">UX/UI Design 201</h1>
              <p className="text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
              <button className="border border-black px-4 py-2 rounded-md mt-4 duration-200 active:bg-black active:text-white select-none">Enroll Now &nbsp;</button>
              <span className="font-bold pl-4">$400</span>
            </div>
          </div>
          <div className="">
            {/* Image */}
            <Image src={Course2} alt="UXUI" width={300} height={300} />
            <div className="w-[300px] bg-[#F7F7F7] rounded-md p-4">
              <div className="flex flex-row justify-between items-center ">
                <span className="font-bold">Programming</span>
                <span className="font-bold">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.54894 0.927052C8.8483 0.00574108 10.1517 0.00573985 10.4511 0.92705L11.9697 5.60081C12.1035 6.01284 12.4875 6.2918 12.9207 6.2918H17.835C18.8037 6.2918 19.2065 7.53141 18.4228 8.10081L14.447 10.9894C14.0966 11.244 13.9499 11.6954 14.0838 12.1074L15.6024 16.7812C15.9017 17.7025 14.8472 18.4686 14.0635 17.8992L10.0878 15.0106C9.7373 14.756 9.2627 14.756 8.91221 15.0106L4.93648 17.8992C4.15276 18.4686 3.09828 17.7025 3.39763 16.7812L4.91623 12.1074C5.0501 11.6954 4.90345 11.244 4.55296 10.9894L0.577221 8.10081C-0.206493 7.53141 0.196283 6.2918 1.16501 6.2918H6.07929C6.51252 6.2918 6.89647 6.01284 7.03035 5.60081L8.54894 0.927052Z"
                      fill="#D9D9D9"
                    />
                  </svg>
                  5.0
                </span>
              </div>
              <h1 className="text-[24px] font-bold">Introduction to Python</h1>
              <p className="text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
              <button className="border border-black px-4 py-2 rounded-md mt-4 duration-200 active:bg-black active:text-white select-none">Enroll Now &nbsp;</button>
              <span className="font-bold pl-4">$400</span>
            </div>
          </div>
          <div className="">
            {/* Image */}
            <Image src={Course3} alt="UXUI" width={300} height={300} />
            <div className="w-[300px] bg-[#F7F7F7] rounded-md p-4">
              <div className="flex flex-row justify-between items-center">
                <span className="font-bold">Business</span>
                <span className="font-bold">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.54894 0.927052C8.8483 0.00574108 10.1517 0.00573985 10.4511 0.92705L11.9697 5.60081C12.1035 6.01284 12.4875 6.2918 12.9207 6.2918H17.835C18.8037 6.2918 19.2065 7.53141 18.4228 8.10081L14.447 10.9894C14.0966 11.244 13.9499 11.6954 14.0838 12.1074L15.6024 16.7812C15.9017 17.7025 14.8472 18.4686 14.0635 17.8992L10.0878 15.0106C9.7373 14.756 9.2627 14.756 8.91221 15.0106L4.93648 17.8992C4.15276 18.4686 3.09828 17.7025 3.39763 16.7812L4.91623 12.1074C5.0501 11.6954 4.90345 11.244 4.55296 10.9894L0.577221 8.10081C-0.206493 7.53141 0.196283 6.2918 1.16501 6.2918H6.07929C6.51252 6.2918 6.89647 6.01284 7.03035 5.60081L8.54894 0.927052Z"
                      fill="#D9D9D9"
                    />
                  </svg>
                  5.0
                </span>
              </div>
              <h1 className="text-[20px] font-bold">Data Analysis for Beginners</h1>
              <p className="text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
              <button className="border border-black px-4 py-2 rounded-md mt-4 duration-200 active:bg-black active:text-white select-none">Enroll Now &nbsp;</button>
              <span className="font-bold pl-4">$400</span>
            </div>
          </div>
          <div className="">
            {/* Image */}
            <Image src={Course4} alt="UXUI" width={300} height={300} />
            <div className="w-[300px] bg-[#F7F7F7] rounded-md p-4">
              <div className="flex flex-row justify-between items-center ">
                <span className="font-bold">Art</span>
                <span className="font-bold">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.54894 0.927052C8.8483 0.00574108 10.1517 0.00573985 10.4511 0.92705L11.9697 5.60081C12.1035 6.01284 12.4875 6.2918 12.9207 6.2918H17.835C18.8037 6.2918 19.2065 7.53141 18.4228 8.10081L14.447 10.9894C14.0966 11.244 13.9499 11.6954 14.0838 12.1074L15.6024 16.7812C15.9017 17.7025 14.8472 18.4686 14.0635 17.8992L10.0878 15.0106C9.7373 14.756 9.2627 14.756 8.91221 15.0106L4.93648 17.8992C4.15276 18.4686 3.09828 17.7025 3.39763 16.7812L4.91623 12.1074C5.0501 11.6954 4.90345 11.244 4.55296 10.9894L0.577221 8.10081C-0.206493 7.53141 0.196283 6.2918 1.16501 6.2918H6.07929C6.51252 6.2918 6.89647 6.01284 7.03035 5.60081L8.54894 0.927052Z"
                      fill="#D9D9D9"
                    />
                  </svg>
                  5.0
                </span>
              </div>
              <h1 className="text-[24px] font-bold">Art Specialization</h1>
              <p className="text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
              <button className="border border-black px-4 py-2 rounded-md mt-4 duration-200 active:bg-black active:text-white select-none">Enroll Now &nbsp;</button>
              <span className="font-bold pl-4">$400</span>
            </div>
          </div>
          <div className="">
            {/* Image */}
            <Image src={Course5} alt="UXUI" width={300} height={300} />
            <div className="w-[300px] bg-[#F7F7F7] rounded-md p-4">
              <div className="flex flex-row justify-between items-center ">
                <span className="font-bold">Law</span>
                <span className="font-bold">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.54894 0.927052C8.8483 0.00574108 10.1517 0.00573985 10.4511 0.92705L11.9697 5.60081C12.1035 6.01284 12.4875 6.2918 12.9207 6.2918H17.835C18.8037 6.2918 19.2065 7.53141 18.4228 8.10081L14.447 10.9894C14.0966 11.244 13.9499 11.6954 14.0838 12.1074L15.6024 16.7812C15.9017 17.7025 14.8472 18.4686 14.0635 17.8992L10.0878 15.0106C9.7373 14.756 9.2627 14.756 8.91221 15.0106L4.93648 17.8992C4.15276 18.4686 3.09828 17.7025 3.39763 16.7812L4.91623 12.1074C5.0501 11.6954 4.90345 11.244 4.55296 10.9894L0.577221 8.10081C-0.206493 7.53141 0.196283 6.2918 1.16501 6.2918H6.07929C6.51252 6.2918 6.89647 6.01284 7.03035 5.60081L8.54894 0.927052Z"
                      fill="#D9D9D9"
                    />
                  </svg>
                  5.0
                </span>
              </div>
              <h1 className="text-[24px] font-bold">Rule of Law</h1>
              <p className="text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
              <button className="border border-black px-4 py-2 rounded-md mt-4 duration-200 active:bg-black active:text-white select-none">Enroll Now &nbsp;</button>
              <span className="font-bold pl-4">$400</span>
            </div>
          </div>
          <div className="">
            {/* Image */}
            <Image src={Course6} alt="UXUI" width={300} height={300} />
            <div className="w-[300px] bg-[#F7F7F7] rounded-md p-4">
              <div className="flex flex-row justify-between items-center ">
                <span className="font-bold">Tech</span>
                <span className="font-bold">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.54894 0.927052C8.8483 0.00574108 10.1517 0.00573985 10.4511 0.92705L11.9697 5.60081C12.1035 6.01284 12.4875 6.2918 12.9207 6.2918H17.835C18.8037 6.2918 19.2065 7.53141 18.4228 8.10081L14.447 10.9894C14.0966 11.244 13.9499 11.6954 14.0838 12.1074L15.6024 16.7812C15.9017 17.7025 14.8472 18.4686 14.0635 17.8992L10.0878 15.0106C9.7373 14.756 9.2627 14.756 8.91221 15.0106L4.93648 17.8992C4.15276 18.4686 3.09828 17.7025 3.39763 16.7812L4.91623 12.1074C5.0501 11.6954 4.90345 11.244 4.55296 10.9894L0.577221 8.10081C-0.206493 7.53141 0.196283 6.2918 1.16501 6.2918H6.07929C6.51252 6.2918 6.89647 6.01284 7.03035 5.60081L8.54894 0.927052Z"
                      fill="#D9D9D9"
                    />
                  </svg>
                  5.0
                </span>
              </div>
              <h1 className="text-[22px] font-bold ">Introduction to webflow</h1>
              <p className="text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
              <button className="border border-black px-4 py-2 rounded-md mt-4 duration-200 active:bg-black active:text-white select-none">Enroll Now &nbsp;</button>
              <span className="font-bold pl-4">$400</span>
            </div>
          </div>
        </div>
      </div>
      <button className="border border-black px-4 py-2 rounded-md mt-4 duration-200 active:bg-black active:text-white select-none">View All</button>
    </section>
    );
};

export default Trust;