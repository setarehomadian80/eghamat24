import React from "react";
import SearchBoxMainPage from "../components/SearchBox/box/searchBoxMainPage";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import BannerLeft from "@/components/HeroBanner/BannerLeft";
import IranianHotelSlider from "@/components/IranianHotel";

export default function Home() {
  return (
    <main className="w-full 2xl:container mx-auto">
      <div className="w-full py-5 px-5 lg:px-14 xl:px-30 2xl:px-40">
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
      </div>
    </main>
  );
}
