export default function Hero() {
  return (
    <div className="min-h-[829px] bg-[#043873] flex justify-center items-center bg-[url('/Element_wow.svg')] bg-cover bg-center w-full">
      <div className="max-w-[1289px] w-full flex flex-col lg:flex-row justify-between items-center px-4 gap-10 py-10">

        {/* Left section */}
        <div className="text-white leading-tight flex flex-col gap-6 text-center lg:text-left max-w-xl">
          <h1 className="font-bold text-[36px] sm:text-[42px] lg:text-[54px]">
            Get More Done with NightByte
          </h1>

          <p className="text-[16px] sm:text-[18px]">
            Project management software that enables your teams to collaborate, plan,
            <br className="hidden sm:block" />
            analyze and manage everyday tasks
          </p>

          <button className="bg-[#4F9CF9] w-[200px] sm:w-[227px] h-[55px] sm:h-[60px] text-[16px] sm:text-[18px] rounded-[8px] text-white font-medium flex justify-center gap-2.5 items-center hover:scale-105 transform transition-transform self-center lg:self-start">
            Try Whitepace free 
            <img src="right_arrow.svg" alt="right_arrow" />
          </button>
        </div>

        {/* Right illustration */}
        <div className="flex justify-center w-full lg:w-auto">
          <img
            src="/vi_1.svg"
            alt="illustration"
            className="w-full max-w-[600px] lg:max-w-[750px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
