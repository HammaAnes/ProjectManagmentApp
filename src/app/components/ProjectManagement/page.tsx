export default function PM() {
  return (
    <div className="pt-[100px] flex justify-center w-full px-4 overflow-x-hidden">
      <div className="
        max-w-[1289px] w-full flex flex-col lg:flex-row items-center lg:items-start 
        gap-6 md:gap-10 
        bg-[url('/gray_element_wow.svg')] bg-no-repeat bg-left-bottom
      ">

        {/* Text Section */}
        <div className="flex flex-col gap-6 text-center lg:text-left max-w-xl">
          <h1 className="font-bold text-[38px] sm:text-[50px] lg:text-[72px] text-[#212529] leading-tight">
            Project <br /> Management
          </h1>

          <p className="text-[16px] sm:text-[18px] text-[#212529]">
            Images, videos, PDFs and audio files are supported. Create math expressions
            and diagrams directly from the app. Take photos with the mobile app and save
            them to a note.
          </p>

          <button className="bg-[#4F9CF9] w-[200px] sm:w-[227px] h-[55px] sm:h-[60px] 
            text-[16px] sm:text-[18px] rounded-[8px] text-white font-medium 
            flex justify-center gap-2.5 items-center hover:scale-105 transition-transform 
            mx-auto lg:mx-0"
          >
            Get started <img src="right_arrow.svg" alt="right_arrow" />
          </button>
        </div>

        {/* Image */}
        <img
          src="/vi_2.svg"
          alt="illustration"
          className="
            w-full 
            max-w-[420px] sm:max-w-[520px] md:max-w-[600px] lg:max-w-[748px]
            object-contain
          "
        />
      </div>
    </div>
  );
}
