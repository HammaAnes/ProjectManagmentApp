
export default function CustomYourNeed(){

    return (
        <div className="pt-[140px] flex justify-center gap-[98px]">
        
            <img
            src="/vi_4.svg"
            alt="illustration"
            className="max-w-[748px] min-h-[547px]"
            />
    
            <div className="min-w-[732px] flex flex-col justify-center">
                <div className="h-[411px] flex flex-col justify-between items-start">
                    <h1 className="font-bold text-[72px] text-[#212529]">Customise it to <br />your needs</h1>
                    <p className="text-[18px] text-[#212529] font-normal">Customise the app with plugins, custom themes and multiple text editors (Rich <br />Text or Markdown). Or create your own scripts and plugins using the Extension <br />API.</p>
                    <button className="bg-[#4F9CF9] w-[227px] h-[60px] text-[18px] rounded-[8px] text-white font-medium flex justify-center gap-2.5 items-center hover:scale-105 transform transition-transform">Let's Go <img src="right_arrow.svg" alt="right_arrow" /></button>
                </div>
            </div>
        </div>
    );
}