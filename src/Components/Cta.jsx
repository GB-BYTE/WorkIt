import React from "react";
import founder from '../assets/images/image-founder.webp';
import bg3 from '../assets/images/bg-pattern-3.svg';
const Cta = () => {
    return ( 
        <div className=" w-[100%] bg-slate-100 ">
            <div className="max-w-[1700px] mx-auto pt-[112px]">
                <div className="grid grid-cols-3 ">
                    <div className="cols-span-1 relative">
                        <img src={founder} className="h-[453px] w-[450px] " alt="our founder" />
                    </div>
                    <div className="cols-pan-2 text-white">
                        <div className="bg-[#24053E] p-[64px] h-[411px] w-[730px] relative">
                            <h2 className="text-5xl pb-[32px] ">Be the first to test</h2>
                            <p className="pb-[32px] ">Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I’ll be in touch to schedule a call.</p>
                            <button className="h-[56px] w-[207px] font-bold bg-[#44FFA1] text-[#24053E] ">
                               Apply for access
                            </button>
                        </div>
                        <img src={bg3} className=""  alt="background" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Cta;