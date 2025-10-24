
export default function NavBar(){

    return (
    <nav>
        <div className="flex justify-center w-full bg-[#043873] h-[92px] items-center">
            <div className="flex justify-between max-w-[1289px] w-full">
                    <span className="text-[28px] text-white flex items-center"><strong>NightByte</strong></span>
                <div className="flex gap-[60px]">
                    <div className="flex gap-[32px]">
                        <div className="flex"><button className="text-[18px] text-white">Products </button><img src="/Down Arrow.svg" alt="down arrow" className="w-[29px]"/></div>
                        <div className="flex"><button className="text-[18px] text-white">Solutions</button><img src="/Down Arrow.svg" alt="down arrow" className="w-[29px]"/></div>
                        <div className="flex"><button className="text-[18px] text-white">Resources</button><img src="/Down Arrow.svg" alt="down arrow" className="w-[29px]"/></div>
                        <div className="flex"><button className="text-[18px] text-white">Pricing</button><img src="/Down Arrow.svg" alt="down arrow" className="w-[29px]"/></div>
                    </div>
                    <div className="flex gap-[24px]">
                        <button className="bg-[#FFE492] w-[126px] h-[60px] text-[18px] rounded-[8px] text-[#043873] font-medium">Login</button>
                        <button className="bg-[#4F9CF9] w-[227px] h-[60px] text-[18px] rounded-[8px] text-white font-medium flex justify-center gap-2.5 items-center">Try Whitepace free <img src="right_arrow.svg" alt="right_arrow" /></button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    );
}