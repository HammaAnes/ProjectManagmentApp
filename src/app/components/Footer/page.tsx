

export default function Footer(){

    return (

     <div className="bg-[#043873] flex justify-center pt-[140px] pb-8">

        <div className="flex flex-col justify-between min-w-[1480px] min-h-[302px]"> 
            <div className="flex justify-between">
                <div className="flex flex-col justify-between max-w-[240px] max-h-[169px]">
                    <h1 className="text-white text-[28px] font-bold">NightByte</h1>
                    <span className="text-white text-[18px] font-normal">whitepace was created for the new ways we live and work. We make a better workspace around the world</span>
                </div>
                <div className="flex flex-col justify-between max-w-[205px] max-h-32">
                    <h1 className="text-white text-[18px] font-bold">Product</h1>
                    <span className="text-white text-[16px] font-normal">Overview</span>
                    <span className="text-white text-[16px] font-normal">Pricing</span>
                    <span className="text-white text-[16px] font-normal">Customer stories</span>
                </div>
                <div className="flex flex-col justify-between max-w-[205px] max-h-32">
                    <h1 className="text-white text-[18px] font-bold">Resources</h1>
                    <span className="text-white text-[16px] font-normal">Blog</span>
                    <span className="text-white text-[16px] font-normal">Guides & tutorials</span>
                    <span className="text-white text-[16px] font-normal">Help center</span>
                </div>
                <div className="flex flex-col justify-between max-w-[205px] max-h-32">
                    <h1 className="text-white text-[18px] font-bold">Company</h1>
                    <span className="text-white text-[16px] font-normal">About us</span>
                    <span className="text-white text-[16px] font-normal">Careers</span>
                    <span className="text-white text-[16px] font-normal">Media kit</span>
                </div>
                <div className="flex flex-col justify-between max-w-[259px] min-h-[182px]">
                    <h1 className="text-white text-[28px] font-bold">Try It Today</h1>
                    <span className="text-white text-[16px] font-normal">Get started for free. Add your whole team as your needs grow.</span>
                    <button className="bg-[#4F9CF9] max-w-[186px] h-[60px] text-[18px] rounded-[8px] text-white font-normal flex justify-center gap-2.5 items-center">Start today<img src="right_arrow.svg" alt="right_arrow" /></button>
                </div>
            </div>
            
            <div className="flex justify-between items-end min-h-[52.93px] border-t border-t-[#2E4E73]">
                <div className="flex justify-between min-w-[737px] max-h-5">
                    <span className="text-white text-[16px] font-normal flex"> <img src="Language.svg" alt="language"/> English <img src="Down Arrow.svg" alt="/"/></span>
                    <span className="text-white text-[16px] font-normal">Terms & privacy</span>
                    <span className="text-white text-[16px] font-normal">Security</span>
                    <span className="text-white text-[16px] font-normal">Status</span>
                    <span className="text-white text-[16px] font-normal">©2021 Whitepace LLC.</span>
                </div>
                <div className="flex justify-between min-w-[105px]">
                    <img src="/_x30_1._Facebook.svg" alt="" />
                    <img src="/Twitter.svg" alt="" />
                    <img src="/Linkedin.svg" alt="" />
                </div>
            </div>
        </div>
     
    </div>
);
    
}