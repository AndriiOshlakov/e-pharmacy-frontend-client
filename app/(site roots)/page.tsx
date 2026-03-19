import Hero from "@/components/Hero/Hero";
import NearestStores from "@/components/NearestStores/NearestStores";
import Promo from "@/components/Promo/Promo";
import PromoBanners from "@/components/PromoBanners/PromoBanners";
import Reviews from "@/components/Reviews/Reviews";
export const dynamic = "force-dynamic";
const Home = () => {
  return (
    <main style={{ backgroundColor: "#f7f8fa" }}>
      <Hero />
      <PromoBanners />
      <NearestStores />
      <Promo />
      <Reviews />
    </main>
  );
};

export default Home;
