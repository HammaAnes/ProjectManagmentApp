
export default function Hero(){

    return (
        <div className="min-h-[829px] bg-[#043873] flex justify-center items-center bg-[url('/Element_wow.svg')] bg-cover bg-center">
        <div className="max-w-[1289px] w-full flex justify-between items-center">
            <div className=" text-white leading-tight flex flex-col justify-between gap-[60px]">
                <h1 className="font-bold text-[54px]">Get More Done with NightByte</h1>
                <span className="text-[18px]">Project management software that enables your teams to collaborate, plan,<br /> analyze and manage everyday tasks</span>
                <button className="bg-[#4F9CF9] w-[227px] h-[60px] text-[18px] rounded-[8px] text-white font-[inter] font-medium flex justify-center gap-2.5 items-center">Try Whitepace free <img src="right_arrow.svg" alt="right_arrow" /></button>
            </div>

            <div>
            <img
                src="/image_container.svg"
                alt="illustration"
                className="min-w-[750px] min-h-[549px] bg-[#C4DEFD]"
            />
            </div>
        </div>
        </div>
    );
}