export default function WorkTogether() {
  return (
    <div className="pt-[100px] flex justify-center w-full px-4">
      <div className="max-w-[1289px] w-full flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-[100px]">

        {/* Image */}
        <img
          src="/Work Together Image.svg"
          alt="illustration"
          className="w-full max-w-[650px] lg:max-w-[748px] object-contain"
        />

        {/* Text */}
        <div className="flex flex-col justify-center max-w-xl text-center lg:text-left gap-6">
          <h1 className="font-bold text-[38px] sm:text-[50px] lg:text-[72px] text-[#212529] leading-tight">
            Work together
          </h1>

          <p className="text-[16px] sm:text-[18px] text-[#212529]">
            With whitepace, share your notes with your colleagues and collaborate on them.
            You can also publish a note to the internet and share the URL with others.
          </p>

          <button className="bg-[#4F9CF9] w-[200px] sm:w-[227px] h-[55px] sm:h-[60px] text-[16px] sm:text-[18px] rounded-[8px] text-white font-medium flex justify-center gap-2.5 items-center hover:scale-105 transition-transform mx-auto lg:mx-0">
            Try it now <img src="right_arrow.svg" alt="right_arrow" />
          </button>
        </div>

      </div>
    </div>
  );
}
