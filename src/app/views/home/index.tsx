import CompanyOverviewSection from "./components/companyOverviewSection";
import HeroSection from "./components/heroSection";
import ProductServiceSection from "./components/productServiceSection";
import TestimonialSection from "./components/testimonialSection";

export default function HomeView() {
  return (
    <div>
      <div className="grid grid-rows-1 grid-flow-row gap-4">
        <div id="section1"><HeroSection /></div>
        <div id="section2"><CompanyOverviewSection /></div>
        <div id="section3"><ProductServiceSection /></div>
        <div id="section4"><TestimonialSection /></div>
      </div>
    </div>
  );
}