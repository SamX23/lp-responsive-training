import HeroSection from "../../HeroSection";
import Layout from "../../Layout";
import { homeObjFour, homeObjThree, homeObjTwo } from "./Data";

const Services = () => {
  return (
    <Layout>
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
    </Layout>
  );
};

export default Services;
