import HeroSection from "../../HeroSection";
import Layout from "../../Layout";
import { homeObjFour, homeObjThree } from "./data";

const Products = () => {
  return (
    <Layout>
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
    </Layout>
  );
};

export default Products;
