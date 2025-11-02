"use client"
import { useState, useRef } from "react";

export default function ChoosePlan() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    const el = scrollRef.current;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    setActive(index);
  };

  return (
    <>
      <div className="flex flex-col justify-center mt-[140px] items-center mb-[60px] text-center px-3">
        <h1 className="text-[#212529] text-[48px] md:text-[72px] font-bold">Choose Your Plan</h1>
        <span className="text-[#212529] text-[18px]">
          Whether you want to get organized, keep your personal life on track, or boost workplace productivity,
        </span>
        <span className="text-[#212529] text-[18px]">
          Evernote has the right plan for you
        </span>
      </div>

      <div className="flex justify-center mb-[80px] md:mb-[140px]">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-[32px] snap-x snap-mandatory px-4 scrollbar-hide w-full md:justify-center"
        >

          {/* FREE */}
          <div className="min-w-[90%] md:min-w-[472px] snap-center flex flex-col justify-center items-center">
            <div className="flex flex-col justify-between gap-[25px] border border-[#FFE492] px-[44px] py-[40px] rounded-[10px]">
              <span className="text-[24px] font-semibold text-[#212529]"> Free</span>
              <span className="text-[36px] font-bold text-[#212529]">$0</span>
              <span className="text-[18px] font-medium text-[#212529] "> Capture ideas and find them quickly</span>

              <span className="text-[16px] font-normal text-[#212529] flex"><img src="/check_black.svg" className="mr-[19px]" />Sync unlimited devices</span>
              <span className="text-[16px] font-normal text-[#212529] flex"><img src="/check_black.svg" className="mr-[19px]" />10 GB monthly uploads</span>
              <span className="text-[16px] font-normal text-[#212529] flex"><img src="/check_black.svg" className="mr-[19px]" />200 MB max. note size</span>
              <span className="text-[16px] font-normal text-[#212529] flex"><img src="/check_black.svg" className="mr-[19px]" />Customize Home dashboard and access <br /> extra widgets</span>
              <span className="text-[16px] font-normal text-[#212529] flex"><img src="/check_black.svg" className="mr-[19px]" />Connect primary Google Calendar <br />account</span>
              <span className="text-[16px] font-normal text-[#212529] flex"><img src="/check_black.svg" className="mr-[19px]" />Add due dates, reminders, and <br />notifications to your tasks</span>

              <button className="w-[166px] h-[60px] text-[18px] rounded-[8px] text-[#212529] font-medium flex justify-center gap-2.5 items-center border border-[#FFE492] hover:bg-[#FFE492] transition-colors">Get Started</button>
            </div>
          </div>

          {/* PERSONAL */}
          <div className="min-w-[90%] md:min-w-[472px] snap-center bg-[#043873] rounded-[10px] flex flex-col justify-center items-center">
            <div className="flex flex-col justify-between gap-[25px] p-[40px]">
              <span className="text-[24px] font-semibold text-white"> Personal</span>
              <span className="text-[36px] font-bold text-[#FFE492]">$11.99</span>
              <span className="text-[18px] font-medium text-white "> Keep home and family on track</span>

              <span className="text-[18px] font-medium text-white flex"><img src="/check_gold.svg" className="mr-[19px]" />Sync unlimited devices</span>
              <span className="text-[18px] font-medium text-white flex"><img src="/check_gold.svg" className="mr-[19px]" />10 GB monthly uploads</span>
              <span className="text-[18px] font-medium text-white flex"><img src="/check_gold.svg" className="mr-[19px]" />200 MB max. note size</span>
              <span className="text-[18px] font-medium text-white flex"><img src="/check_gold.svg" className="mr-[19px]" />Customize Home dashboard and access <br /> extra widgets</span>
              <span className="text-[18px] font-medium text-white flex"><img src="/check_gold.svg" className="mr-[19px]" />Connect primary Google Calendar <br />account</span>
              <span className="text-[18px] font-medium text-white flex"><img src="/check_gold.svg" className="mr-[19px]" />Add due dates, reminders, and <br />notifications to your tasks</span>

              <button className="bg-[#4F9CF9] w-[166px] h-[60px] text-[18px] rounded-[8px] text-white font-medium flex justify-center gap-2.5 items-center border border-[#4F9CF9] hover:bg-[#043873] transition-colors">Get Started</button>
            </div>
          </div>

          {/* ORGANIZATION */}
          <div className="min-w-[90%] md:min-w-[472px] snap-center flex flex-col justify-center items-center">
            <div className="flex flex-col justify-between gap-[25px] border border-[#FFE492] px-[44px] py-[40px] rounded-[10px]">
              <span className="text-[24px] font-semibold text-[#212529]"> Organization</span>
              <span className="text-[36px] font-bold text-[#212529]">$49.99</span>
              <span className="text-[18px] font-medium text-[#212529] "> Keep home and family on track</span>

              <span className="text-[16px] font-normal text-[#212529] flex"><img src="/check_black.svg" className="mr-[19px]" />Sync unlimited devices</span>
              <span className="text-[16px] font-normal text-[#212529] flex"><img src="/check_black.svg" className="mr-[19px]" />10 GB monthly uploads</span>
              <span className="text-[16px] font-normal text-[#212529] flex"><img src="/check_black.svg" className="mr-[19px]" />200 MB max. note size</span>
              <span className="text-[16px] font-normal text-[#212529] flex"><img src="/check_black.svg" className="mr-[19px]" />Customize Home dashboard and access <br /> extra widgets</span>
              <span className="text-[16px] font-normal text-[#212529] flex"><img src="/check_black.svg" className="mr-[19px]" />Connect primary Google Calendar <br />account</span>
              <span className="text-[16px] font-normal text-[#212529] flex"><img src="/check_black.svg" className="mr-[19px]" />Add due dates, reminders, and <br />notifications to your tasks</span>

              <button className="w-[166px] h-[60px] text-[18px] rounded-[8px] text-[#212529] font-medium flex justify-center gap-2.5 items-center border border-[#FFE492] hover:bg-[#FFE492] transition-colors">Get Started</button>
            </div>
          </div>

        </div>
      </div>

      {/* dots */}
      <div className="flex justify-center gap-2 mb-8 lg:hidden">
        {[0, 1, 2].map(i => (
          <div key={i} className={`w-3 h-3 rounded-full transition-all ${active === i ? "bg-[#043873]" : "bg-gray-400"}`} />
        ))}
      </div>
    </>
  );
}
