import React from "react";
import { ReactComponent as BgPattern } from '../assets/images/bg-pattern-1.svg';
import bg2 from '../assets/images/bg-pattern-2.svg';
import bg1 from '../assets/images/bg-pattern-1.svg';
import phone from '../assets/images/image-hero.webp';

const Hero = () => {
    return ( 
        <div className="bg-[#24053E] pt-[56px] w-[100%] h-[805px] relative">
           
            <div className="max-w-[1700px] mx-auto"> 
                <div  className="flex justify-between px-6 pb-[32px]">
                    <p className="text-white text-xl xs:text-[12px] "><b>Work</b>it</p>
                    <p className="text-white border-b-4 border-[#44FFA1] sm:text-lg text-[12px]">Apply for access</p>
                </div>

            </div>
            
            
           <div className="xxl:hidden ssm:hidden">
                <img className="absolute top-[180px]  left-[-30px] lg:left-[-60px] w-[270.29px] h-[215.1px]" src={bg1} alt="background-pattern" />
                <img className="absolute top-[350px] right-[30px] lg:right-[20px] w-[142px] h-[113px]" src={bg2} alt="background-pattern" />
            </div>
               
            <div className="mt-[56px] max-w-[800px] mx-auto">
                <div className="flex justify-center text-center relative px- [20px] pb-[40px]">
                    <h2 className="text-white md:text-7xl text-[40px] font-fraunces " >Data tailored to <br></br> your needs.</h2>
                    <span className="border-b-4 border-[#44FFA1] lg:w-[243px] lg:left-[240px] sm:w-[184px] sm:left-[260px] w-[150px] absolute md:top-[70px] top-[50px] "></span>
                </div>

                <div className="flex justify-center">
                   <button className=" text-[#24053E] text-lg bg-[#44FFA1] font-bold h-[56px] w-[162px]">Learn More</button>
                </div>

                <div className="flex mt-[56px] justify-center">
                    <img src={phone} className="w-[767px] h-[441px] pb-5" alt="phone mockup"  />
                </div>
            </div>
        </div>
     );
}
 
export default Hero;