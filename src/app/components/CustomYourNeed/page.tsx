
export default function CustomYourNeed(){

    return (
        <div className="pt-[140px] flex justify-center">

            <img
            src="/Work Together Image.svg"
            alt="illustration"
            className="min-w-[748px] min-h-[547px]"
            />
    
            <div className="min-w-[732px] flex flex-col justify-center">
                <div className="h-[411px] flex flex-col justify-between items-start">
                    <h1 className="font-bold text-[72px] text-[#212529]">Work together</h1>
                    <p className="text-[18px] text-[#212529]">Customise the app with plugins, custom themes and multiple text editors (Rich <br />Text or Markdown). Or create your own scripts and plugins using the Extension <br />API.</p>
                    <button className="bg-[#4F9CF9] w-[227px] h-[60px] text-[18px] rounded-[8px] text-white font-[inter] font-medium flex justify-center gap-2.5 items-center">Try it now <img src="right_arrow.svg" alt="right_arrow" /></button>
                </div>
            </div>
        </div>
    );
}