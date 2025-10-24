

export default function WorkTogether(){

    return (
        <div className="pt-[140px] flex justify-center gap-[100px]">

            <img
            src="/Work Together Image.svg"
            alt="illustration"
            className="min-w-[748px] min-h-[547px]"
            />
    
            <div className="min-w-[732px] flex flex-col justify-center">
                <div className="h-[411px] flex flex-col justify-evenly items-start">
                    <h1 className="font-bold text-[72px] text-[#212529]">Work together</h1>
                    <p className="text-[18px] text-[#212529]">With whitepace, share your notes with your colleagues and collaborate on them. <br />You can also publish a note to the internet and share the URL with others.</p>
                    <button className="bg-[#4F9CF9] w-[227px] h-[60px] text-[18px] rounded-[8px] text-white font-medium flex justify-center gap-2.5 items-center hover:scale-105 transform transition-transform">Try it now <img src="right_arrow.svg" alt="right_arrow" /></button>
                </div>
            </div>
        </div>
    );
}