

export default function UseAsExtention(){

    return (
        <div className="min-h-[829px] bg-[#043873] flex justify-center items-center mt-[140px]">
        <div className="max-w-[1289px] w-full flex justify-between items-center">
            <div className=" text-white leading-tight flex flex-col justify-between gap-[60px]">
                <h1 className="font-bold text-[54px]">Use as Extention</h1>
                <span className="text-[18px]">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</span>
                <button className="bg-[#4F9CF9] w-[227px] h-[60px] text-[18px] rounded-[8px] text-white font-medium flex justify-center gap-2.5 items-center">Let's Go <img src="right_arrow.svg" alt="right_arrow" /></button>
            </div>

            <div>
            <img
                src="/vi_3.svg"
                alt="illustration"
                className="min-w-[820px] max-h-[549px]"
            />
            </div>
        </div>
        </div>
    );
}