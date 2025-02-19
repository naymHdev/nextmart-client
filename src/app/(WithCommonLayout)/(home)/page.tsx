import CategorySection from "@/components/modules/home/category";
import FeaturedProducts from "@/components/modules/home/featuredProducts";
import HeroSection from "@/components/modules/home/heroSection";

const HomePage = async () => {
  return (
    <>
      <div>
        <HeroSection />
        <CategorySection />
        <FeaturedProducts />
      </div>
    </>
  );
};

export default HomePage;
