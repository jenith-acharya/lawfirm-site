import { Button } from "flowbite-react";
import video from "../../../../../Lawyer video background 2 - Nature Relaxing Music (720p, h264, youtube).mp4";

const Herosection = () => {
  return (
    <>
      <div className="relative h-[400px] ">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="relative z-10 flex items-center justify-center h-full text-white bg-black bg-opacity-50">
          <h1 className=" text-4xl font-bold text-center text-white font-serif">
          Experience You Can Rely On, Results You Deserve
            <br />
            <br />
            <h2 className="text-xl font-bold text-center text-white font-sans">Rooted in experience, driven by integrity—Legacy Legal Services is here to protect your rights and secure your future.</h2>
            <div className="flex justify-center my-10">
            <Button href="/aboutus" style={{width:300, height:40}} className="bg-red-800 size-3/12 hover:bg-red-600 transition-transform duration-300 hover:scale-105">CONSULT ONE OF OUR EXPERTS NOW</Button>
                
              
            </div>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Herosection;
