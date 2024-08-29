import React from "react";

const Hero = () => {
    return ( 
        <div className="bg-[#24053E] pt-[56px] w-[100%]">
            <div className="max-w-[1700px] mx-auto md:px-[40px] px-[20px] pb-4 flex justify-between"> 
                <p className="text-white text-xl xs:text-[14px] "><b>Work</b>it</p>
                <p className="text-white text-lg border-b-4 border-[#44FFA1] xs:text-[14px]">Apply for access</p>
            </div>
           
            <div className="mt-[56px] max-w-[800px] mx-auto">
                <div className="flex justify-center text-center relative">
                    <h2 className="text-white md:text-7xl sm:text-[60px] text-[48px]" >Data tailored to your needs.</h2>
                    <span className="border-b-4 border-[#44FFA1] w-[243px] absolute top-[70px] left-[160px] "></span>
                </div>
            </div>
        </div>
     );
}
 
export default Hero;