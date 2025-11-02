export default function CustomYourNeed() {
  return (
    <div className="pt-[140px] flex justify-center px-4">
      <div className="max-w-[1289px] w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-[98px]">

        {/* Image */}
        <img
          src="/vi_4.svg"
          alt="illustration"
          className="w-full max-w-[748px] object-contain"
        />

        {/* Text */}
        <div className="flex flex-col justify-center max-w-[700px] text-center lg:text-left gap-6">
        
          <h1 className="font-bold text-[38px] sm:text-[48px] lg:text-[72px] text-[#212529] leading-tight">
            Customise it to <br /> your needs
          </h1>

          <p className="text-[16px] sm:text-[18px] text-[#212529] font-normal leading-relaxed">
            Customise the app with plugins, custom themes and multiple text editors (Rich Text 
            or Markdown). Or create your own scripts and plugins using the Extension API.
          </p>

          <button className="bg-[#4F9CF9] w-[200px] sm:w-[227px] h-[55px] sm:h-[60px] text-[16px] sm:text-[18px] rounded-[8px] text-white font-medium flex justify-center gap-2.5 items-center mx-auto lg:mx-0 hover:scale-105 transition">
            Let's Go <img src="right_arrow.svg" alt="right_arrow" />
          </button>
        </div>

      </div>
    </div>
  );
}
