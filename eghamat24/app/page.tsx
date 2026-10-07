"use client";
import SearchBoxMainPage from "../components/SearchBox/box/searchBoxMainPage";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import BannerLeft from "@/components/HeroBanner/BannerLeft";
import IranianHotelSlider from "@/components/IranianHotel";
import CanseledHotel from "@/components/CanseledHotel/CanseledHotel";
import TopHotels from "@/components/TopHotels";
import TopDiscountHotels from "../components/TopDiscountHotel";
import StatsSection from "../components/StatsSection";
import Blog from "@/components/Blog";
import Banner from "@/components/Banner";
import HotelsGroup from "@/components/HotelsGroup";
import FAQDropdown from "@/components/FaqSection";
import HotelInformation from "@/components/HotelInformation";

export default function Home() {
  return (
    <main className="w-full 2xl:container mx-auto">
      <div className="w-full py-5 px-5 lg:px-14 ">
        {/* text */}
        <div>
          <h1 className="text-[16px] md:text-[24px] font-bold mb-5">
            رزرو هتل و هتل آپارتمان
          </h1>
          <p className="text-[10px] md:text-[16px] font-medium">
            اولین ارائه دهنده رسمی خدمات تخصصی رزرواسیون هتل و هتل آپارتمان در
            کشور
          </p>
        </div>
        {/* search box */}
        <div className="mt-12">
          <SearchBoxMainPage />
        </div>
        {/* Hero Banner */}
        <div
          className="mt-12 md:grid
         md:grid-cols-6
         md:gap-4"
        >
          <div className="col-span-4">
            <HeroBanner />
          </div>
          <div className="hidden md:block col-span-2">
            <BannerLeft />
          </div>
        </div>
        {/* IranianHotelSlider */}
        <div className="mt-24">
          <IranianHotelSlider />
        </div>
        {/* CanseledHotel box*/}
        <div className="mt-24">
          <CanseledHotel />
        </div>
        {/* top hotels */}
        <div className="mt-24">
          <TopHotels />
        </div>

        {/* top discount hotels */}
        <div className="mt-24">
          <TopDiscountHotels />
        </div>
          <div className="mt-24">
          <StatsSection />
        </div>
         <div className="mt-24">
          <Blog />
        </div>
        <div className="mt-24">
          <Banner />
        </div>
         <div className="mt-24">
          <HotelsGroup />
        </div>
        <div className="mt-24">
          <FAQDropdown />
        </div>
        <div className="mt-24">
          <HotelInformation />
        </div>
        
      </div>
    </main>
  );
}
