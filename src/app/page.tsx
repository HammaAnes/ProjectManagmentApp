import NavBar from "./components/Nav/page";
import Hero from "./components/Hero/page";
import PM from "./components/ProjectManagement/page"
import WorkTogether from "./components/WorkTogether/page";
import UseAsExtention from "./components/UseAsExtention/page";
import CustomYourNeed from "./components/CustomYourNeed/page";
import ChoosePlan from "./components/ChoosePlan/page";

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <PM></PM>
      <WorkTogether></WorkTogether>
      <UseAsExtention></UseAsExtention>
      <CustomYourNeed></CustomYourNeed>
      <ChoosePlan></ChoosePlan>
    </div>
  );
}
