

export default function ChoosePlan(){

    return <>
        <div className="flex flex-col justify-center mt-[140px] items-center mb-[60px]">
            <h1 className="text-[#212529] text-[72px] font-bold">Choose Your Plan</h1>
            <span className="text-[#212529] text-[18px]">Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the</span>
            <span className="text-[#212529] text-[18px]">right plan for you</span>
        </div>

        <div className="flex justify-center mb-[140px]">
            <div className="flex justify-between min-w-[1481px] min-h-[761px] gap-[32px]">
                <div className="min-w-[472.333px] flex flex-col justify-center items-center ">
                    <div className="flex flex-col justify-between gap-[25px] border border-[#FFE492] px-[44px] py-[40px] rounded-[10px]">
                        <span className="text-[24px] font-semibold text-[#212529]"> Free</span>
                        <span className="text-[36px] font-bold text-[#212529]">$0</span>
                        <span className="text-[18px] font-medium text-[#212529] "> Capture ideas and find them quickly</span>
                        <span className="text-[16px] font-normal text-[#212529] flex"><img src="/check_black.svg" alt="check" className="mr-[19px]"/>Sync unlimited devices</span>
                        <span className="text-[16px] font-normal text-[#212529] flex"><img src="/check_black.svg" alt="check" className="mr-[19px]"/>10 GB monthly uploads</span>
                        <span className="text-[16px] font-normal text-[#212529] flex"><img src="/check_black.svg" alt="check" className="mr-[19px]"/>200 MB max. note size</span>
                        <span className="text-[16px] font-normal text-[#212529] flex"><img src="/check_black.svg" alt="check" className="mr-[19px]"/>Customize Home dashboard and access <br /> extra widgets</span>
                        <span className="text-[16px] font-normal text-[#212529] flex"><img src="/check_black.svg" alt="check" className="mr-[19px]"/>Connect primary Google Calendar <br />account</span>
                        <span className="text-[16px] font-normal text-[#212529] flex"><img src="/check_black.svg" alt="check" className="mr-[19px]"/>Add due dates, reminders, and <br />notifications to your tasks</span>
                        <button className="w-[166px] h-[60px] text-[18px] rounded-[8px] text-[#212529] font-medium flex justify-center gap-2.5 items-center border border-[#FFE492]">Get Started</button>
                    </div>
                </div>
                <div className="bg-[#043873] min-w-[472.333px] rounded-[10px] flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-between gap-[25px]">
                        <span className="text-[24px] font-semibold text-white"> Personal</span>
                        <span className="text-[36px] font-bold text-[#FFE492]">$11.99</span>
                        <span className="text-[18px] font-medium text-white "> Keep home and family on track</span>
                        <span className="text-[18px] font-medium text-white flex"><img src="/check_gold.svg" alt="check" className="mr-[19px]"/>Sync unlimited devices</span>
                        <span className="text-[18px] font-medium text-white flex"><img src="/check_gold.svg" alt="check" className="mr-[19px]"/>10 GB monthly uploads</span>
                        <span className="text-[18px] font-medium text-white flex"><img src="/check_gold.svg" alt="check" className="mr-[19px]"/>200 MB max. note size</span>
                        <span className="text-[18px] font-medium text-white flex"><img src="/check_gold.svg" alt="check" className="mr-[19px]"/>Customize Home dashboard and access <br /> extra widgets</span>
                        <span className="text-[18px] font-medium text-white flex"><img src="/check_gold.svg" alt="check" className="mr-[19px]"/>Connect primary Google Calendar <br />account</span>
                        <span className="text-[18px] font-medium text-white flex"><img src="/check_gold.svg" alt="check" className="mr-[19px]"/>Add due dates, reminders, and <br />notifications to your tasks</span>
                        <button className="bg-[#4F9CF9] w-[166px] h-[60px] text-[18px] rounded-[8px] text-white font font-medium flex justify-center gap-2.5 items-center">Get Started</button>
                    </div>
                </div>
                <div className="min-w-[472.333px] flex flex-col justify-center items-center ">
                    <div className="flex flex-col justify-between gap-[25px] border border-[#FFE492] px-[44px] py-[40px] rounded-[10px]">
                        <span className="text-[24px] font-semibold text-[#212529]"> Organization</span>
                        <span className="text-[36px] font-bold text-[#212529]">$49.99</span>
                        <span className="text-[18px] font-medium text-[#212529] "> Keep home and family on track</span>
                        <span className="text-[16px] font-normal text-[#212529] flex"><img src="/check_black.svg" alt="check" className="mr-[19px]"/>Sync unlimited devices</span>
                        <span className="text-[16px] font-normal text-[#212529] flex"><img src="/check_black.svg" alt="check" className="mr-[19px]"/>10 GB monthly uploads</span>
                        <span className="text-[16px] font-normal text-[#212529] flex"><img src="/check_black.svg" alt="check" className="mr-[19px]"/>200 MB max. note size</span>
                        <span className="text-[16px] font-normal text-[#212529] flex"><img src="/check_black.svg" alt="check" className="mr-[19px]"/>Customize Home dashboard and access <br /> extra widgets</span>
                        <span className="text-[16px] font-normal text-[#212529] flex"><img src="/check_black.svg" alt="check" className="mr-[19px]"/>Connect primary Google Calendar <br />account</span>
                        <span className="text-[16px] font-normal text-[#212529] flex"><img src="/check_black.svg" alt="check" className="mr-[19px]"/>Add due dates, reminders, and <br />notifications to your tasks</span>
                        <button className="w-[166px] h-[60px] text-[18px] rounded-[8px] text-[#212529] font-medium flex justify-center gap-2.5 items-center border border-[#FFE492]">Get Started</button>
                    </div>
                </div>

            </div>
        </div>
    </>
}