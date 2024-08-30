import React from "react";

const Hero = () => {
    return ( 
        <div className="bg-[#24053E] pt-[56px] w-[100%]">
            <div className="max-w-[1700px] mx-auto"> 
                <div  className="flex justify-between px-6">
                    <p className="text-white text-xl xs:text-[12px] "><b>Work</b>it</p>
                    <p className="text-white border-b-4 border-[#44FFA1] sm:text-lg text-[12px]">Apply for access</p>
                </div>
            </div>
           
            <div className="mt-[56px] max-w-[800px] mx-auto">
                <div className="flex justify-center text-center relative px-[20px]">
                    <h2 className="text-white text-7xl " >Data tailored to your needs.</h2>
                    <span className="border-b-4 border-[#44FFA1] lg:w-[243px] lg:left-[160px] sm:w-[184px] sm:left-[260px] w-[150px] absolute top-[70px]  "></span>
                </div>
            </div>
        </div>
     );
}
 
export default Hero;