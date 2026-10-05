import hotels from "@/data/hotels.json";
import accommodation from "@/data/accommodation.json";
import tours from "@/data/tour.json";
import Image from "next/image";

type Props = {
  slug: string;
  type: "hotel" | "accommodation" | "tour";
};

export default function AmenitiesAndReviews({ slug, type }: Props) {
  const hotel = type === "hotel"
    ? hotels.find((item) => item.slug === slug)
    : undefined;

  const accommodationProperty =
    type === "accommodation"
      ? accommodation.find((item) => item.slug === slug)
      : undefined;

  const tour =
    type === "tour"
      ? tours.find((item) => item.slug === slug)
      : undefined;

  const property = hotel || accommodationProperty || tour;

  if (!property) return null;

  return (
    <main className="mt-12">
      {/* Exclusive amenities */}
      <div>
        <strong
          className="
        my-6
        text-[16px] md:text-[18px] xl:text-[20px]
        "
        >
          امکانات اختصاصی {property.name}
        </strong>

        <div
          className="
          
        w-full 
        md:h-50
        mt-6
        flex
        border 
        rounded-lg 
        p-5
        md:flex-row
        justify-between 
        md:items-center
        "
        >
          {/* description */}
          <div className="h-full grid grid-cols-1 text-[12px]">
            {/* title */}
            {type !== "tour" ? (
              <>
                <h2 className="mb-4">
                  {hotel?.restaurant || accommodationProperty?.restaurant}
                </h2>

                <ul className="grid grid-col-1 md:grid-cols-2 gap-y-4 md:gap-x-10 mt-10">
                  <li>ظرفیت 60 نفر</li>
                  <li>نوع غذا ایرانی</li>
                  <li>مکان لابی هتل</li>
                  <li>نوع سرو انتخابی</li>
                </ul>
              </>
            ) : (
              <>
                <h2 className="mb-4">اطلاعات تور</h2>

                <ul className="grid grid-col-1 md:grid-cols-2 gap-y-4 md:gap-x-10 mt-10">
                  <li>مدت تور: {tour?.duration ?? ""}</li>
                  <li>نوع حمل و نقل: {tour?.transport ?? ""}</li>
                </ul>
              </>
            )}
          </div>

          {/* image */}
          <div
            className="
          w-[120px]
          h-[120px] 
          md:w-[200px] 
          md:h-[150px] 
          relative
          object-cover
          "
          >
            <Image
              className="rounded-[5px]"
              src="/DetailGallery/2.webp"
              fill
              alt="picture"
            />
          </div>
        </div>
      </div>
    </main>
  );
}