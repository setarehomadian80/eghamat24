"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import hotels from "@/data/hotels.json";
import detailHotels from "@/data/detailHotel.json";
import detailAccommodation from "@/data/detailAccommodation.json";

import GalleryList from "./GalleryList";

import "swiper/css";
import "swiper/css/pagination";

type Props = {
  slug: string;
  type: "hotel" | "accommodation";
};

export default function HotelGallery({ slug, type }: Props) {


  const hotel = hotels.find((item) => item.slug === slug);

  const detail =
    type === "hotel"
      ? detailHotels.find((item) => item.slug === slug)
      : detailAccommodation.find((item) => item.slug === slug);


  const [showGallery, setShowGallery] = useState(false);


  if (!detail) return null;


  const mainImage =
    type === "hotel"
      ? hotel?.image
      : detail.gallery[0];


  if (!mainImage) return null;


  const images = [
    mainImage,
    ...detail.gallery.filter((img) => img !== mainImage),
  ];


  const propertyName =
    type === "hotel"
      ? hotel?.name || ""
      : detail.title;


  const [activeImage, setActiveImage] = useState(images[0]);


  // نمایش گالری کامل
  if (showGallery) {
    return (
      <GalleryList
        slug={slug}
        type={type}
        name={propertyName}
        onClose={() => setShowGallery(false)}
      />
    );
  }


  return (
    <section className="w-full overflow-hidden">


      {/* ================= موبایل ================= */}

      <div className="block md:hidden">

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        >

          {images.map((image, index) => (

            <SwiperSlide key={index}>

              <div className="relative h-[250px] w-full">

                <Image
                  src={image}
                  alt={propertyName}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover!"
                />

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>



      {/* ================= تبلت و دسکتاپ ================= */}

      <div
        className="
          hidden
          md:grid
          md:grid-cols-4
          gap-2
          h-[220px]
          lg:h-[300px]
          xl:h-[350px]
          2xl:h-[400px]
          md:mt-10
        "
      >


        {/* عکس بزرگ */}

        <div className="relative col-span-2">

          <Image
            src={activeImage}
            alt={propertyName}
            fill
            priority
            sizes="60vw"
            className="rounded-xl object-cover"
          />

        </div>



        {/* عکس های کوچک */}

        <div className="grid grid-cols-2 gap-2 col-span-2 relative">


          {images.slice(1, 5).map((image, index) => (

            <button
              key={index}
              onClick={() => setActiveImage(image)}
              className="relative overflow-hidden rounded-xl"
            >

              <Image
                src={image}
                alt={`${propertyName}-${index}`}
                fill
                sizes="20vw"
                className={`
                  object-cover
                  transition
                  duration-200
                  ${
                    activeImage === image
                      ? "brightness-75"
                      : "hover:brightness-90"
                  }
                `}
              />

            </button>

          ))}



          {/* دکمه مشاهده همه */}

          <button
            onClick={() => setShowGallery(true)}
            className="
              absolute
              bottom-3
              left-3
              bg-white
              text-gray-800
              px-5
              py-2
              rounded-lg
              shadow-md
              text-sm
              font-medium
              hover:bg-gray-100
              transition
            "
          >
            مشاهده همه
          </button>


        </div>


      </div>


    </section>
  );
}