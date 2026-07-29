import React from "react";
import SearchBoxMainPage from "../components/SearchBox/box/searchBoxMainPage"

export default function Home() {
  return (
    <main className="w-full xl:container mx-auto">
      <div className="w-full p-5">
        {/* text */}
        <div >
          <h1 className="text-[16px] md:text-[24px] font-bold mb-5">رزرو هتل و هتل آپارتمان</h1>
          <p className="text-[10px] md:text-[16px] font-medium">اولین ارائه دهنده رسمی خدمات تخصصی رزرواسیون هتل و هتل آپارتمان در کشور</p>
        </div>
        {/* search box */}
        <div className="mt-12">
          <SearchBoxMainPage />
        </div>
      </div>
    </main>
  );
}
