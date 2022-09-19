import HeroSection from "../../HeroSection";
import Layout from "../../Layout";
import PricingSection from "../../PricingSection";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "./Data";

const home = () => {
  return (
    <Layout>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <PricingSection />
      <HeroSection {...homeObjFour} />
    </Layout>
  );
};

export default home;
