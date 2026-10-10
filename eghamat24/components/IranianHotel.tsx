"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const banners = [
  {
    linkHotel: "/iranianHotel/tehran.jpg",
    title: "هتل های تهران",
  },
  {
    linkHotel: "/iranianHotel/yazd.jpg",
    title: "هتل های یزد",
  },
  {
    linkHotel: "/iranianHotel/tabriz.jpg",
    title: "هتل های تبریز",
  },
  {
    linkHotel: "/iranianHotel/shiraz.jpg",
    title: "هتل های شیراز",
  },
  {
    linkHotel: "/iranianHotel/gorgan.jpg",
    title: "هتل های گرگان",
  },
  {
    linkHotel: "/iranianHotel/bushehr.jpg",
    title: "هتل های بوشهر",
  },
  {
    linkHotel: "/iranianHotel/esfahan.jpg",
    title: "هتل های اصفهان",
  },
  {
    linkHotel: "/iranianHotel/kish.jpg",
    title: "هتل های کیش",
  },
  {
    linkHotel: "/iranianHotel/mashhad.jpg",
    title: "هتل های مشهد",
  },
  {
    linkHotel: "/iranianHotel/gorgan.jpg",
    title: "هتل های گرگان",
  },
];

export default function IranianHotelSlider() {
  return (
    <section className="w-full" dir="rtl">
      <div className="my-4 flex justify-between relative z-10">
        <h1 className="font-bold text-[16px] lg:text-[18px]">هتل های ایران</h1>
        <div className="flex text-[14px] lg:text-[16px]
         items-center text-[#37a0fb]">
          <Link href="#">همه شهر ها </Link>
          <ChevronLeft />
        </div>
      </div>
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        // direction="rtl"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        slidesPerView={1}
        spaceBetween={16}
        breakpoints={{
          0: {
            slidesPerView: 3, // موبایل
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        className="rounded-xl "
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div>
              <div className="relative h-35 md:h-50
               lg:h-65 overflow-hidden rounded-lg">
                <Image
                  src={banner.linkHotel}
                  alt={banner.title}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                  className="object-cover"
                />
              </div>

              <p className="mt-2 text-center text-[12px] lg:text-[14px] font-medium">
                {banner.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
