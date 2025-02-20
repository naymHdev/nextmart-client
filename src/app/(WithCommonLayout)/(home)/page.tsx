import CategorySection from "@/components/modules/home/category";
import FeaturedProducts from "@/components/modules/home/featuredProducts";
import FlashSale from "@/components/modules/home/flashSale";
import HeroSection from "@/components/modules/home/heroSection";

const HomePage = async () => {
  return (
    <>
      <div>
        <HeroSection />
        <CategorySection />
        <FeaturedProducts />
        <FlashSale />
      </div>
    </>
  );
};

export default HomePage;
