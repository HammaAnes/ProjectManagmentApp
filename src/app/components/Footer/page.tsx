export default function Footer() {
  return (
    <div className="bg-[#043873] flex justify-center pt-24 pb-8 px-4">
      <div className="w-full max-w-[1480px] flex flex-col gap-12">

        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-[260px]">
            <h1 className="text-white text-2xl lg:text-[28px] font-bold">NightByte</h1>
            <span className="text-white text-base lg:text-[18px] font-normal">
              Whitepace was created for the new ways we live and work. We make a better workspace around the world
            </span>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-3">
            <h1 className="text-white text-lg font-bold">Product</h1>
            <span className="text-white text-sm lg:text-base hover:text-[#FFE492] transition-colors">Overview</span>
            <span className="text-white text-sm lg:text-base hover:text-[#FFE492] transition-colors">Pricing</span>
            <span className="text-white text-sm lg:text-base hover:text-[#FFE492] transition-colors">Customer stories</span>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-3">
            <h1 className="text-white text-lg font-bold">Resources</h1>
            <span className="text-white text-sm lg:text-base hover:text-[#FFE492] transition-colors">Blog</span>
            <span className="text-white text-sm lg:text-base hover:text-[#FFE492] transition-colors">Guides & tutorials</span>
            <span className="text-white text-sm lg:text-base hover:text-[#FFE492] transition-colors">Help center</span>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h1 className="text-white text-lg font-bold">Company</h1>
            <span className="text-white text-sm lg:text-base hover:text-[#FFE492] transition-colors">About us</span>
            <span className="text-white text-sm lg:text-base hover:text-[#FFE492] transition-colors">Careers</span>
            <span className="text-white text-sm lg:text-base hover:text-[#FFE492] transition-colors">Media kit</span>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-4 max-w-[260px]">
            <h1 className="text-white text-2xl lg:text-[28px] font-bold">Try It Today</h1>
            <span className="text-white text-sm lg:text-base">
              Get started for free. Add your whole team as your needs grow.
            </span>

            <button className="bg-[#4F9CF9] w-full max-w-[186px] h-[50px] lg:h-[60px] text-sm lg:text-[18px] rounded-[8px] text-white font-medium flex justify-center gap-2.5 items-center hover:scale-105 transition-transform">
              Start today
              <img src="right_arrow.svg" alt="arrow" className="w-4 lg:w-5" />
            </button>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-[#2E4E73] pt-6 flex flex-col lg:flex-row justify-between items-center gap-4">

          {/* Left text group */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-white text-sm lg:text-base">
            <span className="flex items-center gap-2">
              <img src="Language.svg" alt="lang" /> English 
              <img src="Down Arrow.svg" alt="/" />
            </span>
            <span>Terms & privacy</span>
            <span>Security</span>
            <span>Status</span>
            <span>©2021 Whitepace LLC.</span>
          </div>

          {/* Social icons */}
          <div className="flex gap-4">
            <img src="/_x30_1._Facebook.svg" alt="fb" className="w-5 lg:w-6" />
            <img src="/Twitter.svg" alt="twitter" className="w-5 lg:w-6" />
            <img src="/Linkedin.svg" alt="linkedin" className="w-5 lg:w-6" />
          </div>

        </div>

      </div>
    </div>
  );
}
