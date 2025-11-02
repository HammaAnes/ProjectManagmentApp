"use client";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-center w-full bg-[#043873] h-[92px] items-center">
      <div className="flex justify-between items-center w-full max-w-[1289px] px-4">

        {/* Logo */}
        <span className="text-[28px] text-white font-bold">NightByte</span>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-[60px] items-center">
          {["Products", "Solutions", "Resources", "Pricing"].map((item) => (
            <button key={item} className="text-[18px] text-white flex items-center gap-2 hover:text-[#4F9CF9] transition">
              {item}
              <img src="/Down Arrow.svg" className="w-[18px]" />
            </button>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-[20px]">
          <button className="bg-[#FFE492] px-6 h-[50px] text-[16px] rounded-[8px] text-[#043873] font-medium hover:scale-105 transition">
            Login
          </button>
          <button className="bg-[#4F9CF9] px-8 h-[50px] text-[16px] rounded-[8px] text-white font-medium flex gap-2 items-center hover:scale-105 transition">
            Try Free <img src="/right_arrow.svg" className="w-4" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={() => setOpen(true)}>
          <img src="/side_bar.svg" alt="menu" className="w-8" />
        </button>
      </div>

      {/* ✅ Mobile Sidebar */}
      {open && (
        <>
          {/* overlay background */}
          <div 
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* sliding menu */}
          <div className="fixed right-0 top-0 h-full w-[75%] max-w-[300px] bg-[#043873] text-white z-50 p-6 animate-slideIn">
            <button onClick={() => setOpen(false)} className="mb-6">
              <img src="/close.svg" className="w-6" />
            </button>

            <div className="flex flex-col gap-5">
              {["Products", "Solutions", "Resources", "Pricing"].map((item) => (
                <button key={item} className="text-[18px] text-left hover:text-[#4F9CF9]">
                  {item}
                </button>
              ))}

              <button className="bg-[#FFE492] h-[45px] text-[16px] rounded-[8px] text-[#043873] font-medium hover:scale-105 transition md:hidden">
                Login
              </button>
              <button className="bg-[#4F9CF9] h-[45px] text-[16px] rounded-[8px] font-medium hover:scale-105 transition md:hidden">
                Try Free
              </button>
            </div>
          </div>
        </>
      )}

      {/* Animations */}
      <style>{`
        @keyframes slideIn {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
        .animate-slideIn { animation: slideIn .3s ease-out; }
      `}</style>
    </nav>
  );
}
