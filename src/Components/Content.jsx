import React from "react";
const Content = () => {
    return ( 
        <div className="w-[100%] bg-[#FCF8FF]">
           <div className="max-w-[1700px] mx-auto pt-[88px]">
              <div className="grid lg:grid-cols-3 lg:gap-20 sm:grid-rows-3 ">
                   <div className="sm:mb-3">
                       <div className="flex justify-center pb-4 ">
                            <div className="flex items-center justify-center border border-[#584D62] lg:w-[56px] lg:h-[56px] w-[40px] h-[40px] text-[20px] rounded-full ">
                               1
                            </div> 
                       </div>
                        <div className="lg:pt-[56px] text-center">
                            <h3 className="font-bold text-lg pb-4 font-fraunces">Actionable insights</h3>
                            <p className="text-lg leading-8 font-manrope">Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics ad share insights.</p>
                        </div> 
                    </div>
                    <div className="text-center">
                       <div className="flex justify-center">
                            <div className="flex items-center justify-center border border-[#584D62] w-[56px] h-[56px] text-[24px] rounded-full ">
                               2
                            </div> 
                       </div>
                        <div className="pt-[56px]">
                            <h3 className="font-bold text-lg pb-4 font-fraunces">Data-driven decisions</h3>
                            <p className="text-lg leading-8 font-manrope">Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.</p>
                        </div> 
                    </div>
                    <div className="text-center">
                        <div className="flex justify-center">
                            <div className="flex items-center justify-center border border-[#584D62] w-[56px] h-[56px] text-[24px] rounded-full ">
                              3
                            </div> 
                        </div> 
                        <div className="pt-[56px]">
                            <h3 className="font-bold text-lg pb-4 font-fraunces">Always affordable</h3>
                            <p className="text-lg leading-8 font-manrope">Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees..</p>
                        </div> 
                    </div>
              </div>
           </div>
        </div> 
    );
}
 
export default Content;