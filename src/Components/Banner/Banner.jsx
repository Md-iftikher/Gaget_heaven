import React from "react";
import banner_img from "../../assets/banner.jpg"
const Banner = () => {
  return (
    <div>
      <div className="hero h-[470px] bg-[#9538E2] rounded-b-lg">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <div className="grid gap-5 px-32 py-10 text-center text-white">
            <h1 className="text-5xl font-bold">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="px-10 text-[#FFFFFF]">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <div>
              <button className="btn text-[#9538E2] w-48">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
      {/* overlap bg */}
      <div className="bg-[#FFFFFF4D] p-4 border w-[785px] mx-auto relative top-[-100px] rounded-xl flex justify-center items-center">
          <img className="h-[500px] w-auto rounded-xl" src={banner_img} alt="" />
      </div>
    </div>
  );
};

export default Banner;
