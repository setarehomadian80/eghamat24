"use client";

import { Hotel, Search, X } from "lucide-react";
import { useState } from "react";
import citiesHotel from "@/data/citiesHotel.json";
import hotels from "@/data/hotels.json";

type Props = {
  onClose: () => void;
};

export default function SearchPanel({ onClose }: Props) {
  const [query, setQuery] = useState("");

  const city =
    query.trim() === ""
      ? undefined
      : citiesHotel.find((item) =>
          item.name.includes(query.trim())
        );

  const cityId = city?.cityId;

  const filteredHotel =
    cityId !== undefined
      ? hotels.filter((hotel) => hotel.cityId === cityId)
      : [];

  return (
    <div className="fixed inset-0 bg-white z-[60] p-4" dir="rtl">

      {/* header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-[16px]">
          جستجو
        </h2>

        <button onClick={onClose}>
          <X size={20} />
        </button>
      </div>


      {/* input */}
      <div className="relative">

        <Search
          size={17}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
          placeholder="نام هتل یا شهر را جستجو کنید"
          autoFocus
          className="
          h-11
          w-full
          rounded-lg
          border
          border-[#E5E7EB]
          pr-10
          pl-3
          text-[13px]
          outline-none
          "
        />

      </div>


      {/* hotels */}
      <div className="mt-5">

        {filteredHotel.map((hotel)=>(

          <div
            key={hotel.id}
            className="
            flex
            items-center
            justify-between
            gap-3
            py-4
            border-b
            "
          >

            {/* name */}
            <div
              className="
              flex
              items-center
              gap-2
              flex-1
              min-w-0
              "
            >

              <Hotel
                size={20}
                className="shrink-0"
              />

              <span
                className="
                truncate
                text-[12px]
                "
              >
                {hotel.name}
              </span>

            </div>


            {/* price */}
            <div
              className="
              whitespace-nowrap
              text-[12px]
              "
            >
              از {hotel.price} / شبی
            </div>


          </div>

        ))}

      </div>

    </div>
  );
}