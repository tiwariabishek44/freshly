import Header from "../components/Header";
import CategoryNav from "../components/CategoryNav";
import HeroSection from "../components/HeroSection";
import FeaturedProducts from "../components/FeaturedProducts";
import PromoBannerRow from "../components/PromoBannerRow";
import BestSellersSection from "../components/BestSellersSection";
import TrendingProducts from "../components/TrendingProducts";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import NewsletterSection from "../components/NewsletterSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      {/* <CategoryNav /> */}
      <HeroSection />
      <main>
        <FeaturedProducts />
        <PromoBannerRow />
        <BestSellersSection />
        <TrendingProducts />
        {/* <ServicesSection /> */}
        {/* <TestimonialsSection /> */}
        {/* <NewsletterSection /> */}
      </main>
    </>
  );
}
