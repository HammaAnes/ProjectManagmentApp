import NavBar from "./components/Nav/page";
import Hero from "./components/Hero/page";
import PM from "./components/ProjectManagement/page"
import WorkTogether from "./components/WorkTogether/page";
import UseAsExtention from "./components/UseAsExtention/page";
import CustomYourNeed from "./components/CustomYourNeed/page";
import ChoosePlan from "./components/ChoosePlan/page";
import Footer from "./components/Footer/page";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  return (
    <div className="w-full">
      <NavBar></NavBar>
      <Hero></Hero>
      <Fade triggerOnce direction="up" fraction={0.5}>
        <PM></PM>
      </Fade>
      <Fade triggerOnce direction="up" fraction={0.5}>
        <WorkTogether></WorkTogether>
      </Fade>
      <Fade triggerOnce direction="up" fraction={0.5}>
        <UseAsExtention></UseAsExtention>
      </Fade>
      <Fade triggerOnce direction="up" fraction={0.5}>
        <CustomYourNeed></CustomYourNeed>
      </Fade>
      <Fade triggerOnce direction="up" fraction={0.5}>
        <ChoosePlan></ChoosePlan>
      </Fade>

      {/* You Work Everywhere Section */}
<Fade triggerOnce direction="up" fraction={0.5}>
  <div className="bg-[#043873] flex justify-center items-center min-h-[574px] bg-[url('/gray_element_wow_2.svg')] bg-left bg-no-repeat px-4 py-16 sm:py-20">
    <div className="flex flex-col items-center justify-between gap-8 sm:gap-10 md:gap-12 text-center">

      {/* Text Block */}
      <div className="max-w-[1064px] flex flex-col items-center">
        <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
          Your work, everywhere you are
        </h1>

        <p className="text-white text-base sm:text-lg md:text-[18px] font-normal max-w-2xl mt-2">
          Access your notes from your computer, phone or tablet by synchronising 
          with various services, including whitepace, Dropbox and OneDrive.
        </p>
        
        <p className="text-white text-base sm:text-lg md:text-[18px] font-normal max-w-2xl mt-1">
          The app is available on Windows, macOS, Linux, Android and iOS. 
          A terminal app is also available!
        </p>
      </div>

      {/* Button */}
      <button className="
        bg-[#4F9CF9]
        w-full sm:w-[227px]
        h-[55px] sm:h-[60px]
        text-base sm:text-[18px]
        rounded-[8px] text-white font-medium 
        flex justify-center gap-2.5 items-center 
        hover:scale-105 transform transition-transform
      ">
        Try it now 
        <img src="right_arrow.svg" alt="right_arrow" />
      </button>

    </div>
  </div>
</Fade>


{/* 100% Data Section */}
<Fade triggerOnce direction="up" fraction={0.5}>
  <div className="pt-24 md:pt-[140px] flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-4">

    {/* Text */}
    <div className="flex flex-col md:max-w-[600px] text-center md:text-left gap-6">
      <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[72px] text-[#212529] leading-tight">
        100% your data
      </h1>

      <p className="text-base sm:text-lg md:text-[18px] text-[#212529] font-normal">
        The app is open source and your notes are saved to an open format, so you'll always have
        access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one
        but yourself can access them.
      </p>

      <button className="
        bg-[#4F9CF9]
        w-full sm:w-[227px]
        h-[50px] sm:h-[60px]
        text-base sm:text-[18px]
        rounded-[8px]
        text-white font-medium 
        flex justify-center gap-2.5 items-center
        hover:scale-105 transform transition-transform
        mx-auto md:mx-0
      ">
        Get started
        <img src="right_arrow.svg" alt="right_arrow" />
      </button>
    </div>

    {/* Image */}
    <img
      src="/100_your_data.svg"
      alt="illustration"
      className="max-w-[600px] w-full md:w-auto"
    />

  </div>
</Fade>


{/* Our Sponsors section*/}
<Fade triggerOnce direction="up" fraction={0.5}>
  <div className="flex flex-col justify-center items-center mt-24 md:mt-[140px] mb-20 md:mb-[100px] gap-12 md:gap-24 px-6">

    {/* Title */}
    <h1 className="text-[#212529] font-bold text-4xl sm:text-5xl md:text-[72px] text-center">
      Our sponsors
    </h1>

    {/* Logos */}
    <div className="
      flex flex-wrap justify-center items-center 
      gap-8 md:gap-16 
      max-w-[1500px] w-full
    ">
      <img src="/Apple.svg" alt="Apple" className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain" />
      <img src="/Microsoft.svg" alt="Microsoft" className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain" />
      <img src="/Slack.svg" alt="Slack" className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain" />
      <img src="/Google.svg" alt="Google" className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain" />
    </div>

  </div>
</Fade>

{/* Work with Your Favorite Apps */}
<Fade triggerOnce direction="up" fraction={0.5}>
  <div className="bg-[#043873] w-full bg-[url('/Element.svg')] bg-cover bg-center min-h-[829px] flex justify-center items-center px-6 py-20">

    <div className="
      w-full max-w-[1480px] 
      flex flex-col lg:flex-row 
      justify-between lg:justify-evenly 
      items-center 
      gap-16 lg:gap-[100px]
    ">

      {/* Illustration */}
      <img
        src="/Apps.svg"
        alt="Apps illustration"
        className="
          w-full max-w-[650px] 
          h-auto
          md:max-w-[750px]
        "
      />

      {/* Text Block */}
      <div className="
        text-white leading-tight 
        flex flex-col gap-8 md:gap-[60px] 
        max-w-[600px] 
        text-center lg:text-left
      ">
        <h1 className="
          font-bold 
          text-4xl sm:text-5xl md:text-[56px] lg:text-[72px]
        ">
          Work with Your Favorite Apps Using NightByte
        </h1>

        <span className="text-[16px] sm:text-[18px] font-normal">
          NightByte teams up with your favorite software. Integrate with over
          1000+ apps with Zapier to have all the tools you need for your
          project success.
        </span>

        <div className="flex justify-center lg:justify-start">
          <button className="
            bg-[#4F9CF9] w-[200px] md:w-[227px] h-[55px] md:h-[60px] 
            text-[16px] md:text-[18px] 
            rounded-[8px] 
            text-white font-medium 
            flex justify-center items-center gap-2.5 
            hover:scale-105 transition-transform
          ">
            Read more <img src="/right_arrow.svg" alt="right_arrow" />
          </button>
        </div>
      </div>

    </div>
  </div>
</Fade>

{/* What our clients Say*/}
<Fade triggerOnce direction="up" fraction={0.5}>
  <div className="flex flex-col justify-center mt-[140px] items-center mb-[100px] gap-24">
      
    <h1 className="text-[#212529] text-[72px] font-bold">What Our Clients Say</h1>

    {/* Scroll Area */}
    <div className="w-full flex justify-center">
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 px-5 scrollbar-none"
           style={{ scrollBehavior: "smooth" }}>

        {/* Card 1 */}
        <div className="snap-center min-w-[90%] sm:min-w-[500px] max-w-[500px] rounded-[10px] flex flex-col justify-center items-center shadow-[15px_10px_50px_rgba(0,0,0,0.1)] p-10">
          <div className="flex flex-col justify-between gap-[60px]">
            <div className="flex flex-col items-start gap-[32px]">
              <img src="Quote.svg" alt="" />
              <span className="text-[18px] text-[#212529]">
                Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
              </span>
            </div>
            <div className="flex gap-4">
              <img src="/Avatar.svg" alt="" />
              <div className="flex flex-col">
                <span className="text-[#212529] text-2xl font-semibold">Oberon Shaw, MCH</span>
                <span className="text-[#212529] text-[16px]">Head of Talent Acquisition, North America</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="snap-center min-w-[90%] sm:min-w-[500px] max-w-[500px] bg-[#4F9CF9] rounded-[10px] flex flex-col justify-center items-center p-10">
          <div className="flex flex-col justify-between gap-[60px]">
            <div className="flex flex-col items-start gap-[32px]">
              <img src="Group.svg" alt="" />
              <span className="text-[18px] text-white">
                Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
              </span>
            </div>
            <div className="flex gap-4">
              <img src="/Avatar.svg" alt="" />
              <div className="flex flex-col">
                <span className="text-[#043873] text-2xl font-semibold">Oberon Shaw, MCH</span>
                <span className="text-white text-[16px]">Head of Talent Acquisition, North America</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="snap-center min-w-[90%] sm:min-w-[500px] max-w-[500px] bg-[#4F9CF9] rounded-[10px] flex flex-col justify-center items-center p-10">
          <div className="flex flex-col justify-between gap-[60px]">
            <div className="flex flex-col items-start gap-[32px]">
              <img src="Group.svg" alt="" />
              <span className="text-[18px] text-white">
                Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
              </span>
            </div>
            <div className="flex gap-4">
              <img src="/Avatar.svg" alt="" />
              <div className="flex flex-col">
                <span className="text-[#043873] text-2xl font-semibold">Oberon Shaw, MCH</span>
                <span className="text-white text-[16px]">Head of Talent Acquisition, North America</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    {/* Pagination / Dots */}
    <div className="flex gap-3 mt-5">
      <div className="w-3 h-3 rounded-full bg-[#4F9CF9]"></div>
      <div className="w-3 h-3 rounded-full bg-[#C4C4C4]"></div>
      <div className="w-3 h-3 rounded-full bg-[#C4C4C4]"></div>
    </div>

  </div>
</Fade>


{/* Try NightByte Section*/}

<div className="bg-[#043873] min-h-[705px] flex justify-center px-4 py-20">
  <div className="flex flex-col items-center gap-8 max-w-[608px] w-full text-center">

    <div className="flex flex-col items-center">
      <h1 className="font-bold text-white text-[40px] md:text-[56px] lg:text-[72px] leading-tight mb-4">
        Try Whitepace today
      </h1>

      <span className="text-lg md:text-2xl text-white font-normal">
        Get started for free.
      </span>
      <span className="text-lg md:text-2xl text-white font-normal">
        Add your whole team as your needs grow.
      </span>
    </div>

    <button className="bg-[#4F9CF9] w-[200px] md:w-[227px] h-[50px] md:h-[60px] text-[16px] md:text-[18px] rounded-[8px] text-white font-medium flex justify-center gap-2.5 items-center hover:scale-105 transform transition-transform">
      Let's Go 
      <img src="right_arrow.svg" alt="right_arrow" className="w-4 md:w-5"/>
    </button>

    <span className="text-lg md:text-2xl text-white font-normal">
      On a big team? Contact sales
    </span>

    <div className="flex justify-center md:justify-between w-full max-w-[260px] gap-6 flex-wrap">
      <img src="/apple-white-logo 2.svg" alt="" className="w-10 md:w-12" />
      <img src="windows-logo 1.svg" alt="" className="w-10 md:w-12" />
      <img src="android-logo 1.svg" alt="" className="w-10 md:w-12" />
    </div>

  </div>
</div>



      <Footer></Footer>

    </div>
  );
}
