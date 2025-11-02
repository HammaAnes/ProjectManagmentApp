export default function UseAsExtention() {
  return (
    <div className="min-h-[700px] bg-[#043873] flex justify-center items-center mt-[140px] px-4">
      <div className="max-w-[1289px] w-full flex flex-col lg:flex-row justify-between items-center gap-10">

        {/* Text */}
        <div className="text-white flex flex-col gap-6 text-center lg:text-left max-w-xl">
          <h1 className="font-bold text-[38px] sm:text-[48px] lg:text-[54px] leading-tight">
            Use as Extension
          </h1>

          <p className="text-[16px] sm:text-[18px] leading-relaxed">
            Use the web clipper extension, available on Chrome and Firefox, to save web pages
            or take screenshots as notes.
          </p>

          <button className="bg-[#4F9CF9] w-[200px] sm:w-[227px] h-[55px] sm:h-[60px] text-[16px] sm:text-[18px] rounded-[8px] text-white font-medium flex justify-center items-center gap-2 mx-auto lg:mx-0 hover:scale-105 transition">
            Let's Go <img src="/right_arrow.svg" alt="right_arrow" />
          </button>
        </div>

        {/* Image */}
        <img
          src="/vi_3.svg"
          alt="illustration"
          className="w-full max-w-[750px] lg:max-w-[820px] object-contain"
        />

      </div>
    </div>
  );
}
