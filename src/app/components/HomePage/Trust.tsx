import React from "react";
import Image from "next/image";
import TrustLogo from "@/../public/Trust/Trust1.png";
import TrustLogo1 from "@/../public/Trust/Trust2.png";
import TrustLogo2 from "@/../public/Trust/Trust3.png";
import TrustLogo3 from "@/../public/Trust/Trust4.png";
import TrustLogo4 from "@/../public/Trust/Trust5.png";
import TrustLogo5 from "@/../public/Trust/Trust6.png";

const Trust = () => {
    return (
      <section className="flex flex-col md:flex-row justify-center items-center h-56 bg-[#F7F7F7]">
      <div className="flex flex-col md:flex-row justify-around items-center max-w-[1200px] mx-auto gap-4 w-full">
        <h2 className="text-[18px] md:text-[24px] font-bold">
          Trusted by 2000+ companies worldwide.
        </h2>
        <div className="flex flex-row items-end gap-4 select-none h-[30px] md:h-[40px]">
          <Image src={TrustLogo} alt="trust-1" />
          <Image src={TrustLogo1} alt="trust-2" />
          <Image src={TrustLogo2} alt="trust-3" />
          <Image src={TrustLogo3} alt="trust-4" />
          <Image src={TrustLogo4} alt="trust-5" />
          <Image src={TrustLogo5} alt="trust-6" />
        </div>
      </div>
    </section>
    );
}

export default Trust