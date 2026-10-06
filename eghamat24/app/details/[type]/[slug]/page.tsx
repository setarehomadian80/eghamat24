import hotels from "@/data/hotels.json";
import accommodations from "@/data/accommodation.json";
import detailHotels from "@/data/detailHotel.json";
import detailAccommodation from "@/data/detailAccommodation.json";
import { notFound } from "next/navigation";
import PropertyGallery from "../../PropertyGallery";
import PropertyInfo from "../../PropertyInfo";
import {
  DoorOpen,
  Heart,
  House,
  Share2,
  SquareArrowRightEnter,
  SquareArrowRightExit,
} from "lucide-react";
import PropertyAmenities from "../../PropertyAmenities";
import PropertyAbout from "../../PropertyAbout";
import PropertyTabs from "../../PropertyTabs";
import PropertyBenefits from "../../PropertyBenefits";
import PropertyBoxes from "../../PropertyBoxes";
import PropertyDatePicker from "../../PropertyDatePicker";
import PropertyRooms from "../../PropertyRooms";
import PropertyRules from "../../PropertyRules";
import PropertyDistance from "../../PropertyDistance";
import AmenitiesAndReviews from "../../AmenitiesAndReviews";
import PropertyReviews from "../../PropertyReviews";
import PropertySimilarHotels from "../../PropertySimilarHotels";
import PropertyQuestions from "../../PropertyQuestions";
import PropertyCategories from "../../PropertyCategories";
import PropertyDescription from "../../PropertyDescription";

type Props = {
  params: Promise<{
    type: "hotel" | "accommodation";
    slug: string;
  }>;
};

const time = [
  {
    txt: "ساعت ورود",
    num: "14:00",
    icon: SquareArrowRightEnter,
  },
  {
    txt: "ساعت خروج",
    num: "12:00",
    icon: SquareArrowRightExit,
  },
  {
    txt: "تعداد اتاق",
    num: "286",
    icon: DoorOpen,
  },
  {
    txt: "تعداد طبقه",
    num: "22",
    icon: House,
  },
];

const dec = [
  {
    txt: "ظرفیت لابی",
    value: "با ظرفیت 100 نفر",
  },
  {
    txt: "تاریخ ساخت",
    value: "1393",
  },
  {
    txt: "وضعیت ترافیک ",
    value: "خارج از محدوده ترافیک",
  },
  {
    txt: "وضعیت دید هتل",
    value: "حرم و خیابان",
  },
  {
    txt: "تعداد تخت ها",
    value: "800",
  },
];

export default async function Page({ params }: Props) {
  const { type, slug } = await params;

  let property;

  if (type === "hotel") {
    property = hotels.find((item) => item.slug === slug);
  } else {
    property = accommodations.find((item) => item.slug === slug);
  }

  if (!property) {
    notFound();
  }

  let detail;

  if (type === "hotel") {
    detail = detailHotels.find((item) => item.slug === slug);
  } else {
    detail = detailAccommodation.find((item) => item.slug === slug);
  }

  if (!detail) {
    notFound();
  }

  return (
    <div className="container mx-auto py-10 md:px-5 lg:px-14 xl:px-30 2xl:px-40">
      {/* اطلاعات بالای بنر ها از سایز تبلت به بعد */}

      {/* Tablet */}
      <div className="flex justify-between items-center">
        <div className="hidden md:flex! flex-col">
          <PropertyInfo property={property} type={type} />
        </div>

        <div className="hidden md:flex flex-col gap-5">
          <div className="flex justify-end gap-4">
            <Heart />
            <Share2 />
          </div>

          <button
            className="
              bg-[#fb373e]
              px-6
              py-2
              rounded-[8px]
              text-white
              text-[14px]
            "
          >
            لیست اتاق ها
          </button>
        </div>
      </div>

      {/* Banner swiper */}
      <PropertyGallery slug={slug} type={type} />

      {/* //////////////////// */}
      <div className="px-5 md:px-0">
        <div className="md:hidden mt-8">
          <PropertyInfo property={property} type={type} />
        </div>

        {/* ////////////// Options ////////////*/}
        <PropertyBenefits />

        {/*/////////////// detail /////////////*/}
        <PropertyTabs />

        {/* این باکس برای کنار هم قرار گرفتن دو تا کامپوننت در سایز تبلت به بالا */}
        <div className="lg:grid lg:grid-cols-2">
          {/*//////////// about property ///////////*/}
          <PropertyAbout
            title={detail.title}
            description={detail.des}
            info={time}
            details={dec}
          />

          {/*///////////////// Amenities//////////// */}
          <PropertyAmenities />
        </div>

        {/* ///////////// 2 box /////////// */}
        <PropertyBoxes property={property} type={type} />

        {/* //////////PropertyDatePicker/////// */}
        <PropertyDatePicker detail={detail} />

        {/* Rooms */}
        <PropertyRooms />

        {/* Rules */}
        <PropertyRules slug={slug} type={type} />

        {/* PropertyDistance */}
        <PropertyDistance slug={slug} type={type} />

        {/* AmenitiesAndReviews */}
        <AmenitiesAndReviews slug={slug} type={type} />

        {/* PropertyReviews */}
        <PropertyReviews />

        {/* SimilarHotels */}
        <PropertySimilarHotels slug={slug} type={type} />

        {/* PropertyQuestions */}
        <PropertyQuestions slug={slug} type={type} />

        {/* PropertyCategories */}
        <PropertyCategories slug={slug} type={type} />

        {/* PropertyMoreInFormation */}
        <PropertyDescription />

        {/* end main box */}
      </div>
    </div>
  );
}