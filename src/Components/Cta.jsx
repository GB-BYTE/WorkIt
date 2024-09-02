import React from "react";
import founder from '../assets/images/image-founder.webp';
import bg3 from '../assets/images/bg-pattern-3.svg';
const Cta = () => {
    return ( 
        <div className=" w-[100%] bg-slate-100  ">
            <div className="max-w-[1700px] mx-auto md:pt-[112px] pt-[80px]">
                <div className="md:grid md:grid-cols-3 flex flex-col items-center md:items-start">
                    <div className="col-span-1 relative md:left-[80px] 1024-1300:left-[50px]   ">
                        <img src={founder} className="lg:h-[480px] lg:w-[480px] 1024-1300:h-[380px] 1024-1300:w-[380px] md:w-[280px] md:h-[280px] w-[280px] h-[280px] " alt="our founder" />
                    </div>
                    <div className="col-span-2 text-white">
                        <div className="bg-[#24053E] text-center md:text-start p-[25px] sm:p-[40px] lg:p-[64px] md:p-[50px] mt-[-60px] md:mt-[178px] md:h-[411px] lg:left-[-80px] 1024-1300:left-[-50px] md:left-[-80px] relative mx-6 md:mx-0">
                            <h2 className="sm:text-5xl text-4xl pb-[20px] sm:pb-[30px] md:pb-[30px] lg:pb-[42px] 1024-1300:pb[38px] font-fraunces ">Be the first to test</h2>
                            <p className="pb-[32px] 1024-1300:leading-8 text-[14px] sm:text-[16px] md:text-[18px] font-manrope">Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company or business. <br></br> Apply for access below and I’ll be in touch to schedule a call.</p>
                            <button className="h-[56px] w-[207px] font-bold bg-[#44FFA1] text-[#24053E] ">
                               Apply for access
                            </button>
                        </div>
                        
                          <img src={bg3} className="relative hidden md:block w-[173px] h-[137px] top-[-70px] lg:left-[400px] md:left-[200px]  "  alt="background" />
                          
                    </div>
                 
                    
                </div>
            </div>
        </div>
     );
}
 
export default Cta;