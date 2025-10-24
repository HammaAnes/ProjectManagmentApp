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
    <div>
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
      <div className="bg-[#043873] flex justify-center items-center min-h-[574px] bg-[url('/gray_element_wow_2.svg')] bg-left bg-no-repeat">
        <div className="flex flex-col items-center justify-between h-[294px]">
          <div className="max-w-[1064px] flex flex-col items-center">
            <h1 className="text-white font-bold text-7xl mb-6">Your work, everywhere you are</h1>
            <p className="text-white text-[18px] font-normal">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and </p>
            <p className="text-white text-[18px] font-normal">OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
          </div>
          <button className="bg-[#4F9CF9] w-[227px] h-[60px] text-[18px] rounded-[8px] text-white font-medium flex justify-center gap-2.5 items-center hover:scale-105 transform transition-transform">Try it now <img src="right_arrow.svg" alt="right_arrow" /></button>
        </div>
      </div>
</Fade>

      {/* 100% Data Section */}
      <Fade triggerOnce direction="up" fraction={0.5}>
        <div className="pt-[140px] flex justify-center">
            <div className="min-w-[732px] flex flex-col justify-center">
                <div className="h-[411px] max-w-[800px] flex flex-col justify-evenly items-start">
                    <h1 className="font-bold text-[72px] text-[#212529]">100% your data</h1>
                    <p className="text-[18px] font-normal text-[#212529]">The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but <br /> yourself can access them.</p>
                    <button className="bg-[#4F9CF9] w-[227px] h-[60px] text-[18px] rounded-[8px] text-white font-medium flex justify-center gap-2.5 items-center hover:scale-105 transform transition-transform">Get started <img src="right_arrow.svg" alt="right_arrow" /></button>
                </div>
            </div>
            <img
            src="/100_your_data.svg"
            alt="illustration"
            className="max-w-[748px] min-h-[547px]"
            />
        </div>
      </Fade>

        {/* Our Sponsors section*/}
<Fade triggerOnce direction="up" fraction={0.5}>
        <div className="flex flex-col justify-center mt-[140px] items-center mb-[100px] gap-24">
          <h1 className="text-[#212529] text-[72px] font-bold">Our sponsors</h1>
          <div className="flex lg:w-[1482px] justify-between">
            <img src="/Apple.svg" alt="" />
            <img src="/Microsoft.svg" alt="" />
            <img src="/Slack.svg" alt="" />
            <img src="/Google.svg" alt="" />
          </div>
        </div>
</Fade>
        {/* Work with Your Favorite Apps*/}
<Fade triggerOnce direction="up" fraction={0.5}>
        <div className="min-h-[829px] bg-[#043873] flex justify-center items-center bg-[url('/Element.svg')] bg-cover bg-center w-full max-w-screen">
          
            <div className="max-w-[1480px] w-full flex justify-evenly lg:gap-[100px] lg:max-h-[470px] items-center">

                <img
                    src="/Apps.svg"
                    alt="illustration"
                    className="max-w-[750px] min-h-[549px]"
                />

                <div className=" text-white leading-tight flex flex-col justify-evenly gap-[60px] ">
                    <h1 className="font-bold text-[72px]">Work with Your Favorite Apps Using NightByte</h1>
                    <span className="text-[18px] font-normal">NightByte teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.</span>
                    <button className="bg-[#4F9CF9] w-[227px] h-[60px] text-[18px] rounded-[8px] text-white font-medium flex justify-center gap-2.5 items-center hover:scale-105 transform transition-transform">Read more <img src="right_arrow.svg" alt="right_arrow" /></button>
                </div>
  
            </div>
        </div>
</Fade>
        {/* Work with Your Favorite Apps*/}
<Fade triggerOnce direction="up" fraction={0.5}>
        <div className="flex flex-col justify-center mt-[140px] items-center mb-[100px] gap-24">
          
          <h1 className="text-[#212529] text-[72px] font-bold ">What Our Clients Says</h1>
          <div className="flex lg:w-[1482px] justify-between">
            <div className="flex justify-center mb-[140px]">
              <div className="flex justify-between min-w-[1481px] min-h-[498.46px] gap-[32px]">
                <div className="lg:min-w-[472.333px] rounded-[10px] flex flex-col justify-center items-center shadow-[15px_10px_50px_rgba(0,0,0,0.1)]">
                  <div className="flex flex-col justify-between lg:max-w-[391.66px] gap-[60px]">
                    <div className="flex flex-col items-start gap-[32px]">
                      <img src="Quote.svg" alt="" />
                      <span className="lg:text-[18px] text-[#212529]">Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</span>
                    </div>
                    <div className="flex justify-between">
                      <img src="/Avatar.svg" alt="" />
                      <div className="flex flex-col justify-between items-start">
                        <span className="text-[#212529] text-2xl font-semibold">Oberon Shaw, MCH</span>
                        <span className="text-[#212529] text-[16px] font-normal">Head of Talent Acquisition, North America</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#4F9CF9] lg:min-w-[472.333px] rounded-[10px] flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-between lg:max-w-[391.66px] gap-[60px]">
                    <div className="flex flex-col items-start gap-[32px]">
                      <img src="Group.svg" alt="" />
                      <span className="lg:text-[18px] text-[#FFFFFF]">Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</span>
                    </div>
                    <div className="flex justify-between">
                      <img src="/Avater.svg" alt="" />
                      <div className="flex flex-col justify-between items-start">
                        <span className="text-[#043873] text-2xl font-semibold">Oberon Shaw, MCH</span>
                        <span className="text-[#FFFFFF] text-[16px] font-normal">Head of Talent Acquisition, North America</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#4F9CF9] lg:min-w-[472.333px] rounded-[10px] flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-between lg:max-w-[391.66px] gap-[60px]">
                    <div className="flex flex-col items-start gap-[32px]">
                      <img src="Group.svg" alt="" />
                      <span className="lg:text-[18px] text-[#FFFFFF]">Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</span>
                    </div>
                    <div className="flex justify-between">
                      <img src="/Avatar.svg" alt="" />
                      <div className="flex flex-col justify-between items-start">
                        <span className="text-[#043873] text-2xl font-semibold">Oberon Shaw, MCH</span>
                        <span className="text-[#FFFFFF] text-[16px] font-normal">Head of Talent Acquisition, North America</span>
                      </div>
                    </div>
                  </div>
                </div>
                </div>

            </div>
        </div>  
      </div>
</Fade>
      {/* Try NightByte Section*/}

      <div className="bg-[#043873] min-h-[705px] flex justify-center">

        <div className="flex flex-col items-center gap-[40px] max-w-[608px] mt-36 mb-8">  
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-white text-[72px] text-center mb-6">Try Whitepace today</h1>
            <span className="text-2xl text-white font-normal">Get started for free.</span>
            <span className="text-2xl text-white font-normal">Add your whole team as your needs grow.</span>
          </div>
          <button className="bg-[#4F9CF9] w-[227px] h-[60px] text-[18px] rounded-[8px] text-white font-medium flex justify-center gap-2.5 items-center hover:scale-105 transform transition-transform">Let's Go <img src="right_arrow.svg" alt="right_arrow" /></button>
          <span className="text-2xl text-white font-normal">On a big team? Contact sales</span>
          <div className="flex justify-between min-w-[260px]">
            <img src="/apple-white-logo 2.svg" alt="" />
            <img src="windows-logo 1.svg" alt="" />
            <img src="android-logo 1.svg" alt="" />
          </div>
        </div>

      </div>


      <Footer></Footer>

    </div>
  );
}
